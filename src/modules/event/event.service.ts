import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IEvent, IEventService } from './interfaces';
import { CreateEventDto, UpdateEventDto } from './dtos';

@Injectable()
export class EventService implements IEventService {
  constructor(
    @InjectModel('Events') private readonly eventModel: Model<IEvent>,
  ) {}

  async findAll(): Promise<IEvent[]> {
    return await this.eventModel.find().exec();
  }

  async findById(eventId: string): Promise<IEvent> {
    return await this.eventModel.findById(eventId);
  }

  async findOne(options: object): Promise<IEvent> {
    return await this.eventModel.findOne(options).exec();
  }

  async create(createEventDto: CreateEventDto): Promise<IEvent> {
    const newEvent = new this.eventModel(createEventDto);
    return await newEvent.save();
  }

  async update(eventId: string, newEvent: UpdateEventDto): Promise<IEvent> {
    const event = await this.eventModel.findById(eventId).exec();

    if (!event._id) {
      Logger.log('Event not found');
    }

    return await this.eventModel
      .findByIdAndUpdate(eventId, newEvent, { new: true })
      .exec();
  }

  async delete(eventId: string): Promise<string> {
    try {
      await this.eventModel.findByIdAndRemove(eventId).exec();
      return 'The Event has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Event could not be deleted';
    }
  }
}
