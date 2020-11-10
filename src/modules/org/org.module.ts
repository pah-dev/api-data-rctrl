import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorHandlerModule } from '../../shared/error-handler/error-handler.module';
import { SectionModule } from '../section/section.module';
import { OrgController } from './org.controller';
import { OrgService } from './org.service';
import { OrgSchema } from './schemas/org.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Orgs', schema: OrgSchema }]),
    SectionModule,
    ErrorHandlerModule,
  ],
  controllers: [OrgController],
  providers: [OrgService],
  exports: [OrgService],
})
export class OrgModule {}
