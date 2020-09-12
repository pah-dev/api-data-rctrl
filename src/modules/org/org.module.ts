import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrgController } from './org.controller';
import { OrgService } from './org.service';
import { OrgSchema } from './schemas/org.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Org', schema: OrgSchema }])],
  controllers: [OrgController],
  providers: [OrgService],
})
export class OrgModule {}
