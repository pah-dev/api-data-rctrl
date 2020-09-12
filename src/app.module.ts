import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { OrgModule } from './modules/org/org.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import { PilotModule } from './modules/pilot/pilot.module';

@Module({
  imports: [DatabaseModule, OrgModule, PilotModule, CalendarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
