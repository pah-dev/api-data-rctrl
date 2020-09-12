import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ICalendar, ICalendarService } from './interfaces';
import { CreateCalendarDto, UpdateCalendarDto } from './dtos';

@Injectable()
export class CalendarService implements ICalendarService {
  constructor(
    @InjectModel('Calendar') private readonly calendarModel: Model<ICalendar>,
  ) {}

  async findAll(): Promise<ICalendar[]> {
    return await this.calendarModel.find().exec();
  }

  async findById(calendarId: number): Promise<ICalendar> {
    return await this.calendarModel.findById(calendarId);
  }

  async findOne(options: object): Promise<ICalendar> {
    return await this.calendarModel.findOne(options).exec();
  }

  async create(createCalendarDto: CreateCalendarDto): Promise<ICalendar> {
    const newCalendar = new this.calendarModel(createCalendarDto);
    return await newCalendar.save();
  }

  async update(
    calendarId: number,
    newCalendar: UpdateCalendarDto,
  ): Promise<ICalendar> {
    const calendar = await this.calendarModel.findById(calendarId).exec();

    if (!calendar._id) {
      Logger.log('Calendar not found');
    }

    return await this.calendarModel
      .findByIdAndUpdate(calendarId, newCalendar, { new: true })
      .exec();
  }

  async delete(calendarId: number): Promise<string> {
    try {
      await this.calendarModel.findByIdAndRemove(calendarId).exec();
      return 'The Calendar has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Calendar could not be deleted';
    }
  }
}
