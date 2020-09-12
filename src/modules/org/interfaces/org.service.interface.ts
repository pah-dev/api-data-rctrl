import { CreateOrgDto, UpdateOrgDto } from '../dtos';
import { IOrg } from './org.interface';

export interface IOrgService {
  findAll(): Promise<IOrg[]>;
  findById(pilotId: number): Promise<IOrg | null>;
  findOne(options: object): Promise<IOrg | null>;
  create(pilot: CreateOrgDto): Promise<IOrg>;
  update(pilotId: number, newOrg: UpdateOrgDto): Promise<IOrg | null>;
  delete(pilotId: number): Promise<string>;
}
