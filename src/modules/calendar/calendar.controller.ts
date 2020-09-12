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
import { CreateCalendarDto, UpdateCalendarDto } from './dtos';
import { CalendarService } from './calendar.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('calendar')
@Controller('calendar')
export class CalendarController {
  constructor(private calendarService: CalendarService) {}

  @Get()
  async getCalendars(@Res() res) {
    const calendars = await this.calendarService.findAll();
    return res.status(HttpStatus.OK).json({
      calendars,
    });
  }

  @Get('/:calendarId')
  async getCalendar(
    @Res() res,
    @Param('calendarId', ParseIntPipe) calendarId: number,
  ) {
    const calendar = await this.calendarService.findById(calendarId);
    //if (!calendar) throw new NotFoundException('Calendar does not exists');
    return res.status(HttpStatus.OK).json(calendar);
  }

  @Get('/find')
  public async findTodo(@Res() res, @Body() body) {
    const queryCondition = body;
    const todos = await this.calendarService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(todos);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createCalendar(
    @Res() res,
    @Body() createCalendarDto: CreateCalendarDto,
  ) {
    const calendar = await this.calendarService.create(createCalendarDto);
    return res.status(HttpStatus.OK).json({ calendar });
  }

  @Delete('/delete/:calendarId')
  async deleteCalendar(
    @Param('calendarId', ParseIntPipe) calendarId: number,
    @Res() res,
  ) {
    const calendarDeleted = await this.calendarService.delete(calendarId);
    return res.status(HttpStatus.OK).json({ calendarDeleted });
  }

  @Put('/update/:calendarId')
  async updateCalendar(
    @Param('calendarId', ParseIntPipe) calendarId: number,
    @Res() res,
    @Body() updateCalendarDto: UpdateCalendarDto,
  ) {
    const calendarUpdated = await this.calendarService.update(
      calendarId,
      updateCalendarDto,
    );
    return res.status(HttpStatus.OK).json({ calendarUpdated });
  }
}
