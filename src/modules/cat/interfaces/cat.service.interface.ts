import { CreateCatDto, UpdateCatDto } from '../dtos';
import { ICat } from './cat.interface';

export interface ICatService {
  findAll(): Promise<ICat[]>;
  findById(catId: string): Promise<ICat | null>;
  findOne(options: object): Promise<ICat | null>;
  create(cat: CreateCatDto[]): Promise<ICat>;
  update(catId: string, newCat: UpdateCatDto): Promise<ICat | null>;
  delete(catId: string): Promise<string>;
}
