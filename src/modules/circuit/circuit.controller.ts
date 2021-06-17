import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CircuitService } from './circuit.service';
import { CreateCircuitDto, UpdateCircuitDto } from './dtos';

@ApiTags('circuit')
@Controller('circuit')
export class CircuitController {
  constructor(private circuitService: CircuitService) {}

  @Get()
  async getCircuits(@Res() res) {
    const circuits = await this.circuitService.findAll();
    return res.status(HttpStatus.OK).json(circuits);
  }

  @Get('/find')
  public async findCircuit(@Res() res, @Body() body) {
    const queryCondition = body;
    const circuits = await this.circuitService.findOne(queryCondition);
    return res.status(HttpStatus.OK).json(circuits);
  }

  @Get('/:circuitId')
  async getCircuit(@Res() res, @Param('circuitId') circuitId: string) {
    const circuit = await this.circuitService.findById(circuitId);
    return res.status(HttpStatus.OK).json(circuit);
  }

  @Get('/ids/:catId')
  async getIds(@Res() res, @Param('catId') catId: string) {
    const circuits = await this.circuitService.getIds(catId);
    return res.status(HttpStatus.OK).json(circuits);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createCircuit(
    @Res() res,
    @Body() createCircuitDto: CreateCircuitDto[],
  ) {
    const circuit = await this.circuitService.create(createCircuitDto);
    return res.status(HttpStatus.OK).json(circuit);
  }

  @Delete('/delete/:circuitId')
  async deleteCircuit(@Param('circuitId') circuitId: string, @Res() res) {
    const circuitDeleted = await this.circuitService.delete(circuitId);
    return res.status(HttpStatus.OK).json(circuitDeleted);
  }

  @Put('/update/:circuitId')
  async updateCircuit(
    @Param('circuitId') circuitId: string,
    @Res() res,
    @Body() updateCircuitDto: UpdateCircuitDto[],
  ) {
    const circuitUpdated = await this.circuitService.update(
      circuitId,
      updateCircuitDto,
    );
    return res.status(HttpStatus.OK).json(circuitUpdated);
  }
}
