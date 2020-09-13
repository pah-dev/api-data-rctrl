import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICat, ICatService } from './interfaces';
import { CreateCatDto, UpdateCatDto } from './dtos';

@Injectable()
export class CatService implements ICatService {
  constructor(@InjectModel('Cats') private readonly catModel: Model<ICat>) {}

  async findAll(): Promise<ICat[]> {
    return await this.catModel.find().exec();
  }

  async findById(catId: string): Promise<ICat> {
    return await this.catModel.findById(catId);
  }

  async findOne(options: object): Promise<ICat> {
    return await this.catModel.findOne(options).exec();
  }

  async create(createCatDto: CreateCatDto): Promise<ICat> {
    const newCat = new this.catModel(createCatDto);
    return await newCat.save();
  }

  async update(catId: string, newCat: UpdateCatDto): Promise<ICat> {
    const cat = await this.catModel.findById(catId).exec();

    if (!cat._id) {
      Logger.log('Cat not found');
    }

    return await this.catModel
      .findByIdAndUpdate(catId, newCat, { new: true })
      .exec();
  }

  async delete(catId: string): Promise<string> {
    try {
      await this.catModel.findByIdAndRemove(catId).exec();
      return 'The Cat has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Cat could not be deleted';
    }
  }
}
