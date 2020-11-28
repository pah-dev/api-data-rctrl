import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';

export interface IChampData extends Document, BaseInterface {
  readonly idChamp: string;
  readonly idPlayer: string;
  idDriver: string;
  idTeam: string;
  readonly position: number;
  readonly totalPoints: number;
}
