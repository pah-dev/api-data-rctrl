import { CreateEventDto, UpdateEventDto } from '../dtos';
import { IEvent } from './event.interface';

export interface IEventService {
  findAll(): Promise<IEvent[]>;
  findById(eventId: string): Promise<IEvent | null>;
  findOne(options: object): Promise<IEvent | null>;
  create(event: CreateEventDto[]): Promise<IEvent>;
  update(eventId: string, newEvent: UpdateEventDto): Promise<IEvent | null>;
  delete(eventId: string): Promise<string>;
}
