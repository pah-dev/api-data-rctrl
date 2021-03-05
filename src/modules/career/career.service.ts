import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICareer, ICareerService } from './interfaces';
import { CreateCareerDto, UpdateCareerDto } from './dtos';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';

@Injectable()
export class CareerService implements ICareerService {
  constructor(
    @InjectModel('Careers') private readonly careerModel: Model<ICareer>,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<ICareer[]> {
    return await this.careerModel
      .find()
      .populate('idPlayer')
      .exec();
  }

  async findById(careerId: string): Promise<ICareer> {
    return await this.careerModel.findById(careerId);
  }

  async findOne(options: object): Promise<ICareer> {
    return await this.careerModel.findOne(options).exec();
  }

  async getIds(catId: string, year: string): Promise<ICareer[]> {
    let condition = {};
    if (year == '0') {
      condition = { idCat: catId };
    } else {
      condition = { idCat: catId, numSeason: { $gte: parseInt(year) } };
    }
    return await this.careerModel
      .find(condition)
      .select('idPlayer')
      .exec();
  }

  async getCareersCat(catId: string, year: string): Promise<ICareer[]> {
    return await this.careerModel
      .find({ idCat: catId, numSeason: parseInt(year) })
      .populate('idCat')
      .exec();
  }

  async create(createCareerDto: CreateCareerDto[]): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      for (const career of createCareerDto) {
        const newCareer = new this.careerModel(career);
        try {
          data.push(await newCareer.save());
        } catch (ex) {
          err.push(
            this.eH.logger(ex, 'Career', 'Create', career, career.idPlayer),
          );
        }
      }
    } catch (ex) {
      err.push(this.eH.logger(ex, 'Career', 'Create', createCareerDto));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async update(careerId: string, newCareer: UpdateCareerDto): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      const career = await this.careerModel.findById(careerId).exec();
      if (!career._id) {
        Logger.log('Career not found');
      }
      const updCareer = new this.careerModel(newCareer);
      data.push(
        await this.careerModel
          .findByIdAndUpdate(careerId, updCareer, { new: true })
          .exec(),
      );
    } catch (ex) {
      err.push(this.eH.logger(ex, 'Career', 'Update', newCareer));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async delete(careerId: string): Promise<string> {
    try {
      await this.careerModel.findByIdAndRemove(careerId).exec();
      return 'The Career has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Career could not be deleted';
    }
  }
}
