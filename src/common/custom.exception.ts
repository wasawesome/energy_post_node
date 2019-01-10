/**
 * Base exception handler
 */
export class BaseException {
  constructor(
    readonly code: number,
    readonly message: string,
    readonly trace: any,
  ) {}
}

/**
 * Params exception handler
 */
export class ParamsException extends BaseException {
  constructor(message: string = 'Params is invalid', trace?: string) {
    super(400, message, trace);
  }
}

/**
 * Permission exception handler
 */
export class AuthException extends BaseException {
  constructor(
    message: string = 'Sorry, you do not have permission to do that',
    trace?: string,
  ) {
    super(403, message, trace);
  }
}
