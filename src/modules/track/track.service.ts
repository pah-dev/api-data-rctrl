import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ReadTrackDto, CreateTrackDto, UpdateTrackDto } from './dtos';
import { plainToClass } from 'class-transformer';

@Injectable()
export class TrackService {
  //   constructor(
  //     @InjectRepository(TrackRepository)
  //     private readonly trackRepository: TrackRepository,
  //     private readonly teamRepository: TeamRepository,
  //   ) {}
  //   async getTrack(id: number): Promise<ReadTrackDto> {
  //     if (!id) {
  //       throw new BadRequestException('id must be sent');
  //     }
  //     const track: Track = await this.trackRepository.findOne(id, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!track) {
  //       throw new NotFoundException();
  //     }
  //     return plainToClass(ReadTrackDto, track);
  //   }
  //   async getTracks(): Promise<ReadTrackDto[]> {
  //     const tracks: Track[] = await this.trackRepository.find({
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     const map = tracks.map(track => plainToClass(ReadTrackDto, track));
  //     return map;
  //   }
  //   async createTrack(track: Partial<CreateTrackDto>): Promise<ReadTrackDto> {
  //     const teamExist = await this.teamRepository.findOne(track.team, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!teamExist) {
  //       throw new NotFoundException(
  //         `There's not an author with this Id: ${track.team}`,
  //       );
  //     }
  //     const savedTrack: Track = await this.trackRepository.save({
  //       name: track.name,
  //       description: track.description,
  //       alias: track.alias,
  //       address: track.address,
  //       mapsAddress: track.mapsAddress,
  //       phone: track.phone,
  //       country: track.country,
  //       size: track.size,
  //       web: track.web,
  //       logoURL: track.logoURL,
  //       photoURL: track.photoURL,
  //       team: teamExist,
  //     });
  //     return plainToClass(ReadTrackDto, savedTrack);
  //   }
  //   async updateTrack(
  //     id: number,
  //     track: Partial<UpdateTrackDto>,
  //   ): Promise<ReadTrackDto> {
  //     const foundTrack: Track = await this.trackRepository.findOne(id, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!foundTrack) {
  //       throw new NotFoundException();
  //     }
  //     foundTrack.description = track.description;
  //     foundTrack.alias = track.alias;
  //     foundTrack.address = track.address;
  //     foundTrack.mapsAddress = track.mapsAddress;
  //     foundTrack.phone = track.phone;
  //     foundTrack.country = track.country;
  //     foundTrack.size = track.size;
  //     foundTrack.fastestLap = track.fastestLap;
  //     foundTrack.logoURL = track.logoURL;
  //     foundTrack.photoURL = track.photoURL;
  //     const teamExist = await this.teamRepository.findOne(track.team, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!teamExist) {
  //       throw new NotFoundException(
  //         `There's not an author with this Id: ${track.team}`,
  //       );
  //     }
  //     foundTrack.team = teamExist;
  //     const updatedTrack: Track = await this.trackRepository.save(foundTrack);
  //     return plainToClass(ReadTrackDto, updatedTrack);
  //   }
  //   async deleteTrack(id: number): Promise<boolean> {
  //     const trackExists = await this.trackRepository.findOne(id, {
  //       where: { status: statusCode.ACTIVE },
  //     });
  //     if (!trackExists) {
  //       throw new NotFoundException();
  //     }
  //     await this.trackRepository.update(id, { status: statusCode.INACTIVE });
  //     return true;
  //   }
}
