import { TLogger } from './../logs/logger.service';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from './../config/config.module';

@Module({
  imports: [ConfigModule, HttpModule, TLogger],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
