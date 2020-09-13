import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IOrg } from '../../org/interfaces';

export class CreateCatDto {
  @ApiProperty()
  @IsString()
  readonly idCategory: string;

  @ApiProperty()
  @IsString()
  readonly idOrg: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCat: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatShort: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strAlternate: string;

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
  readonly intFormedYear: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSport: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeague: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDivision: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strManager: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWebsite: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFacebook: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTwitter: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strInstagram: string;

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
  readonly strDescriptionCN: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionIT: string;

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
  readonly strDescriptionIL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDescriptionPL: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCountry: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatBadge: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatJersey: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatLogo: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatFanart1: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatFanart2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatFanart3: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatFanart4: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCatBanner: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strYoutube: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLocked: string;

  @ApiPropertyOptional()
  @IsString()
  readonly infoInCat: boolean;

  @ApiPropertyOptional()
  @IsString()
  readonly isOnlyImg: boolean;
}
