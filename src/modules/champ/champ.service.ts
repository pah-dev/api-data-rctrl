import { Model } from 'mongoose';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChamp, IChampService } from './interfaces';
import { CreateChampDto, UpdateChampDto } from './dtos';
import { CatService } from '../cat/cat.service';
import { DriverService } from '../driver/driver.service';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';
import { TeamService } from '../team/team.service';

@Injectable()
export class ChampService implements IChampService {
  constructor(
    @InjectModel('Champs') private readonly champModel: Model<IChamp>,
    private catService: CatService,
    private driverService: DriverService,
    private teamService: TeamService,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<IChamp[]> {
    return await this.champModel
      .find()
      .populate('data.idDriver')
      .populate('data.idTeam')
      .exec();
  }

  async findById(champId: string): Promise<IChamp> {
    return await this.champModel
      .findById(champId)
      .populate('data.idDriver')
      .populate('data.idTeam')
      .exec();
  }

  async findOne(options: object): Promise<IChamp> {
    return await this.champModel
      .findOne(options)
      .populate('data.idDriver')
      .populate('data.idTeam')
      .exec();
  }

  async getIds(catId: string, year: string): Promise<IChamp[]> {
    return await this.champModel
      .find({ idCat: catId, numSeason: parseInt(year) })
      .select('idChamp')
      .exec();
  }

  async getChampCat(
    catId: string,
    year: string,
    type: string,
  ): Promise<IChamp> {
    return await this.champModel
      .findOne({ idCat: catId, numSeason: parseInt(year), typeChamp: type })
      .populate('data.idDriver')
      .populate('data.idTeam')
      .exec();
  }

  async create(createChampDto: CreateChampDto): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      const cat = await this.catService.findOne({
        idLeague: createChampDto.idCategory,
      });
      const newChamp = new this.champModel(createChampDto);
      try {
        for (let i = 0; i < createChampDto.data.length; i++) {
          if (newChamp.typeChamp == 'D') {
            const driv = await this.driverService.findOne({
              idRCtrl: createChampDto.data[i].idPlayer,
            });
            newChamp.data[i].idDriver = driv?._id;
          } else {
            const team = await this.teamService.findOne({
              idRCtrl: createChampDto.data[i].idPlayer,
            });
            newChamp.data[i].idTeam = team?._id;
          }
        }
        newChamp.idOrg = cat.idOrg;
        newChamp.idCat = cat._id;
        data.push(await newChamp.save());
      } catch (ex) {
        err.push(
          this.eH.logger(
            ex,
            'Championship',
            'Create',
            createChampDto,
            createChampDto.idCategory,
          ),
        );
      }
    } catch (ex) {
      this.eH.logger(ex, 'Championship', 'Create', createChampDto);
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async update(champId: string, updChamp: UpdateChampDto): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      const champ = await this.champModel.findById(champId).exec();
      if (!champ._id) {
        throw new NotFoundException();
      }
      try {
        const newChamp = new this.champModel(updChamp);
        const champObj = newChamp.toObject();
        delete champObj._id;
        for (let i = 0; i < updChamp.data.length; i++) {
          if (champObj.typeChamp == 'D') {
            const driv = await this.driverService.findOne({
              idRCtrl: updChamp.data[i].idPlayer,
            });
            champObj.data[i].idDriver = driv?._id;
          } else {
            const team = await this.teamService.findOne({
              idRCtrl: updChamp.data[i].idPlayer,
            });
            champObj.data[i].idTeam = team?._id;
          }
        }
        data.push(
          await this.champModel
            .findByIdAndUpdate(champId, champObj, { new: true, upsert: true })
            .exec(),
        );
      } catch (ex) {
        err.push(
          this.eH.logger(
            ex,
            'Championship',
            'Update',
            updChamp,
            updChamp.idCategory,
          ),
        );
      }
    } catch (ex) {
      this.eH.logger(ex, 'Championship', 'Update', updChamp);
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async delete(champId: string): Promise<string> {
    try {
      await this.champModel.findByIdAndRemove(champId).exec();
      return 'The Championship has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Championship could not be deleted';
    }
  }
}
