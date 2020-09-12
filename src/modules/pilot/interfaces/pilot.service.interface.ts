import { CreatePilotDto, UpdatePilotDto } from '../dtos';
import { IPilot } from './pilot.interface';

export interface IPilotService {
  findAll(): Promise<IPilot[]>;
  findById(pilotId: number): Promise<IPilot | null>;
  findOne(options: object): Promise<IPilot | null>;
  create(pilot: CreatePilotDto): Promise<IPilot>;
  update(pilotId: number, newPilot: UpdatePilotDto): Promise<IPilot | null>;
  delete(pilotId: number): Promise<string>;
}
