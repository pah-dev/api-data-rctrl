import { CreateCalendarDto, UpdateCalendarDto } from '../dtos';
import { ICalendar } from './calendar.interface';

export interface ICalendarService {
  findAll(): Promise<ICalendar[]>;
  findById(calendarId: number): Promise<ICalendar | null>;
  findOne(options: object): Promise<ICalendar | null>;
  create(calendar: CreateCalendarDto): Promise<ICalendar>;
  update(
    calendarId: number,
    newCalendar: UpdateCalendarDto,
  ): Promise<ICalendar | null>;
  delete(calendarId: number): Promise<string>;
}
