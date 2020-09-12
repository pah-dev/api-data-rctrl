import { IsString, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IOrg } from '../../org/interfaces';
import { IChampData } from '../interfaces/champ-data.interface';

export class CreateChampDto {
  @ApiProperty()
  @IsString()
  readonly idLeague: IOrg;

  // @ApiProperty()
  // @IsString()
  // readonly idCategory: ICat;

  @ApiProperty()
  @IsString()
  readonly strSeason: String;

  @ApiProperty()
  readonly data: IChampData[];

  @ApiPropertyOptional()
  readonly sumPoints: Number;
}
