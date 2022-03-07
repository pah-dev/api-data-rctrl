import { CreateAddressDto } from '../dtos';
import { IAddress } from './address.interface';

export interface IAddressService {
  findAll(): Promise<IAddress[]>;
  findById(AddressId: string): Promise<IAddress | null>;
  findOne(options: object): Promise<IAddress | null>;
  create(Address: CreateAddressDto[]): Promise<IAddress>;
  update(
    AddressId: string,
    newAddress: CreateAddressDto,
  ): Promise<IAddress | null>;
  delete(AddressId: string): Promise<string>;
}
