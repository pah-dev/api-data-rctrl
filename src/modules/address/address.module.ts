import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AddressSchema } from './schemas/address.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorHandlerModule } from '../../shared/error-handler/error-handler.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Address', schema: AddressSchema }]),
    ErrorHandlerModule,
  ],
  providers: [AddressService],
  controllers: [AddressController],
  exports: [AddressService],
})
export class AddressModule {}
