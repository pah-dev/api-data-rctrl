import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { CreateOrgDto, UpdateOrgDto } from './dtos';
import { InjectModel } from '@nestjs/mongoose';
import { IOrg, IOrgService } from './interfaces';

@Injectable()
export class OrgService implements IOrgService {
  constructor(@InjectModel('Orgs') private readonly orgModel: Model<IOrg>) {}

  async findAll(): Promise<IOrg[]> {
    return await this.orgModel
      .find()
      .populate('categories')
      .exec();
  }

  async findById(driverId: string): Promise<IOrg> {
    return await this.orgModel
      .findById(driverId)
      .populate('categories')
      .exec();
  }

  async findOne(options: object): Promise<IOrg> {
    return await this.orgModel
      .findOne(options)
      .populate('categories')
      .exec();
  }

  async create(createOrgDto: CreateOrgDto): Promise<IOrg> {
    const newOrg = new this.orgModel(createOrgDto);
    return await newOrg.save();
  }

  async update(driverId: string, newOrg: UpdateOrgDto): Promise<IOrg> {
    const driver = await this.orgModel.findById(driverId).exec();

    if (!driver._id) {
      Logger.log('Organization not found');
    }

    return await this.orgModel
      .findByIdAndUpdate(driverId, newOrg, { new: true })
      .exec();
  }

  async delete(driverId: string): Promise<string> {
    try {
      await this.orgModel.findByIdAndRemove(driverId).exec();
      return 'The Organization has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Organization could not be deleted';
    }
  }
}
