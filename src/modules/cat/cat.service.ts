import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICat, ICatService } from './interfaces';
import { CreateCatDto, UpdateCatDto } from './dtos';
import { OrgService } from '../org/org.service';
import { AnyARecord } from 'dns';

@Injectable()
export class CatService implements ICatService {
  constructor(
    @InjectModel('Cats') private readonly catModel: Model<ICat>,
    private orgService: OrgService,
  ) {}

  async findAll(): Promise<ICat[]> {
    return await this.catModel.find().exec();
  }

  async findById(catId: string): Promise<ICat> {
    return await this.catModel.findById(catId);
  }

  async findOne(options: object): Promise<ICat> {
    return await this.catModel.findOne(options).exec();
  }

  async create(createCatDto: CreateCatDto[]): Promise<any> {
    const ret = [];
    try {
      const org = await this.orgService.findOne({
        idLeague: createCatDto[0].idLeague,
      });
      for (const cat of createCatDto) {
        const newCat = new this.catModel(cat);
        try {
          newCat.idOrg = org._id;
          const savedCat = await newCat.save();
          if (savedCat._id) {
            org.categories.push(savedCat._id);
            await this.orgService.update(org._id, org);
          }
          ret.push(savedCat);
        } catch (error) {
          Logger.error('Error saving Category: ' + cat.idCategory + error);
          ret.push('Error saving Category: ' + cat.idCategory);
        }
      }
    } catch (err) {
      Logger.error(err, 'CreateCategory');
    }
    return ret;
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
