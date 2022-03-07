import { Injectable, Logger } from '@nestjs/common';
import { CreateAddressDto } from './dtos';
import { IAddress } from './interfaces';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('Address') private readonly addressModel: Model<IAddress>,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<IAddress[]> {
    return await this.addressModel.find().exec();
  }

  async findById(addressId: string): Promise<IAddress> {
    return await this.addressModel.findById(addressId);
  }

  async findOne(options: object): Promise<IAddress> {
    return await this.addressModel.findOne(options).exec();
  }

  async findTop(key: string): Promise<IAddress[]> {
    return await this.addressModel
      .find({ type: key })
      .sort({ visits: -1 })
      .limit(5)
      .exec();
  }

  async create(createAddressDto: CreateAddressDto[]): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    for (const address of createAddressDto) {
      try {
        const newAddress = new this.addressModel(address);
        let oldAddress = null;
        oldAddress = await this.addressModel
          .findOne({ hash: newAddress.hash })
          .exec();
        if (oldAddress != null) {
        }
        data.push(await newAddress.save());
      } catch (ex) {
        err.push(this.eH.logger(ex, 'Address', 'Create', address));
      }
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async update(
    addressId: string,
    updateAddressDto: CreateAddressDto[],
  ): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      for (const newAddress of updateAddressDto) {
        let address = null;
        if (addressId == '0') {
          address = await this.addressModel
            .findOne({ hash: newAddress.hash })
            .exec();
        } else {
          address = await this.addressModel.findById(addressId).exec();
        }
        if (!address) {
          Logger.log('Address not found');
          data.push(await this.create([newAddress]));
        } else {
          const updAddress = new this.addressModel(newAddress);
          const addressObj = updAddress.toObject();
          addressObj.visits = address.visits + 1;
          delete addressObj._id;
          data.push(
            await this.addressModel
              .findByIdAndUpdate(address._id, addressObj, { new: true })
              .exec(),
          );
        }
      }
    } catch (ex) {
      err.push(this.eH.logger(ex, 'Address', 'Update', CreateAddressDto));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async delete(addressId: string): Promise<string> {
    try {
      await this.addressModel.findByIdAndRemove(addressId).exec();
      return 'The Address has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Address could not be deleted';
    }
  }
}
