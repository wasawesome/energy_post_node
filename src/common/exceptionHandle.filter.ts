import { BaseException } from './custom.exception';
import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
/**
 * Golbal Exception handler
 */
@Catch(BaseException)
export class ExceptionHandleFilter implements ExceptionFilter {
  catch(exception: BaseException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.json({
      code: exception.code,
      message: exception.message,
    });
    console.error(
      'BusinessException code:%s message:%s \n%s',
      exception.code,
      exception.message,
      exception.trace,
    );
  }
}
