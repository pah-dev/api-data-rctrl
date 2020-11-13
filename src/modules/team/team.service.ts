import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITeam, ITeamService } from './interfaces';
import { CreateTeamDto, UpdateTeamDto } from './dtos';
import { CatService } from '../cat/cat.service';
import { ErrorHandlerService } from '../../shared/error-handler/error-handler.service';

@Injectable()
export class TeamService implements ITeamService {
  constructor(
    @InjectModel('Teams') private readonly teamModel: Model<ITeam>,
    private catService: CatService,
    private eH: ErrorHandlerService,
  ) {}

  async findAll(): Promise<ITeam[]> {
    return await this.teamModel.find().exec();
  }

  async findById(teamId: string): Promise<ITeam> {
    return await this.teamModel.findById(teamId);
  }

  async findOne(options: object): Promise<ITeam> {
    return await this.teamModel.findOne(options).exec();
  }

  async getTeamsCat(catId: string, year: string): Promise<ITeam[]> {
    return await this.teamModel
      .find({ idCat: catId, numSeason: parseInt(year) })
      .populate('idCat')
      .exec();
  }

  async create(createTeamDto: CreateTeamDto[]): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      const cat = await this.catService.findOne({
        idLeague: createTeamDto[0].idCategory,
      });
      for (const team of createTeamDto) {
        try {
          const newTeam = new this.teamModel(team);
          newTeam.idCat = cat._id;
          newTeam.idOrg = cat.idOrg;
          data.push(await newTeam.save());
        } catch (ex) {
          err.push(this.eH.logger(ex, 'Team', 'Create', team, team.idTeam));
        }
      }
    } catch (ex) {
      err.push(this.eH.logger(ex, 'Team', 'Create'));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async update(teamId: string, newTeam: UpdateTeamDto): Promise<ITeam> {
    const team = await this.teamModel.findById(teamId).exec();

    if (!team._id) {
      Logger.log('Team not found');
    }

    return await this.teamModel
      .findByIdAndUpdate(teamId, newTeam, { new: true })
      .exec();
  }

  async delete(teamId: string): Promise<string> {
    try {
      await this.teamModel.findByIdAndRemove(teamId).exec();
      return 'The Team has been deleted';
    } catch (err) {
      Logger.log(err);
      return 'The Team could not be deleted';
    }
  }
}
