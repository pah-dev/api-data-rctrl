import * as fs from 'fs';
import { parse } from 'dotenv';
import { Logger } from '@nestjs/common';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const isDevelopmentEnv = process.env.ENV !== 'PROD';

    if (isDevelopmentEnv) {
      const envFilePath = __dirname + '/../../.env';
      const existPath = fs.existsSync(envFilePath);

      if (!existPath) {
        console.log(envFilePath);
        Logger.log('.env file does not exist', 'ENV');
        process.exit(0);
      }

      this.envConfig = parse(fs.readFileSync(envFilePath));
    } else {
      this.envConfig = {
        PORT: process.env.PORT,
        MONGODB_URI: process.env.MONGODB_URI,
      };
    }
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
