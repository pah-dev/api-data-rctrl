import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChampController } from './champ.controller';
import { ChampService } from './champ.service';
import { ChampSchema } from './schemas/champ.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Champs', schema: ChampSchema }]),
  ],
  controllers: [ChampController],
  providers: [ChampService],
})
export class ChampModule {}
