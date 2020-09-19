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

  async findById(orgId: string): Promise<IOrg> {
    return await this.orgModel
      .findById(orgId)
      .populate('categories')
      .exec();
  }

  async findOne(options: object): Promise<IOrg> {
    return await this.orgModel
      .findOne(options)
      .populate('categories')
      .exec();
  }

  async create(createOrgDto: CreateOrgDto[]): Promise<any> {
    const ret = [];
    try {
      for (const org of createOrgDto) {
        const newOrg = new this.orgModel(org);
        try {
          ret.push(await newOrg.save());
        } catch (error) {
          Logger.error('Error saving Organization: ' + org.idLeague + error);
          ret.push('Error saving Organization: ' + org.idLeague);
        }
      }
    } catch (error) {
      Logger.error(error);
    }
    return ret;
  }

  async update(orgId: string, newOrg: UpdateOrgDto): Promise<IOrg> {
    const org = await this.orgModel.findById(orgId).exec();
    if (!org._id) {
      Logger.warn('Organization not found');
    }
    return await this.orgModel
      .findByIdAndUpdate(orgId, newOrg, { new: true })
      .exec();
  }

  async delete(orgId: string): Promise<string> {
    try {
      await this.orgModel.findByIdAndRemove(orgId).exec();
      return 'The Organization has been deleted';
    } catch (err) {
      Logger.error(err);
      return 'The Organization could not be deleted';
    }
  }

  async addCategory(orgId: string, catId: string): Promise<IOrg> {
    const org = await this.orgModel.findById(orgId).exec();
    if (!org._id) {
      Logger.warn('Organization not found');
    }
    org.categories.push(catId);
    return await this.orgModel
      .findByIdAndUpdate(orgId, org, { new: true })
      .exec();
  }
}
