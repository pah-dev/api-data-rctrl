import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAddressDto {
  @ApiProperty()
  @IsString()
  readonly hash: string;

  @ApiPropertyOptional()
  @IsString()
  readonly type: string;

  @ApiPropertyOptional()
  @IsNumber()
  visits: number;
}
