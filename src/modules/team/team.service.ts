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

  async getIds(catId: string, year: string): Promise<ITeam[]> {
    let condition = {};
    if (year == '0') {
      condition = { idCat: catId };
    } else {
      condition = { idCat: catId, numSeason: { $gte: parseInt(year) } };
    }
    return await this.teamModel
      .find(condition)
      .select('idTeam')
      .exec();
  }

  async getTeamsCat(catId: string, year: string): Promise<ITeam[]> {
    return await this.teamModel
      .find({ idCat: catId, numSeason: parseInt(year), strGender: 'T' })
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
      err.push(this.eH.logger(ex, 'Team', 'Create', createTeamDto));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
  }

  async update(teamId: string, updateTeamDto: UpdateTeamDto[]): Promise<any> {
    const ret = {};
    const data = [];
    const err = [];
    try {
      for (const newTeam of updateTeamDto) {
        let team = null;
        if (teamId == '0') {
          team = await this.teamModel
            .findOne({ idTeam: newTeam.idTeam })
            .exec();
        } else {
          team = await this.teamModel.findById(teamId).exec();
        }
        if (!team) {
          Logger.log('Team not found');
          data.push(await this.create([newTeam]));
        } else {
          const updDriver = new this.teamModel(newTeam);
          const teamObj = updDriver.toObject();
          delete teamObj._id;
          let cat = null;
          cat = await this.catService.findById(newTeam.idCat);
          if (!cat) {
            const oneCat = await this.catService.findOne({
              idLeague: newTeam.idCategory,
            });
            if (oneCat) {
              teamObj.idCat = oneCat._id;
              teamObj.idOrg = oneCat.idOrg;
            }
          } else {
            teamObj.idTeam = cat._id;
            teamObj.idOrg = cat.idOrg;
          }

          data.push(
            await this.teamModel
              .findByIdAndUpdate(team._id, teamObj, { new: true })
              .exec(),
          );
        }
      }
    } catch (ex) {
      err.push(this.eH.logger(ex, 'Team', 'Create', updateTeamDto));
    }
    ret['error'] = err;
    ret['data'] = data;
    return ret;
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
