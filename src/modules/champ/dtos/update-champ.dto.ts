import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateChampDataDto } from './create-champ-data.dto';

export class UpdateChampDto {
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
  readonly data: CreateChampDataDto[];

  @ApiPropertyOptional()
  readonly sumPoints: number;

  @ApiProperty()
  @IsString()
  readonly typeChamp: string;
}
