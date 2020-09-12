import { CreateChampDto, UpdateChampDto } from '../dtos';
import { IChamp } from './champ.interface';

export interface IChampService {
  findAll(): Promise<IChamp[]>;
  findById(champId: string): Promise<IChamp | null>;
  findOne(options: object): Promise<IChamp | null>;
  create(champ: CreateChampDto): Promise<IChamp>;
  update(champId: string, newChamp: UpdateChampDto): Promise<IChamp | null>;
  delete(champId: string): Promise<string>;
}
