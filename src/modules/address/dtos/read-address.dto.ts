import { IsString, MaxLength, IsNumber } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ReadAddressDto {
  @Expose()
  readonly id: number;

  @Expose()
  @IsString()
  @MaxLength(250)
  readonly hash: string;

  @Expose()
  @IsString()
  @MaxLength(20)
  readonly type: string;

  @Expose()
  @IsNumber()
  visits: number;
}
