import { IsString, MaxLength, IsNumber, IsUrl } from 'class-validator';

export class UpdateTrackDto {
  @IsString()
  @MaxLength(150, { message: 'This description is not valid' })
  readonly description: string;

  @IsString()
  @MaxLength(20, { message: 'This alias is not valid' })
  readonly alias?: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly mapsAddress?: string;

  @IsString()
  readonly phone?: string;

  @IsString()
  readonly country?: string;

  @IsNumber()
  readonly size: number;

  @IsNumber()
  readonly team: number;

  @IsUrl({}, { message: 'Must be an URL' })
  readonly web?: string;

  @IsUrl({}, { message: 'Must be an URL' })
  readonly logoURL?: string;

  @IsUrl({}, { message: 'Must be an URL' })
  readonly photoURL?: string;
}
