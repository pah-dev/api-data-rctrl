import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { InternalServerErrorException } from '@nestjs/common/exceptions/internal-server-error.exception';
import { AppService } from './app.service';
import { SentryInterceptor } from './shared/sentry.interceptor';

@UseInterceptors(SentryInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sentry')
  sentryTest(): string {
    throw new InternalServerErrorException();
  }
}
