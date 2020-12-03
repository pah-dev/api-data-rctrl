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
import { CreateTeamDto, UpdateTeamDto } from './dtos';
import { TeamService } from './team.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('team')
@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  async getTeams(@Res() res) {
    const teams = await this.teamService.findAll();
    return res.status(HttpStatus.OK).json(teams);
  }

  @Get('/find')
  public async findTeam(@Res() res, @Body() body) {
    const queryCondition = body;
    const teams = await this.teamService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(teams);
  }

  @Get('/:teamId')
  async getTeam(@Res() res, @Param('teamId') teamId: string) {
    const team = await this.teamService.findById(teamId);
    return res.status(HttpStatus.OK).json(team);
  }

  @Get('/ids/:catId/:year')
  async getIds(
    @Res() res,
    @Param('catId') catId: string,
    @Param('year') year: string,
  ) {
    const teams = await this.teamService.getIds(catId, year);
    return res.status(HttpStatus.OK).json(teams);
  }

  @Get('/cat/:catId/:year')
  async getTeamsCat(
    @Res() res,
    @Param('catId') catId: string,
    @Param('year') year: string,
  ) {
    const teams = await this.teamService.getTeamsCat(catId, year);
    return res.status(HttpStatus.OK).json(teams);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createTeam(@Res() res, @Body() createTeamDto: CreateTeamDto[]) {
    const team = await this.teamService.create(createTeamDto);
    return res.status(HttpStatus.OK).json(team);
  }

  @Delete('/delete/:teamId')
  async deleteTeam(@Param('teamId') teamId: string, @Res() res) {
    const teamDeleted = await this.teamService.delete(teamId);
    return res.status(HttpStatus.OK).json(teamDeleted);
  }

  @Put('/update/:teamId')
  async updateTeam(
    @Param('teamId') teamId: string,
    @Res() res,
    @Body() updateTeamDto: UpdateTeamDto,
  ) {
    const teamUpdated = await this.teamService.update(teamId, updateTeamDto);
    return res.status(HttpStatus.OK).json(teamUpdated);
  }
}
