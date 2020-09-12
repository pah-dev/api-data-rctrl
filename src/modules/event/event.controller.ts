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
import { CreateEventDto, UpdateEventDto } from './dtos';
import { EventService } from './event.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('event')
@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get()
  async getEvents(@Res() res) {
    const events = await this.eventService.findAll();
    return res.status(HttpStatus.OK).json({
      events,
    });
  }

  @Get('/:eventId')
  async getEvent(@Res() res, @Param('eventId') eventId: string) {
    const event = await this.eventService.findById(eventId);
    //if (!event) throw new NotFoundException('Event does not exists');
    return res.status(HttpStatus.OK).json(event);
  }

  @Get('/find')
  public async findTodo(@Res() res, @Body() body) {
    const queryCondition = body;
    const todos = await this.eventService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(todos);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createEvent(@Res() res, @Body() createEventDto: CreateEventDto) {
    const event = await this.eventService.create(createEventDto);
    return res.status(HttpStatus.OK).json({ event });
  }

  @Delete('/delete/:eventId')
  async deleteEvent(@Param('eventId') eventId: string, @Res() res) {
    const eventDeleted = await this.eventService.delete(eventId);
    return res.status(HttpStatus.OK).json({ eventDeleted });
  }

  @Put('/update/:eventId')
  async updateEvent(
    @Param('eventId') eventId: string,
    @Res() res,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    const eventUpdated = await this.eventService.update(
      eventId,
      updateEventDto,
    );
    return res.status(HttpStatus.OK).json({ eventUpdated });
  }
}