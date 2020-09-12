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
  ParseIntPipe,
} from '@nestjs/common';
import { CreatePilotDto, UpdatePilotDto } from './dtos';
import { PilotService } from './pilot.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('pilot')
@Controller('pilot')
export class PilotController {
  constructor(private pilotService: PilotService) {}

  @Get()
  async getPilots(@Res() res) {
    const pilots = await this.pilotService.findAll();
    return res.status(HttpStatus.OK).json({
      pilots,
    });
  }

  @Get('/:pilotId')
  async getPilot(@Res() res, @Param('pilotId', ParseIntPipe) pilotId: number) {
    const pilot = await this.pilotService.findById(pilotId);
    //if (!pilot) throw new NotFoundException('Pilot does not exists');
    return res.status(HttpStatus.OK).json(pilot);
  }

  @Get('/find')
  public async findTodo(@Res() res, @Body() body) {
    const queryCondition = body;
    const todos = await this.pilotService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(todos);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createPilot(@Res() res, @Body() createPilotDto: CreatePilotDto) {
    const pilot = await this.pilotService.create(createPilotDto);
    return res.status(HttpStatus.OK).json({ pilot });
  }

  @Delete('/delete/:pilotId')
  async deletePilot(
    @Param('pilotId', ParseIntPipe) pilotId: number,
    @Res() res,
  ) {
    const pilotDeleted = await this.pilotService.delete(pilotId);
    return res.status(HttpStatus.OK).json({ pilotDeleted });
  }

  @Put('/update/:pilotId')
  async updatePilot(
    @Param('pilotId', ParseIntPipe) pilotId: number,
    @Res() res,
    @Body() updatePilotDto: UpdatePilotDto,
  ) {
    const pilotUpdated = await this.pilotService.update(
      pilotId,
      updatePilotDto,
    );
    return res.status(HttpStatus.OK).json({ pilotUpdated });
  }
}
