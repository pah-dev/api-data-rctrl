import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { OrgModule } from './modules/org/org.module';
import { EventModule } from './modules/event/event.module';
import { DriverModule } from './modules/driver/driver.module';
import { TeamModule } from './modules/team/team.module';
import { ChampModule } from './modules/champ/champ.module';
import { CatModule } from './modules/cat/cat.module';

@Module({
  imports: [
    DatabaseModule,
    OrgModule,
    CatModule,
    DriverModule,
    EventModule,
    TeamModule,
    ChampModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
