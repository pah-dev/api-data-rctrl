import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSectionDto, UpdateSectionDto } from './dtos';
import { ISection, ISectionService } from './interfaces';

@Injectable()
export class SectionService implements ISectionService {
  constructor(
    @InjectModel('Sections') private readonly secModel: Model<ISection>,
  ) {}

  async findAll(): Promise<ISection[]> {
    return await this.secModel
      .find()
      .populate('orgs')
      .sort({ rank: 1 })
      .exec();
  }

  async findById(sectionId: string): Promise<ISection> {
    return await this.secModel
      .findById(sectionId)
      .populate('orgs')
      .exec();
  }

  async findOne(options: object): Promise<ISection> {
    return await this.secModel
      .findOne(options)
      .populate('orgs')
      .exec();
  }

  async create(createSectionDto: CreateSectionDto[]): Promise<any> {
    const ret = [];
    try {
      for (const sec of createSectionDto) {
        const newSec = new this.secModel(sec);
        try {
          ret.push(await newSec.save());
        } catch (error) {
          Logger.error('Error saving Section: ' + sec.idSec + ' - ' + error);
          ret.push('Error saving Section: ' + sec.idSec);
        }
      }
    } catch (error) {
      Logger.error(error);
    }
    return ret;
  }

  async update(
    sectionId: string,
    newSection: UpdateSectionDto,
  ): Promise<ISection> {
    const sec = await this.secModel.findById(sectionId).exec();
    if (!sec._id) {
      Logger.warn('Section not found');
    }
    return await this.secModel
      .findByIdAndUpdate(sectionId, newSection, { new: true })
      .exec();
  }

  async delete(sectionId: string): Promise<string> {
    try {
      await this.secModel.findByIdAndRemove(sectionId).exec();
      return 'The Section has been deleted';
    } catch (err) {
      Logger.error(err);
      return 'The Section could not be deleted';
    }
  }

  //   async addOrg(secId: string, orgId: string): Promise<ISection> {
  //     const sec = await this.secModel.findById(secId).exec();
  //     if (!sec._id) {
  //       Logger.warn('Section not found');
  //     }
  //     sec.orgs.push(orgId);
  //     return await this.secModel
  //       .findByIdAndUpdate(secId, sec, { new: true })
  //       .exec();
  //   }
}
