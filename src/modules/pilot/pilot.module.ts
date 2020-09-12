import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PilotController } from './pilot.controller';
import { PilotService } from './pilot.service';
import { PilotSchema } from './schemas/pilot.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pilot', schema: PilotSchema }]),
  ],
  controllers: [PilotController],
  providers: [PilotService],
})
export class PilotModule {}
