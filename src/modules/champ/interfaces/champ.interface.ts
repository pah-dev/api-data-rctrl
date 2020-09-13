import { Document } from 'mongoose';
import { IOrg } from '../../org/interfaces';
import { BaseInterface } from '../../../shared/base.interface';
import { IChampData } from './champ-data.interface';
import { ICat } from '../../cat/interfaces';

export interface IChamp extends Document, BaseInterface {
  readonly idLeague: IOrg;
  readonly idCategory: ICat;
  readonly strSeason: String;
  readonly data: IChampData[];
  readonly sumPoints: Number;
}
