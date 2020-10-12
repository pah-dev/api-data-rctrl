import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSectionDto, UpdateSectionDto } from '../section/dtos';
import { SectionService } from './section.service';

@ApiTags('section')
@Controller('section')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  async getSecs(@Res() res) {
    const secs = await this.sectionService.findAll();
    return res.status(HttpStatus.OK).json(secs);
  }

  @Get('/:sectionId')
  async getSec(@Res() res, @Param('sectionId') sectionId: string) {
    const sec = await this.sectionService.findById(sectionId);
    return res.status(HttpStatus.OK).json(sec);
  }

  @Get('/find')
  public async findOrg(@Res() res, @Body() body) {
    const queryCondition = body;
    const sec = await this.sectionService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(sec);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createSec(@Res() res, @Body() createSecDto: CreateSectionDto[]) {
    const sec = await this.sectionService.create(createSecDto);
    return res.status(HttpStatus.OK).json(sec);
  }

  @Delete('/delete/:sectionId')
  async deleteSec(@Param('sectionId') sectionId: string, @Res() res) {
    const secDeleted = await this.sectionService.delete(sectionId);
    return res.status(HttpStatus.OK).json({ secDeleted });
  }

  @Put('/update/:sectionId')
  async updateSec(
    @Param('sectionId') sectionId: string,
    @Res() res,
    @Body() updateSecDto: UpdateSectionDto,
  ) {
    const secUpdated = await this.sectionService.update(
      sectionId,
      updateSecDto,
    );
    return res.status(HttpStatus.OK).json({ secUpdated });
  }
}
