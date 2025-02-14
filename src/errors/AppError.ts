import { ERROR_INFOS } from '../constants/ERROR_INFOS';

export class AppError extends Error {
  statusCode?: number;
  errorInfoKey?: keyof typeof ERROR_INFOS;

  constructor({
    statusCode,
    errorInfoKey,
  }: {
    statusCode?: number;
    errorInfoKey?: keyof typeof ERROR_INFOS;
  }) {
    super(ERROR_INFOS[errorInfoKey ?? 'unknownError'].message);
    this.statusCode = statusCode;
    this.errorInfoKey = errorInfoKey;
  }
}
