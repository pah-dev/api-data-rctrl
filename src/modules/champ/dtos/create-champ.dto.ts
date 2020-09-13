import { IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IOrg } from '../../org/interfaces';
import { IChampData } from '../interfaces/champ-data.interface';
import { ICat } from '../../cat/interfaces';

export class CreateChampDto {
  @ApiProperty()
  @IsString()
  readonly idOrg: IOrg;

  @ApiProperty()
  @IsString()
  readonly idCat: ICat;

  @ApiPropertyOptional()
  @IsString()
  readonly idEspn: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idTsdb: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idMss: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idMyL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idRCtrl: string;

  @ApiProperty()
  @IsString()
  readonly strSeason: String;

  @ApiProperty()
  @IsNumber()
  readonly numSeason: Number;

  @ApiProperty()
  readonly data: IChampData[];

  @ApiPropertyOptional()
  readonly sumPoints: Number;
}
