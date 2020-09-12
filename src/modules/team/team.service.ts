import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ReadTeamDto, CreateTeamDto, UpdateTeamDto } from './dtos';

@Injectable()
export class TeamService {
  //   constructor(
  //     @InjectRepository(TeamRepository)
  //     private readonly teamRepository: TeamRepository,
  //   ) {}
  //   async getTeam(id: number): Promise<ReadTeamDto> {
  //     if (!id) {
  //       throw new BadRequestException('id must be sent');
  //     }
  //     const team: Team = await this.teamRepository.findOne(id, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!team) {
  //       throw new NotFoundException();
  //     }
  //     return plainToClass(ReadTeamDto, team);
  //   }
  //   async getTeams(): Promise<ReadTeamDto[]> {
  //     const teams: Team[] = await this.teamRepository.find({
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     const map = teams.map(team => plainToClass(ReadTeamDto, team));
  //     return map;
  //   }
  //   async createTeam(team: Partial<CreateTeamDto>): Promise<ReadTeamDto> {
  //     const savedTeam: Team = await this.teamRepository.save(team);
  //     return plainToClass(ReadTeamDto, savedTeam);
  //   }
  //   async updateTeam(
  //     id: number,
  //     team: Partial<UpdateTeamDto>,
  //   ): Promise<ReadTeamDto> {
  //     const foundTeam: Team = await this.teamRepository.findOne(id, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!foundTeam) {
  //       throw new NotFoundException();
  //     }
  //     foundTeam.description = team.description;
  //     foundTeam.alias = team.alias;
  //     foundTeam.address = team.address;
  //     foundTeam.phone = team.phone;
  //     foundTeam.country = team.country;
  //     foundTeam.email = team.email;
  //     foundTeam.web = team.web;
  //     foundTeam.logoURL = team.logoURL;
  //     const updatedTeam: Team = await this.teamRepository.save(foundTeam);
  //     return plainToClass(ReadTeamDto, updatedTeam);
  //   }
  //   async deleteTeam(id: number): Promise<boolean> {
  //     const teamExists = await this.teamRepository.findOne(id, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!teamExists) {
  //       throw new NotFoundException();
  //     }
  //     await this.teamRepository.update(id, { status: statusCode.INACTIVE });
  //     return true;
  //   }
}
