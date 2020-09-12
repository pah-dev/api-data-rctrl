import { IsString, MaxLength, IsNumber, IsUrl, IsEmail } from 'class-validator';
import { Exclude, Expose, Type } from 'class-transformer';
import { ReadTeamDto } from '../../team/dtos';

@Exclude()
export class ReadTrackDto {
  @Expose()
  readonly id: number;

  @Expose()
  @IsString()
  @MaxLength(100, { message: 'This name is not valid' })
  readonly name: string;

  @Expose()
  @IsString()
  @MaxLength(150, { message: 'This description is not valid' })
  readonly description: string;

  @Expose()
  @IsString()
  @MaxLength(20, { message: 'This alias is not valid' })
  readonly alias: string;

  @Expose()
  @IsString()
  readonly address: string;

  @Expose()
  @IsString()
  readonly mapsAddress: string;

  @Expose()
  @IsString()
  readonly phone: string;

  @Expose()
  @IsString()
  readonly country: string;

  @Expose()
  @IsEmail({}, { message: 'Must be an email' })
  readonly email: string;

  @Expose()
  @IsNumber()
  readonly size: number;

  @Expose()
  @Type(type => ReadTeamDto)
  readonly team: ReadTeamDto[];

  @Expose()
  @IsUrl({}, { message: 'Must be an URL' })
  readonly webL: string;

  @Expose()
  @IsUrl({}, { message: 'Must be an URL' })
  readonly logoURL: string;

  @Expose()
  @IsUrl({}, { message: 'Must be an URL' })
  readonly photoURL: string;
}
