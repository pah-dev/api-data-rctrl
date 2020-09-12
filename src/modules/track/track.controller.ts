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
import { TrackService } from './track.service';
import { ReadTrackDto, CreateTrackDto, UpdateTrackDto } from './dtos';

@Controller('track')
export class TrackController {}
