import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatModule } from '../cat/cat.module';
import { DriverModule } from '../driver/driver.module';
import { ChampController } from './champ.controller';
import { ChampService } from './champ.service';
import { ChampSchema } from './schemas/champ.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Champs', schema: ChampSchema }]),
    CatModule,
    DriverModule,
  ],
  controllers: [ChampController],
  providers: [ChampService],
})
export class ChampModule {}
