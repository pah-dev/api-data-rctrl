import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IPilot, IPilotService } from './interfaces';
import { CreatePilotDto, UpdatePilotDto } from './dtos';

@Injectable()
export class PilotService implements IPilotService {
  constructor(
    @InjectModel('Pilot') private readonly pilotModel: Model<IPilot>,
  ) {}

  async findAll(): Promise<IPilot[]> {
    return await this.pilotModel.find().exec();
  }

  async findById(pilotId: number): Promise<IPilot> {
    return await this.pilotModel.findById(pilotId);
  }

  async findOne(options: object): Promise<IPilot> {
    return await this.pilotModel.findOne(options).exec();
  }

  async create(createPilotDto: CreatePilotDto): Promise<IPilot> {
    const newPilot = new this.pilotModel(createPilotDto);
    return await newPilot.save();
  }

  async update(pilotId: number, newPilot: UpdatePilotDto): Promise<IPilot> {
    const pilot = await this.pilotModel.findById(pilotId).exec();

    if (!pilot._id) {
      Logger.log('Pilot not found');
    }

    return await this.pilotModel
      .findByIdAndUpdate(pilotId, newPilot, { new: true })
      .exec();
  }

  async delete(pilotId: number): Promise<string> {
    try {
      await this.pilotModel.findByIdAndRemove(pilotId).exec();
      return 'The Pilot has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Pilot could not be deleted';
    }
  }
}
