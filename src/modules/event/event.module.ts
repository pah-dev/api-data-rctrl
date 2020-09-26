import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from '../cat/cat.module';
import { CircuitModule } from '../circuit/circuit.module';
import { DriverModule } from '../driver/driver.module';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventSchema } from './schemas/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Events', schema: EventSchema }]),
    CatModule,
    DriverModule,
    CircuitModule,
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
