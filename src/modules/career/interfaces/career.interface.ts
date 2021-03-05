import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';

export interface ICareer extends Document, BaseInterface {
  readonly idCareer: string;
  readonly idPlayer: string;
  readonly idOrg: string;
  readonly idCat: string;
  readonly idTeam: string;
  readonly numSeason: number;
}
