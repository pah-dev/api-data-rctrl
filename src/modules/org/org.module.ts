import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrgController } from './org.controller';
import { OrgService } from './org.service';
import { OrgSchema } from './schemas/org.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Orgs', schema: OrgSchema }])],
  controllers: [OrgController],
  providers: [OrgService],
  exports: [OrgService],
})
export class OrgModule {}
