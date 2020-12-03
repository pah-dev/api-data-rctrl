import { Injectable, Logger } from '@nestjs/common';
import { CreateCircuitDto, UpdateCircuitDto } from './dtos';
import { ICircuit } from './interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';

@Injectable()
export class CircuitService {
  constructor(
    @InjectModel('Circuits') private readonly circuitModel: Model<ICircuit>,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<ICircuit[]> {
    return await this.circuitModel.find().exec();
  }

  async findById(circuitId: string): Promise<ICircuit> {
    return await this.circuitModel.findById(circuitId);
  }

  async findOne(options: object): Promise<ICircuit> {
    return await this.circuitModel.findOne(options).exec();
  }

  async getIds(catId: string): Promise<ICircuit[]> {
    return await this.circuitModel
      .find({ strLeague: catId })
      .select('idCircuit')
      .exec();
  }

  async create(createCircuitDto: CreateCircuitDto[]): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    for (const circuit of createCircuitDto) {
      try {
        const newCircuit = new this.circuitModel(circuit);
        data.push(await newCircuit.save());
      } catch (ex) {
        err.push(
          this.eH.logger(ex, 'Circuit', 'Create', circuit, circuit.idCircuit),
        );
      }
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async update(
    circuitId: string,
    newCircuit: UpdateCircuitDto,
  ): Promise<ICircuit> {
    const circuit = await this.circuitModel.findById(circuitId).exec();

    if (!circuit._id) {
      Logger.log('Circuit not found');
    }

    return await this.circuitModel
      .findByIdAndUpdate(circuitId, newCircuit, { new: true })
      .exec();
  }

  async delete(circuitId: string): Promise<string> {
    try {
      await this.circuitModel.findByIdAndRemove(circuitId).exec();
      return 'The Circuit has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Circuit could not be deleted';
    }
  }
}
