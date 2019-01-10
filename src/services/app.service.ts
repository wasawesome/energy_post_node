import { ConfigService } from './../config/config.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor (private readonly config: ConfigService) {
    console.log("", config.port);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
