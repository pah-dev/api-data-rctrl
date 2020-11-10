import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { CreateOrgDto, UpdateOrgDto } from './dtos';
import { InjectModel } from '@nestjs/mongoose';
import { IOrg, IOrgService } from './interfaces';
import { SectionService } from '../section/section.service';
import { ISection } from '../section/interfaces';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';

@Injectable()
export class OrgService implements IOrgService {
  constructor(
    @InjectModel('Orgs') private readonly orgModel: Model<IOrg>,
    private sectionService: SectionService,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<IOrg[]> {
    return await this.orgModel
      .find()
      .populate('categories')
      .sort({ rank: 1 })
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

  async getNav(): Promise<ISection[]> {
    const secs = await this.sectionService.findAllPop();
    for (const sec of secs) {
      const orgs = await this.orgModel
        .find({ idSection: sec._id })
        .populate('categories')
        .sort({ rank: 1 })
        .exec();
      sec.orgs = orgs;
    }
    return secs;
  }

  async create(createOrgDto: CreateOrgDto[]): Promise<any> {
    const ret = [];
    const data = [];
    const err = [];
    for (const org of createOrgDto) {
      try {
        const sec = await this.sectionService.findOne({
          idSec: org.idSection,
        });
        const newOrg = new this.orgModel(org);
        newOrg.idSection = sec._id;
        const savedOrg = await newOrg.save();
        if (savedOrg._id) {
          sec.orgs.push(savedOrg._id);
          await this.sectionService.update(sec._id, sec);
        }
        data.push(savedOrg);
      } catch (ex) {
        err.push(this.eH.logger(ex, 'Organization', 'Create', org, org.idOrg));
      }
    }
    ret.push({ error: err });
    ret.push({ data: data });
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
