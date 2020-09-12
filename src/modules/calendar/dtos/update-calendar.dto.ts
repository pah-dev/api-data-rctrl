import {
  IsString,
  MaxLength,
  IsNumber,
  IsUrl,
  IsEmail,
  IsBoolean,
} from 'class-validator';

export class UpdateCalendarDto {
  @IsString()
  @MaxLength(20, { message: 'This alias is not valid' })
  readonly alias: string;

  @IsString()
  readonly address?: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly country?: string;

  @IsEmail({}, { message: 'Must be an email' })
  readonly email?: string;

  @IsString()
  readonly bloodType: string;

  @IsNumber()
  readonly team?: number;

  @IsBoolean()
  readonly mainCalendar: boolean;

  @IsUrl({}, { message: 'Must be an URL' })
  readonly photoURL?: string;
}
