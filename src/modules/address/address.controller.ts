import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos';

@ApiTags('address')
@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  async getAddresses(@Res() res) {
    const addresss = await this.addressService.findAll();
    return res.status(HttpStatus.OK).json(addresss);
  }

  @Get('/topaddr')
  async getAddressTop(@Res() res) {
    const addresss = await this.addressService.findTop('A');
    return res.status(HttpStatus.OK).json(addresss);
  }

  @Get('/toptxs')
  async getTransTop(@Res() res) {
    const addresss = await this.addressService.findTop('T');
    return res.status(HttpStatus.OK).json(addresss);
  }

  @Get('/find')
  public async findAddress(@Res() res, @Body() body) {
    const queryCondition = body;
    const addresss = await this.addressService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(addresss);
  }

  @Get('/:hash')
  async getAddress(@Res() res, @Param('hash') hash: string) {
    const address = await this.addressService.findById(hash);
    return res.status(HttpStatus.OK).json(address);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createAddress(
    @Res() res,
    @Body() createAddressDto: CreateAddressDto[],
  ) {
    const address = await this.addressService.create(createAddressDto);
    return res.status(HttpStatus.OK).json(address);
  }

  @Delete('/delete/:hash')
  async deleteAddress(@Param('hash') hash: string, @Res() res) {
    const addressDeleted = await this.addressService.delete(hash);
    return res.status(HttpStatus.OK).json(addressDeleted);
  }

  @Put('/update/:id')
  async updateAddress(
    @Param('id') addressId: string,
    @Res() res,
    @Body() updateAddressDto: CreateAddressDto[],
  ) {
    const addressUpdated = await this.addressService.update(
      addressId,
      updateAddressDto,
    );
    return res.status(HttpStatus.OK).json(addressUpdated);
  }
}
