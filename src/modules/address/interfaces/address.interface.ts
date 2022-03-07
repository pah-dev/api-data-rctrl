import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';

export interface IAddress extends Document, BaseInterface {
  hash: string;
  type: string;
  visits: number;
}
