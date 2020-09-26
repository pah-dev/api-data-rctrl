import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCircuitDto {
  @ApiProperty()
  @IsString()
  readonly idCircuit: string;

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
  readonly strCircuit: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCircuitShort: string;

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
  readonly strType: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLength: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strDirection: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCorners: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strRSS: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strStadium: string;

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
  @IsString()
  readonly intSoccerXMLTeamID: string;

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
  readonly strAddress: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCountry: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBadge: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strJersey: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLogo: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart1: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart3: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFanart4: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBanner: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLocked: string;

  @ApiPropertyOptional()
  @IsString()
  readonly isOnlyImg: boolean;
}
