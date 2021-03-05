import { IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCareerDto {
  @ApiProperty()
  @IsString()
  idCareer: string;

  @ApiProperty()
  @IsString()
  idPlayer: string;

  @ApiPropertyOptional()
  @IsString()
  idOrg: string;

  @ApiProperty()
  @IsString()
  idCat: string;

  @ApiPropertyOptional()
  @IsString()
  idTeam: string;

  @ApiPropertyOptional()
  @IsNumber()
  numSeason: number;
}
