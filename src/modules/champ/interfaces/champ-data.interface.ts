import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';
import { IDriver } from 'src/modules/driver/interfaces';

export interface IChampData extends Document, BaseInterface {
  readonly idPlayer: IDriver;
  readonly position: Number;
  readonly totalPoints: Number;
}
