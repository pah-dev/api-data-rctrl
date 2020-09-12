import { Document } from 'mongoose';
import { BaseInterface } from '../../../shared/base.interface';

export interface ICalendar extends Document, BaseInterface {
  readonly firstName: string;
  readonly lastName: string;
  readonly alias: string;
  readonly bloodType: string;
  readonly phone: string;
  readonly country: string;
  readonly email: string;
  // readonly team: Team[];
  readonly pilotNumber: number;
  readonly photoURL: string;
}
