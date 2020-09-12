import {
  IsString,
  MaxLength,
  IsNumber,
  IsUrl,
  IsEmail,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePilotDto {
  @ApiProperty()
  @IsString()
  @MaxLength(100, { message: 'This name is not valid' })
  readonly name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(100, { message: 'This lastname is not valid' })
  readonly lastname: string;

  @ApiProperty()
  @IsString()
  @MaxLength(20, { message: 'This alias is not valid' })
  readonly alias?: string;

  @ApiProperty()
  @IsString()
  readonly address?: string;

  @ApiProperty()
  @IsString()
  readonly phone: string;

  @ApiProperty()
  @IsString()
  readonly country?: string;

  @ApiProperty()
  @IsEmail({}, { message: 'Must be an email' })
  readonly email?: string;

  @ApiProperty()
  @IsString()
  readonly bloodType: string;

  @ApiProperty()
  @IsNumber()
  readonly team?: number;

  @ApiProperty()
  @IsBoolean()
  readonly mainPilot: boolean;

  @ApiProperty()
  @IsUrl({}, { message: 'Must be an URL' })
  readonly photoURL?: string;
}
