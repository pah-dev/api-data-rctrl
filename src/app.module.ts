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
import { ResponseApiService } from './shared/response-api.service';
import { CircuitModule } from './modules/circuit/circuit.module';
import { SectionModule } from './modules/section/section.module';

@Module({
  imports: [
    DatabaseModule,
    OrgModule,
    CatModule,
    DriverModule,
    TeamModule,
    CircuitModule,
    EventModule,
    ChampModule,
    SectionModule,
  ],
  controllers: [AppController],
  providers: [AppService, ResponseApiService],
})
export class AppModule {}
