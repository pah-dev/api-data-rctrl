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
  Logger,
} from '@nestjs/common';
import { CreateOrgDto, UpdateOrgDto } from './dtos';
import { OrgService } from './org.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('org')
@Controller('org')
export class OrgController {
  constructor(private orgService: OrgService) {}

  @Get()
  async getOrgs(@Res() res) {
    const orgs = await this.orgService.findAll();
    return res.status(HttpStatus.OK).json({
      orgs,
    });
  }

  @Get('/:orgId')
  async getOrg(@Res() res, @Param('orgId') orgId: string) {
    const org = await this.orgService.findById(orgId);
    return res.status(HttpStatus.OK).json(org);
  }

  @Get('/find/:orgId')
  public async findOrg(@Res() res, @Param('orgId') orgId: string) {
    const org = await this.orgService.findOne({ idOrg: orgId });
    return res.status(HttpStatus.OK).json(org);
  }

  @Get('/sec/nav')
  async getNav(@Res() res) {
    const secs = await this.orgService.getNav();
    return res.status(HttpStatus.OK).json(secs);
  }

  @Post('/create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async createOrg(@Res() res, @Body() createOrgDto: CreateOrgDto[]) {
    const org = await this.orgService.create(createOrgDto);
    return res.status(HttpStatus.OK).json(org);
  }

  @Delete('/delete/:orgId')
  async deleteOrg(@Param('orgId') orgId: string, @Res() res) {
    const orgDeleted = await this.orgService.delete(orgId);
    return res.status(HttpStatus.OK).json({ orgDeleted });
  }

  @Put('/update/:orgId')
  async updateOrg(
    @Param('orgId') orgId: string,
    @Res() res,
    @Body() updateOrgDto: UpdateOrgDto,
  ) {
    const orgUpdated = await this.orgService.update(orgId, updateOrgDto);
    return res.status(HttpStatus.OK).json({ orgUpdated });
  }
}
