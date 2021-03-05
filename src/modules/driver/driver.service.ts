import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDriver, IDriverService } from './interfaces';
import { CreateDriverDto, UpdateDriverDto } from './dtos';
import { CatService } from '../cat/cat.service';
import { TeamService } from '../team/team.service';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';
import { CreateCareerDto } from '../career/dtos';
import { CareerService } from '../career/career.service';

@Injectable()
export class DriverService implements IDriverService {
  constructor(
    @InjectModel('Drivers') private readonly driverModel: Model<IDriver>,
    private catService: CatService,
    private teamService: TeamService,
    private careerService: CareerService,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<IDriver[]> {
    return await this.driverModel
      .find()
      .populate('idLeague')
      .exec();
  }

  async findById(driverId: string): Promise<IDriver> {
    return await this.driverModel.findById(driverId);
  }

  async findOne(options: object): Promise<IDriver> {
    return await this.driverModel.findOne(options).exec();
  }

  async getIds(catId: string, year: string): Promise<IDriver[]> {
    let condition = {};
    if (year == '0') {
      condition = { idCat: catId };
    } else {
      condition = { idCat: catId, numSeason: { $gte: parseInt(year) } };
    }
    return await this.driverModel
      .find(condition)
      .select('idPlayer')
      .exec();
  }

  async getDriversCat(catId: string, year: string): Promise<IDriver[]> {
    return await this.driverModel
      .find({ idCat: catId, numSeason: parseInt(year) })
      .populate('idCat')
      .exec();
  }

  async create(createDriverDto: CreateDriverDto[]): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      const cat = await this.catService.findOne({
        idLeague: createDriverDto[0].idCategory,
      });
      for (const driver of createDriverDto) {
        const career: CreateCareerDto = new CreateCareerDto();
        const newDriver = new this.driverModel(driver);
        const team = await this.teamService.findOne({ idTeam: driver.idTeam });
        try {
          if (team) {
            newDriver.idTeam = team._id;
          } else {
            newDriver.idTeam = undefined;
          }
          newDriver.idCat = cat._id;
          newDriver.idOrg = cat.idOrg;
          data.push(await newDriver.save());

          career.idCat = cat._id;
          career.idOrg = cat.idOrg;
          career.idPlayer = newDriver._id;
          career.idTeam = newDriver.idTeam;
          career.numSeason = newDriver.numSeason;
          career.idCareer =
            career.numSeason +
            '|' +
            career.idCat +
            '|' +
            career.idPlayer +
            '|' +
            career.idTeam;
          data.push(await this.careerService.create([career]));
        } catch (ex) {
          err.push(
            this.eH.logger(ex, 'Driver', 'Create', driver, driver.idPlayer),
          );
        }
      }
    } catch (ex) {
      err.push(this.eH.logger(ex, 'Driver', 'Create', createDriverDto));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async update(
    driverId: string,
    updateDriverDto: UpdateDriverDto[],
  ): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      for (const newDriver of updateDriverDto) {
        let driver = null;
        if (driverId == '0') {
          driver = await this.driverModel
            .findOne({ idPlayer: newDriver.idPlayer })
            .exec();
        } else {
          driver = await this.driverModel.findById(driverId).exec();
        }
        if (!driver) {
          Logger.log('Driver not found');
          data.push(await this.create([newDriver]));
        } else {
          const updDriver = new this.driverModel(newDriver);
          const driverObj = updDriver.toObject();
          delete driverObj._id;
          let cat = null;
          cat = await this.catService.findById(newDriver.idCat);
          if (!cat) {
            const oneCat = await this.catService.findOne({
              idLeague: newDriver.idCategory,
            });
            if (oneCat) {
              driverObj.idCat = oneCat._id;
              driverObj.idOrg = oneCat.idOrg;
            }
          } else {
            driverObj.idTeam = cat._id;
            driverObj.idOrg = cat.idOrg;
          }
          let team = null;
          if (!driverObj.idTeam) {
            team = await this.teamService.findOne({
              strTeam: driverObj.strTeam,
              idCat: driverObj.idCat,
            });
          } else {
            team = await this.teamService.findById(driverObj.idTeam);
          }
          if (!team) {
            const oneTeam = await this.teamService.findOne({
              idTeam: driverObj.idTeam,
            });
            if (oneTeam) {
              driverObj.idTeam = oneTeam._id;
            }
          } else {
            driverObj.idTeam = team._id;
          }
          data.push(
            await this.driverModel
              .findByIdAndUpdate(driver._id, driverObj, { new: true })
              .exec(),
          );
          const idCareer =
            driverObj.numSeason +
            '|' +
            driverObj.idCat +
            '|' +
            driverObj.idPlayer +
            '|' +
            driverObj.idTeam;
          const career = await this.careerService.findOne({
            idCareer: idCareer,
          });
          if (!career) {
            const dtoCareer: CreateCareerDto = new CreateCareerDto();
            dtoCareer.idCat = driverObj.idCat;
            dtoCareer.idOrg = driverObj.idOrg;
            dtoCareer.idPlayer = driver._id;
            dtoCareer.idTeam = driverObj.idTeam;
            dtoCareer.numSeason = driverObj.numSeason;
            dtoCareer.idCareer = idCareer;
            data.push(await this.careerService.create([dtoCareer]));
          }
        }
      }
    } catch (ex) {
      err.push(this.eH.logger(ex, 'Driver', 'Update', updateDriverDto));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async delete(driverId: string): Promise<string> {
    try {
      await this.driverModel.findByIdAndRemove(driverId).exec();
      return 'The Driver has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Driver could not be deleted';
    }
  }
}
