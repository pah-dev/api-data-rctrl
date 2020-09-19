import { CreateOrgDto, UpdateOrgDto } from '../dtos';
import { IOrg } from './org.interface';

export interface IOrgService {
  findAll(): Promise<IOrg[]>;
  findById(orgId: string): Promise<IOrg | null>;
  findOne(options: object): Promise<IOrg | null>;
  create(org: CreateOrgDto[]): Promise<IOrg>;
  update(orgId: string, newOrg: UpdateOrgDto): Promise<IOrg | null>;
  delete(orgId: string): Promise<string>;
}
