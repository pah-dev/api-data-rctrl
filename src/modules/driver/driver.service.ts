import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDriver, IDriverService } from './interfaces';
import { CreateDriverDto, UpdateDriverDto } from './dtos';
import { CatService } from '../cat/cat.service';
import { TeamService } from '../team/team.service';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';

@Injectable()
export class DriverService implements IDriverService {
  constructor(
    @InjectModel('Drivers') private readonly driverModel: Model<IDriver>,
    private catService: CatService,
    private teamService: TeamService,
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

  async update(driverId: string, newDriver: UpdateDriverDto): Promise<IDriver> {
    const driver = await this.driverModel.findById(driverId).exec();
    if (!driver._id) {
      Logger.log('Driver not found');
    }
    return await this.driverModel
      .findByIdAndUpdate(driverId, newDriver, { new: true })
      .exec();
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
