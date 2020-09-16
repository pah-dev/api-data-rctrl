import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamSchema } from './schemas/team.schema';
import { CatModule } from '../cat/cat.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teams', schema: TeamSchema }]),
    CatModule,
  ],
  providers: [TeamService],
  controllers: [TeamController],
  exports: [TeamService],
})
export class TeamModule {}
