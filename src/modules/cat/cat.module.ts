import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './schemas/cat.schema';
import { OrgModule } from '../org/org.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cats', schema: CatSchema }]),
    OrgModule,
  ],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
