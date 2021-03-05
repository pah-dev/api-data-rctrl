import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorHandlerModule } from '../../shared/error-handler/error-handler.module';
import { CareerModule } from '../career/career.module';
import { CatModule } from '../cat/cat.module';
import { TeamModule } from '../team/team.module';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';
import { DriverSchema } from './schemas/driver.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Drivers', schema: DriverSchema }]),
    CatModule,
    TeamModule,
    CareerModule,
    ErrorHandlerModule,
  ],
  controllers: [DriverController],
  providers: [DriverService],
  exports: [DriverService],
})
export class DriverModule {}
