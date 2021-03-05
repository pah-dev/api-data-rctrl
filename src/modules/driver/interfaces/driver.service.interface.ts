import { CreateDriverDto, UpdateDriverDto } from '../dtos';
import { IDriver } from './driver.interface';

export interface IDriverService {
  findAll(): Promise<IDriver[]>;
  findById(driverId: string): Promise<IDriver | null>;
  findOne(options: object): Promise<IDriver | null>;
  create(driver: CreateDriverDto[]): Promise<IDriver>;
  update(
    driverId: string,
    newDriver: UpdateDriverDto[],
  ): Promise<IDriver | null>;
  delete(driverId: string): Promise<string>;
}
