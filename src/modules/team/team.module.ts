import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TeamController } from './team.controller';

@Module({
  imports: [],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
