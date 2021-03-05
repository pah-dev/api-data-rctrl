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
import { CreateCareerDto, UpdateCareerDto } from './dtos';
import { CareerService } from './career.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('career')
@Controller('career')
export class CareerController {
  constructor(private careerService: CareerService) {}

  @Get()
  async getCareers(@Res() res) {
    const careers = await this.careerService.findAll();
    return res.status(HttpStatus.OK).json(careers);
  }

  @Get('/find')
  public async findCareer(@Res() res, @Body() body) {
    const queryCondition = body;
    const career = await this.careerService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(career);
  }

  @Get('/:careerId')
  async getCareer(@Res() res, @Param('careerId') careerId: string) {
    const career = await this.careerService.findById(careerId);
    return res.status(HttpStatus.OK).json(career);
  }

  @Get('/ids/:careerId/:year')
  async getIds(
    @Res() res,
    @Param('careerId') careerId: string,
    @Param('year') year: string,
  ) {
    const career = await this.careerService.getIds(careerId, year);
    return res.status(HttpStatus.OK).json(career);
  }

  @Get('/career/:careerId/:year')
  async getCareersCat(
    @Res() res,
    @Param('careerId') careerId: string,
    @Param('year') year: string,
  ) {
    const careers = await this.careerService.getCareersCat(careerId, year);
    return res.status(HttpStatus.OK).json(careers);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async multiCreateCareer(
    @Res() res,
    @Body() createCareerDto: CreateCareerDto[],
  ) {
    const career = await this.careerService.create(createCareerDto);
    return res.status(HttpStatus.OK).json(career);
  }

  @Delete('/delete/:careerId')
  async deleteCareer(@Param('careerId') careerId: string, @Res() res) {
    const careerDeleted = await this.careerService.delete(careerId);
    return res.status(HttpStatus.OK).json(careerDeleted);
  }

  @Put('/update/:careerId')
  async updateCareer(
    @Param('careerId') careerId: string,
    @Res() res,
    @Body() updateCareerDto: UpdateCareerDto,
  ) {
    const careerUpdated = await this.careerService.update(
      careerId,
      updateCareerDto,
    );
    return res.status(HttpStatus.OK).json(careerUpdated);
  }
}
