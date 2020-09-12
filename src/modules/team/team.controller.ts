import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { ReadTeamDto, CreateTeamDto, UpdateTeamDto } from './dtos';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  // @Get()
  // getTeams(): Promise<ReadTeamDto[]> {
  //   return this.teamService.getTeams();
  // }

  // @Get('/:teamId')
  // getTeam(@Param('teamId', ParseIntPipe) teamId: number): Promise<ReadTeamDto> {
  //   return this.teamService.getTeam(teamId);
  // }

  // @Post('/create')
  // createTeam(@Body() team: CreateTeamDto): Promise<ReadTeamDto> {
  //   return this.teamService.createTeam(team);
  // }

  // @Delete('/delete/:teamId')
  // deleteTeam(@Param('teamId', ParseIntPipe) teamId: number): Promise<boolean> {
  //   return this.teamService.deleteTeam(teamId);
  // }

  // @Put('/update/:teamId')
  // updateTeam(
  //   @Param('teamId', ParseIntPipe) teamId: number,
  //   @Body() team: UpdateTeamDto,
  // ): Promise<ReadTeamDto> {
  //   return this.teamService.updateTeam(teamId, team);
  // }
}
