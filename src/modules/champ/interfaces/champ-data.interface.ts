import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';
import { IDriver } from '../../driver/interfaces';

export interface IChampData extends Document, BaseInterface {
  readonly idDriver: IDriver;
  readonly position: number;
  readonly totalPoints: number;
}
