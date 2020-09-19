import { IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IOrg } from '../../org/interfaces';
import { IChampData } from '../interfaces/champ-data.interface';
import { ICat } from '../../cat/interfaces';
import { CreateChampDataDto } from './create-champ-data.dto';

export class CreateChampDto {
  @ApiProperty()
  @IsString()
  readonly idCategory: string;

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
  readonly strSeason: string;

  @ApiProperty()
  @IsNumber()
  readonly numSeason: number;

  @ApiProperty()
  readonly data: CreateChampDataDto[];

  @ApiPropertyOptional()
  readonly sumPoints: number;

  @ApiProperty()
  @IsString()
  readonly typeChamp: string;
}
