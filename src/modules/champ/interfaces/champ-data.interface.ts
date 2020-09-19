import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';

export interface IChampData extends Document, BaseInterface {
  readonly idPlayer: string;
  idDriver: string;
  readonly position: number;
  readonly totalPoints: number;
}
