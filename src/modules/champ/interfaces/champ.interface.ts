import { Document } from 'mongoose';
import { IOrg } from '../../org/interfaces';
import { BaseInterface } from '../../../shared/base.interface';
import { IChampData } from './champ-data.interface';
import { ICat } from '../../cat/interfaces';

export interface IChamp extends Document, BaseInterface {
  readonly idOrg: IOrg;
  readonly idCat: ICat;
  readonly idEspn: String;
  readonly idTsdb: String;
  readonly idMss: String;
  readonly idMyL: String;
  readonly idRCtrl: String;
  readonly strSeason: String;
  readonly numSeason: Number;
  readonly data: IChampData[];
  readonly sumPoints: Number;
}
