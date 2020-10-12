import { Document } from 'mongoose';
import { IOrg } from 'src/modules/org/interfaces';
import { BaseInterface } from '../../../shared/base.interface';

export interface ISection extends Document, BaseInterface {
  readonly idSec: string;
  readonly strSec: string;
  readonly strSecShort: string;
  readonly strSecAlternate: string;
  orgs: IOrg[];
  readonly strDescription: string;
  readonly strDescriptionEN: string;
  readonly strDescriptionDE: string;
  readonly strDescriptionFR: string;
  readonly strDescriptionIT: string;
  readonly strDescriptionCN: string;
  readonly strDescriptionJP: string;
  readonly strDescriptionRU: string;
  readonly strDescriptionES: string;
  readonly strDescriptionPT: string;
  readonly strDescriptionSE: string;
  readonly strDescriptionNL: string;
  readonly strDescriptionHU: string;
  readonly strDescriptionNO: string;
  readonly strDescriptionPL: string;
  readonly strDescriptionIL: string;
  readonly strCountry: string;
  readonly strThumb: string;
  readonly strBanner: string;
  readonly strBadge: string;
  readonly strLogo: string;
  readonly rank: number;
  readonly isWorking: boolean;
}
