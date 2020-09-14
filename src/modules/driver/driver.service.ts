import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IDriver, IDriverService } from './interfaces';
import { CreateDriverDto, UpdateDriverDto } from './dtos';
import { CatService } from '../cat/cat.service';

@Injectable()
export class DriverService implements IDriverService {
  constructor(
    @InjectModel('Drivers') private readonly driverModel: Model<IDriver>,
    private catService: CatService,
  ) {}

  async findAll(): Promise<IDriver[]> {
    return await this.driverModel
      .find()
      .populate('idLeague')
      .exec();
  }

  async findById(driverId: string): Promise<IDriver> {
    return await this.driverModel.findById(driverId);
  }

  async findOne(options: object): Promise<IDriver> {
    return await this.driverModel.findOne(options).exec();
  }

  async create(createDriverDto: CreateDriverDto): Promise<IDriver> {
    const newDriver = new this.driverModel(createDriverDto);
    const cat = await this.catService.findOne({
      idCategory: createDriverDto.idCategory,
    });
    newDriver.idCat = cat._id;
    newDriver.idOrg = cat.idOrg;
    return await newDriver.save();
  }

  async mulitCreate(createDriverDto: CreateDriverDto[]): Promise<any> {
    const ret = [];
    try {
      Logger.log(createDriverDto.length);
      const cat = await this.catService.findOne({
        idCategory: createDriverDto[0].idCategory,
      });
      for (const driver of createDriverDto) {
        const newDriver = new this.driverModel(driver);
        newDriver.idCat = cat._id;
        newDriver.idOrg = cat.idOrg;
        ret.push(await newDriver.save());
      }
    } catch (error) {
      Logger.error(error);
    }
    return ret;
  }

  async update(driverId: string, newDriver: UpdateDriverDto): Promise<IDriver> {
    const driver = await this.driverModel.findById(driverId).exec();

    if (!driver._id) {
      Logger.log('Driver not found');
    }

    return await this.driverModel
      .findByIdAndUpdate(driverId, newDriver, { new: true })
      .exec();
  }

  async delete(driverId: string): Promise<string> {
    try {
      await this.driverModel.findByIdAndRemove(driverId).exec();
      return 'The Driver has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Driver could not be deleted';
    }
  }
}
