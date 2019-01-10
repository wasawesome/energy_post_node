// import { TLogger } from './logs/logger.service';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { join } from 'path';
import { ConfigService } from './config/config.service';
import * as cookieParser from 'cookie-parser';
import * as csurf from 'csurf';
import * as compression from 'compression';
import { ExceptionHandleFilter } from './common/exceptionHandle.filter';
import { ResponseInterceptor } from './common/response.interceptor';

declare const module: any;

async function bootstrap() {
  // setup root path
  const rootDir = join(__dirname, '../');
  const app = await NestFactory.create(AppModule, {
    // logger: console,
  });
  const config: ConfigService = app.get(ConfigService);

  app.useStaticAssets(join(rootDir, 'public'), {
    prefix: '/public',
  });
  // app.engine('html');
  app.set('view engine', 'html');
  app.setBaseViewsDir(join(rootDir, 'views'));

  // setup response data compression
  app.use(compression());
  // setup cookie parser

  app.use(cookieParser(config.sessionSecret));
  // 防止跨站请求伪造
  app.use(csurf({ cookie: true }));
  // setup cors
  app.enableCors();

  // setup custom logger
  // app.useLogger(app.get(TLogger));

  // 设置变量 csrf 保存csrfToken值
  // app.use((req, res, next) => {
  //   res.locals.csrf = req.csrfToken ? req.csrfToken() : '';
  //   next();
  // });

  // 注册并配置全局验证管道
  app.useGlobalPipes(
    new ValidationPipe({
      // transform: true,
      // whitelist: true,
      // forbidNonWhitelisted: true,
      // skipMissingProperties: false,
      // forbidUnknownValues: true,
    }),
  );
  // setup golbal custom exception filter
  app.useGlobalFilters(new ExceptionHandleFilter());
  // setup golbal response interceptor
  app.useGlobalInterceptors(new ResponseInterceptor());

  await app.listen(config.port, () => {
    console.log(`Server start in: http://127.0.0.1:${config.port}`);
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
