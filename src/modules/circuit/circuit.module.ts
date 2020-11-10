import { Module } from '@nestjs/common';
import { CircuitService } from './circuit.service';
import { CircuitController } from './circuit.controller';
import { CircuitSchema } from './schemas/circuit.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ErrorHandlerModule } from '../../shared/error-handler/error-handler.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Circuits', schema: CircuitSchema }]),
    ErrorHandlerModule,
  ],
  providers: [CircuitService],
  controllers: [CircuitController],
  exports: [CircuitService],
})
export class CircuitModule {}
