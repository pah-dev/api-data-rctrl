import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from '../cat/cat.module';
import { EventController } from './event.controller';
import { EventService } from './event.service';
import { EventSchema } from './schemas/event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Events', schema: EventSchema }]),
    CatModule,
  ],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
