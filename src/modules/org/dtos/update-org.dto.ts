import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateOrgDto {
  @ApiProperty({ name: 'Org name' })
  @IsString()
  readonly strLeague: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeagueAlternate?: string;

  @ApiPropertyOptional()
  @IsString()
  readonly alias?: string;

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
}
