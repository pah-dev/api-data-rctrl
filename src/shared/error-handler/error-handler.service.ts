import { Injectable } from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';
import { Exception } from '@sentry/node';
import * as Sentry from '@sentry/minimal';
import { strict } from 'assert';

@Injectable()
export class ErrorHandlerService {
  logger(
    ex: Exception,
    module: string,
    action: string,
    object?: any,
    id?: string,
  ) {
    const err = 'Error ' + action + ' ' + module + ': [' + id + '] ' + ex;
    Sentry.setTag('Module', module);
    Sentry.setExtra(module, object);
    Sentry.captureException(ex);
    Logger.error(err);
    return err;
  }
}
