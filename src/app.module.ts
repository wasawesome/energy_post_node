import { UserModule } from './business/user/user.module';
import { TLogger } from './logs/logger.service';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ResponseInterceptor } from './common/response.interceptor';

@Module({
  imports: [ConfigModule, HttpModule, TLogger, ResponseInterceptor, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
