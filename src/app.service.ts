import { ConfigService } from './config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {
    console.log('Start Server Port: ', config.port);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
