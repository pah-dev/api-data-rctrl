import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IEvent, IEventService } from './interfaces';
import { CreateEventDto, UpdateEventDto } from './dtos';
import { CatService } from '../cat/cat.service';
import { DriverService } from '../driver/driver.service';
import { CircuitService } from '../circuit/circuit.service';

@Injectable()
export class EventService implements IEventService {
  constructor(
    @InjectModel('Events') private readonly eventModel: Model<IEvent>,
    private catService: CatService,
    private driverService: DriverService,
    private circuitService: CircuitService,
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

  async getEventsCat(catId: string, year: string): Promise<IEvent[]> {
    return await this.eventModel
      .find({ idCat: catId, numSeason: parseInt(year) })
      .populate('idCat')
      .populate('idCircuit')
      .exec();
  }

  async create(createEventDto: CreateEventDto[]): Promise<any> {
    const ret = [];
    try {
      const cat = await this.catService.findOne({
        idLeague: createEventDto[0].idCategory,
      });
      for (const event of createEventDto) {
        const driv = await this.driverService.findOne({
          idRCtrl: event.idWinner,
        });
        const circuit = await this.circuitService.findOne({
          idRCtrl: event.idCircuit,
        });
        const newEvent = new this.eventModel(event);
        try {
          if (driv) newEvent.idWinner = driv._id;
          else newEvent.idWinner = undefined;
          if (circuit) newEvent.idCircuit = circuit._id;
          else newEvent.idCircuit = undefined;
          newEvent.idOrg = cat.idOrg;
          newEvent.idCat = cat._id;
          ret.push(await newEvent.save());
        } catch (error) {
          Logger.error('Error saving Event: ' + event.idEvent + ' - ' + error);
          ret.push('Error saving Event: ' + event.idEvent);
        }
      }
    } catch (error) {
      Logger.error(error);
    }
    return ret;
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
