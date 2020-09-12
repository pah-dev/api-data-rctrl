import {
  IsString,
  MaxLength,
  IsUrl,
  IsEmail,
  IsBoolean,
} from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { ReadTeamDto } from '../../team/dtos/read-team.dto';

@Exclude()
export class ReadDriverDto {
  @Expose()
  readonly _id: number;

  @Expose()
  @IsString()
  @MaxLength(100, { message: 'This name is not valid' })
  readonly name: string;

  @Expose()
  @IsString()
  @MaxLength(100, { message: 'This lastname is not valid' })
  readonly lastname: string;

  @Expose()
  @IsString()
  @MaxLength(20, { message: 'This alias is not valid' })
  readonly alias: string;

  @Expose()
  @IsString()
  readonly address: string;

  @Expose()
  @IsString()
  readonly phone: string;

  @Expose()
  @IsString()
  readonly country: string;

  @Expose()
  @IsEmail({}, { message: 'Must be an email' })
  readonly email?: string;

  @Expose()
  @IsString()
  readonly bloodType: string;

  @Expose()
  @Type(type => ReadTeamDto)
  readonly team: ReadTeamDto;

  @Expose()
  @IsBoolean()
  readonly mainDriver: boolean;

  @Expose()
  @IsUrl({}, { message: 'Must be an URL' })
  readonly photoURL: string;
}
