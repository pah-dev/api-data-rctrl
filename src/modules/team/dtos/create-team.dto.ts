import { IsString, MaxLength, IsUrl, IsEmail } from 'class-validator';

export class CreateTeamDto {
  @IsString()
  @MaxLength(50, { message: 'This name is not valid' })
  readonly name: string;

  @IsString()
  @MaxLength(150, { message: 'This description is not valid' })
  readonly description: string;

  @IsString()
  @MaxLength(20, { message: 'This alias is not valid' })
  readonly alias: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly phone: string;

  @IsString()
  readonly country: string;

  @IsEmail({}, { message: 'Must be an email' })
  readonly email?: string;

  @IsUrl({}, { message: 'Must be an URL' })
  readonly web?: string;

  @IsUrl({}, { message: 'Must be an URL' })
  readonly logoURL: string;
}
