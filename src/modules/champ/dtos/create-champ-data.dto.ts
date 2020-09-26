import { IsNumber, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateChampDataDto {
  @ApiProperty()
  @IsString()
  readonly idChamp: string;

  @ApiProperty()
  @IsString()
  readonly idPlayer: string;

  @ApiProperty()
  @IsNumber()
  readonly position: number;

  @ApiProperty()
  @IsNumber()
  readonly totalPoints: number;

  @ApiPropertyOptional()
  @IsNumber()
  readonly difference: number;

  @ApiPropertyOptional()
  @IsNumber()
  readonly cups: number;
}
