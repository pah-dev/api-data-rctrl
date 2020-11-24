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
import { CreateChampDto, UpdateChampDto } from './dtos';
import { ChampService } from './champ.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('champ')
@Controller('champ')
export class ChampController {
  constructor(private champService: ChampService) {}

  @Get()
  async getChamps(@Res() res) {
    const champs = await this.champService.findAll();
    return res.status(HttpStatus.OK).json({
      champs,
    });
  }

  @Get('/:champId')
  async getChamp(@Res() res, @Param('champId') champId: string) {
    const champ = await this.champService.findById(champId);
    return res.status(HttpStatus.OK).json(champ);
  }

  @Get('/cat/:catId/:year/:type')
  async getEventsCat(
    @Res() res,
    @Param('catId') catId: string,
    @Param('year') year: string,
    @Param('type') type: string,
  ) {
    const champ = await this.champService.getChampCat(catId, year, type);
    return res.status(HttpStatus.OK).json(champ);
  }

  @Get('/find')
  public async findChamp(@Res() res, @Body() body) {
    const queryCondition = body;
    const champ = await this.champService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(champ);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createChamp(@Res() res, @Body() createChampDto: CreateChampDto[]) {
    const champ = await this.champService.create(createChampDto);
    return res.status(HttpStatus.OK).json(champ);
  }

  @Delete('/delete/:champId')
  async deleteChamp(@Param('champId') champId: string, @Res() res) {
    const champDeleted = await this.champService.delete(champId);
    return res.status(HttpStatus.OK).json(champDeleted);
  }

  @Put('/update/:champId')
  async updateChamp(
    @Param('champId') champId: string,
    @Res() res,
    @Body() updateChampDto: UpdateChampDto,
  ) {
    const champUpdated = await this.champService.update(
      champId,
      updateChampDto,
    );
    return res.status(HttpStatus.OK).json(champUpdated);
  }
}
