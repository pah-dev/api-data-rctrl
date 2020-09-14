import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ICat } from '../../cat/interfaces';

export class CreateOrgDto {
  @ApiProperty({ description: 'Organization ID' })
  @IsString()
  readonly idLeague: string;

  @ApiProperty({ description: 'Organization name' })
  @IsString()
  readonly strLeague: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeagueAlternate?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly alias?: string;

  @ApiProperty()
  readonly categories: ICat[];

  @ApiProperty()
  @IsString()
  readonly strSeccion: string;

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

  @ApiPropertyOptional()
  @IsString()
  readonly intFormedYear?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCurrentSeason?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCountry?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWebsite?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFacebook?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTwitter?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strYoutube?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strInstagram?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionEN?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionDE?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionFR?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionIT?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionCN?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionJP?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionRU?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionES?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionPT?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionSE?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionNL?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionHU?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionNO?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionPL?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionIL?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart1?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart2?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart3?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart4?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBanner?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBadge?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLogo?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strPoster?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTrophy?: string;

  @ApiPropertyOptional()
  @IsNumber()
  readonly rank: number;

  @ApiPropertyOptional()
  @IsBoolean()
  readonly isWorking: boolean;
}
