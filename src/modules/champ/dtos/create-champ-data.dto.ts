import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateChampDataDto {
  @ApiProperty()
  @IsString()
  readonly idPlayer: string;

  @ApiProperty()
  @IsNumber()
  readonly position: number;

  @ApiProperty()
  @IsNumber()
  readonly totalPoints: number;
}
