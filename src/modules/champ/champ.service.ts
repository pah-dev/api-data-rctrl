import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IChamp, IChampService } from './interfaces';
import { CreateChampDto, UpdateChampDto } from './dtos';

@Injectable()
export class ChampService implements IChampService {
  constructor(
    @InjectModel('Champs') private readonly champModel: Model<IChamp>,
  ) {}

  async findAll(): Promise<IChamp[]> {
    return await this.champModel
      .find()
      .populate('data.idPlayer')
      .exec();
  }

  async findById(champId: string): Promise<IChamp> {
    return await this.champModel
      .findById(champId)
      .populate('data.idPlayer')
      .exec();
  }

  async findOne(options: object): Promise<IChamp> {
    return await this.champModel
      .findOne(options)
      .populate('idPlayer')
      .exec();
  }

  async create(createChampDto: CreateChampDto): Promise<IChamp> {
    const newChamp = new this.champModel(createChampDto);
    return await newChamp.save();
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
