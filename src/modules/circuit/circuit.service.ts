import { Injectable, Logger } from '@nestjs/common';
import { CreateCircuitDto, UpdateCircuitDto } from './dtos';
import { ICircuit } from './interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CircuitService {
  constructor(
    @InjectModel('Circuits') private readonly circuitModel: Model<ICircuit>,
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

  async create(createCircuitDto: CreateCircuitDto[]): Promise<any> {
    const ret = [];
    try {
      for (const circuit of createCircuitDto) {
        try {
          const newCircuit = new this.circuitModel(circuit);
          ret.push(await newCircuit.save());
        } catch (error) {
          Logger.error(
            'Error saving Circuit: ' + circuit.idCircuit + ' - ' + error,
          );
          ret.push(
            'Error saving Circuit: [' + circuit.idCircuit + '] ' + error,
          );
        }
      }
    } catch (error) {
      Logger.error(error);
    }
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
