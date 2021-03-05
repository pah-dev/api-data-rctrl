import { CreateTeamDto, UpdateTeamDto } from '../dtos';
import { ITeam } from './team.interface';

export interface ITeamService {
  findAll(): Promise<ITeam[]>;
  findById(teamId: string): Promise<ITeam | null>;
  findOne(options: object): Promise<ITeam | null>;
  create(team: CreateTeamDto[]): Promise<ITeam>;
  update(teamId: string, newTeam: UpdateTeamDto[]): Promise<ITeam | null>;
  delete(teamId: string): Promise<string>;
}
