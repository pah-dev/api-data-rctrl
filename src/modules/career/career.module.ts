import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorHandlerModule } from '../../shared/error-handler/error-handler.module';
import { CareerController } from './career.controller';
import { CareerService } from './career.service';
import { CareerSchema } from './schemas/career.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Careers', schema: CareerSchema }]),
    ErrorHandlerModule,
  ],
  controllers: [CareerController],
  providers: [CareerService],
  exports: [CareerService],
})
export class CareerModule {}
