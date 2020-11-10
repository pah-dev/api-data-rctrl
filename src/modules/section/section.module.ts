import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorHandlerModule } from '../../shared/error-handler/error-handler.module';
import { SectionSchema } from './schemas/section.schema';
import { SectionController } from './section.controller';
import { SectionService } from './section.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sections', schema: SectionSchema }]),
    ErrorHandlerModule,
  ],
  controllers: [SectionController],
  providers: [SectionService],
  exports: [SectionService],
})
export class SectionModule {}
