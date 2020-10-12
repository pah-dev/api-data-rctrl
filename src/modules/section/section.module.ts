import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionSchema } from './schemas/section.schema';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sections', schema: SectionSchema }]),
  ],
  controllers: [SectionController],
  providers: [SectionService],
  exports: [SectionService],
})
export class SectionModule {}
