import { IsString, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IOrg } from '../../org/interfaces';
import { ITeam } from 'src/modules/team/interfaces';

export class CreateDriverDto {
  @ApiProperty()
  @IsString()
  readonly idPlayer: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idLeague: IOrg;

  // readonly idCategory: ICat;

  @ApiPropertyOptional()
  @IsString()
  readonly idTeam: ITeam;

  @ApiPropertyOptional()
  @IsString()
  readonly idTeam2: ITeam;

  @ApiPropertyOptional()
  @IsString()
  readonly idTeamNational: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idSoccerXML: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idAPIfootball: string;

  @ApiPropertyOptional()
  @IsString()
  readonly idPlayerManager: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strNationality: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strPlayer: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeam: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strTeam2: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSport: string;

  @ApiPropertyOptional()
  @IsString()
  readonly intSoccerXMLTeamID: string;

  @ApiPropertyOptional()
  @IsString()
  readonly dateBorn: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strNumber: string;

  @ApiPropertyOptional()
  @IsString()
  readonly dateSigned: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strSigning: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWage: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strOutfitter: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strKit: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strAgent: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBirthLocation: string;

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
  readonly strSide: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strPosition: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCollege: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strFacebook: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWebsite: string;

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
  readonly strHeight: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strWeight: string;

  @ApiPropertyOptional()
  @IsString()
  readonly intLoved: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strThumb: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strCutout: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strRender: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strBanner: string;

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
  readonly strCreativeCommons: string;

  @ApiPropertyOptional()
  @IsString()
  readonly strLocked: string;

  @ApiPropertyOptional()
  @IsBoolean()
  readonly isOnlyImg: boolean;
}
