import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChamp, IChampService } from './interfaces';
import { CreateChampDto, UpdateChampDto } from './dtos';
import { CatService } from '../cat/cat.service';
import { DriverService } from '../driver/driver.service';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';

@Injectable()
export class ChampService implements IChampService {
  constructor(
    @InjectModel('Champs') private readonly champModel: Model<IChamp>,
    private catService: CatService,
    private driverService: DriverService,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<IChamp[]> {
    return await this.champModel
      .find()
      .populate('data.idDriver')
      .exec();
  }

  async findById(champId: string): Promise<IChamp> {
    return await this.champModel
      .findById(champId)
      .populate('data.idDriver')
      .exec();
  }

  async findOne(options: object): Promise<IChamp> {
    return await this.champModel
      .findOne(options)
      .populate('data.idDriver')
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
      .exec();
  }

  async create(createChampDto: CreateChampDto[]): Promise<any> {
    const ret = [];
    const data = [];
    const err = [];
    try {
      const cat = await this.catService.findOne({
        idLeague: createChampDto[0].idCategory,
      });
      for (const champ of createChampDto) {
        const newChamp = new this.champModel(champ);
        try {
          for (let i = 0; i < champ.data.length; i++) {
            const driv = await this.driverService.findOne({
              idRCtrl: champ.data[i].idPlayer,
            });
            newChamp.data[i].idDriver = driv._id;
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
              champ,
              champ.idCategory,
            ),
          );
        }
      }
    } catch (ex) {
      this.eH.logger(ex, 'Championship', 'Create');
    }
    ret.push({ error: err });
    ret.push({ data: data });
    return ret;
  }

  async update(champId: string, newChamp: UpdateChampDto): Promise<IChamp> {
    const champ = await this.champModel.findById(champId).exec();

    if (!champ._id) {
      Logger.log('Champ not found');
    }

    return await this.champModel
      .findByIdAndUpdate(champId, newChamp, { new: true })
      .exec();
  }

  async delete(champId: string): Promise<string> {
    try {
      await this.champModel.findByIdAndRemove(champId).exec();
      return 'The Champ has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Champ could not be deleted';
    }
  }
}
