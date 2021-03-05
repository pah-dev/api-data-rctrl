import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Res,
  Body,
  Param,
  HttpStatus,
} from '@nestjs/common';
import { CreateDriverDto, UpdateDriverDto } from './dtos';
import { DriverService } from './driver.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('driver')
@Controller('driver')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  async getDrivers(@Res() res) {
    const drivers = await this.driverService.findAll();
    return res.status(HttpStatus.OK).json(drivers);
  }

  @Get('/find')
  public async findDriver(@Res() res, @Body() body) {
    const queryCondition = body;
    const driver = await this.driverService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(driver);
  }

  @Get('/:driverId')
  async getDriver(@Res() res, @Param('driverId') driverId: string) {
    const driver = await this.driverService.findById(driverId);
    return res.status(HttpStatus.OK).json(driver);
  }

  @Get('/ids/:catId/:year')
  async getIds(
    @Res() res,
    @Param('catId') catId: string,
    @Param('year') year: string,
  ) {
    const driver = await this.driverService.getIds(catId, year);
    return res.status(HttpStatus.OK).json(driver);
  }

  @Get('/cat/:catId/:year')
  async getDriversCat(
    @Res() res,
    @Param('catId') catId: string,
    @Param('year') year: string,
  ) {
    const drivers = await this.driverService.getDriversCat(catId, year);
    return res.status(HttpStatus.OK).json(drivers);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async multiCreateDriver(
    @Res() res,
    @Body() createDriverDto: CreateDriverDto[],
  ) {
    const driver = await this.driverService.create(createDriverDto);
    return res.status(HttpStatus.OK).json(driver);
  }

  @Delete('/delete/:driverId')
  async deleteDriver(@Param('driverId') driverId: string, @Res() res) {
    const driverDeleted = await this.driverService.delete(driverId);
    return res.status(HttpStatus.OK).json(driverDeleted);
  }

  @Put('/update/:driverId')
  async updateDriver(
    @Param('driverId') driverId: string,
    @Res() res,
    @Body() updateDriverDto: UpdateDriverDto[],
  ) {
    const driverUpdated = await this.driverService.update(
      driverId,
      updateDriverDto,
    );
    return res.status(HttpStatus.OK).json(driverUpdated);
  }
}
