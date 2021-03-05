import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { IOrg } from 'src/modules/org/interfaces';

export class UpdateTeamDto {
  @ApiProperty()
  @IsString()
  readonly idTeam: string;

  @ApiProperty()
  @IsString()
  readonly idLeague: string;

  @ApiProperty()
  @IsString()
  readonly idCategory: string;

  @ApiProperty()
  @IsString()
  readonly idCat: string;

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
  readonly idSoccerXML: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idAPIfootball: string;

  @ApiPropertyOptional()
  @IsString()
  readonly intLoved: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeam: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamShort: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strAlternate: string;

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
  readonly strLeague2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague2: IOrg;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeague3: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague3: IOrg;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeague4: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague4: IOrg;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeague5: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague5: IOrg;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeague6: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague6: IOrg;

  @ApiPropertyOptional()
  @IsString()
  readonly strLeague7: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague7: IOrg;

  @ApiPropertyOptional()
  @IsString()
  readonly strDivision: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strManager: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strStadium: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strKeywords: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strRSS: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strStadiumThumb: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strStadiumDescription: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strStadiumLocation: string;

  @ApiPropertyOptional()
  @IsString()
  readonly intStadiumCapacity: string;

  @ApiPropertyOptional()
  @IsNumber()
  readonly numSeason: number;

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
  readonly strYoutube: string;

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
  readonly strGender: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCountry: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamBadge: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamJersey: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamLogo: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamFanart1: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamFanart2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamFanart3: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamFanart4: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeamBanner: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLocked: string;

  @ApiPropertyOptional()
  @IsString()
  readonly isOnlyImg: boolean;
}
