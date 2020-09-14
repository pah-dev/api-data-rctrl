import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';
import { IChampData } from './champ-data.interface';

export interface IChamp extends Document, BaseInterface {
  readonly idOrg: string;
  readonly idCat: string;
  readonly idEspn: string;
  readonly idTsdb: string;
  readonly idMss: string;
  readonly idMyL: string;
  readonly idRCtrl: string;
  readonly strSeason: string;
  readonly numSeason: number;
  readonly data: IChampData[];
  sumPoints: number;
}
