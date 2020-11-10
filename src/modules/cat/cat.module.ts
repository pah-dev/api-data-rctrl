import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';
import { OrgModule } from '../org/org.module';
import { ErrorHandlerModule } from '../../shared/error-handler/error-handler.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cats', schema: CatSchema }]),
    OrgModule,
    ErrorHandlerModule,
  ],
  providers: [CatService],
  controllers: [CatController],
  exports: [CatService],
})
export class CatModule {}
