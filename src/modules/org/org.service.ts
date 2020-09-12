import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { ReadOrgDto, CreateOrgDto, UpdateOrgDto } from './dtos';
import { InjectModel } from '@nestjs/mongoose';
import { IOrg, IOrgService } from './interfaces';

@Injectable()
export class OrgService implements IOrgService {
  constructor(@InjectModel('Org') private readonly orgModel: Model<IOrg>) {}

  async findAll(): Promise<IOrg[]> {
    return await this.orgModel.find().exec();
  }

  async findById(pilotId: number): Promise<IOrg> {
    return await this.orgModel.findById(pilotId);
  }

  async findOne(options: object): Promise<IOrg> {
    return await this.orgModel.findOne(options).exec();
  }

  async create(createOrgDto: CreateOrgDto): Promise<IOrg> {
    const newOrg = new this.orgModel(createOrgDto);
    return await newOrg.save();
  }

  async update(pilotId: number, newOrg: UpdateOrgDto): Promise<IOrg> {
    const pilot = await this.orgModel.findById(pilotId).exec();

    if (!pilot._id) {
      Logger.log('Org not found');
    }

    return await this.orgModel
      .findByIdAndUpdate(pilotId, newOrg, { new: true })
      .exec();
  }

  async delete(pilotId: number): Promise<string> {
    try {
      await this.orgModel.findByIdAndRemove(pilotId).exec();
      return 'The Org has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Org could not be deleted';
    }
  }
}
