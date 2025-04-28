export class AppError extends Error {
  name: string;
  constructor({ name, message }: { name: string; message: string }) {
    super(message || '알 수 없는 오류');
    this.name = name || 'UNKNOWN_ERROR';
  }
}
