import { CreateCircuitDto, UpdateCircuitDto } from '../dtos';
import { ICircuit } from './circuit.interface';

export interface ICircuitService {
  findAll(): Promise<ICircuit[]>;
  findById(circuitId: string): Promise<ICircuit | null>;
  findOne(options: object): Promise<ICircuit | null>;
  create(circuit: CreateCircuitDto[]): Promise<ICircuit>;
  update(
    circuitId: string,
    newCircuit: UpdateCircuitDto,
  ): Promise<ICircuit | null>;
  delete(circuitId: string): Promise<string>;
}
