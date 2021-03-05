import { CreateCareerDto, UpdateCareerDto } from '../dtos';
import { ICareer } from './career.interface';

export interface ICareerService {
  findAll(): Promise<ICareer[]>;
  findById(careerId: string): Promise<ICareer | null>;
  findOne(options: object): Promise<ICareer | null>;
  create(career: CreateCareerDto[]): Promise<ICareer>;
  update(careerId: string, newCareer: UpdateCareerDto): Promise<ICareer | null>;
  delete(careerId: string): Promise<string>;
}
