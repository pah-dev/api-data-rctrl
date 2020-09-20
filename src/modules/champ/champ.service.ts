import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChamp, IChampService } from './interfaces';
import { CreateChampDto, UpdateChampDto } from './dtos';
import { CatService } from '../cat/cat.service';
import { DriverService } from '../driver/driver.service';

@Injectable()
export class ChampService implements IChampService {
  constructor(
    @InjectModel('Champs') private readonly champModel: Model<IChamp>,
    private catService: CatService,
    private driverService: DriverService,
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
      .populate('idDriver')
      .exec();
  }

  async create(createChampDto: CreateChampDto[]): Promise<any> {
    const ret = [];
    try {
      const cat = await this.catService.findOne({
        idCategory: createChampDto[0].idCategory,
      });
      for (const champ of createChampDto) {
        const newChamp = new this.champModel(champ);
        for (let i = 0; i < champ.data.length; i++) {
          const driv = await this.driverService.findOne({
            idRCtrl: champ.data[i].idPlayer,
          });
          newChamp.data[i].idDriver = driv._id;
        }
        try {
          newChamp.idOrg = cat.idOrg;
          newChamp.idCat = cat._id;
          ret.push(await newChamp.save());
        } catch (error) {
          Logger.error(
            'Error saving Championship: ' + champ.idCategory + ' - ' + error,
          );
          ret.push('Error saving Championship: ' + champ.idCategory);
        }
      }
    } catch (error) {
      Logger.error('Error:' + ' - ' + error);
    }
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
