import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { IOrg } from '../../org/interfaces';

export class CreateSectionDto {
  @ApiProperty({ description: 'Section ID' })
  @IsString()
  readonly idSec: string;

  @ApiProperty({ description: 'Section name' })
  @IsString()
  readonly strSec: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSecShort: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSecAlternate: string;

  @ApiPropertyOptional()
  @IsString()
  readonly orgs: IOrg[];

  @ApiPropertyOptional()
  @IsString()
  readonly strDescription: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionEN: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionDE: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionFR: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionIT: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionCN: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionJP: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionRU: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionES: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionPT: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionSE: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionNL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionHU: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionNO: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionPL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionIL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCountry: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strThumb: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBanner: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBadge: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLogo: string;

  @ApiPropertyOptional()
  @IsNumber()
  readonly rank: number;

  @ApiPropertyOptional()
  @IsBoolean()
  readonly isWorking: boolean;
}
