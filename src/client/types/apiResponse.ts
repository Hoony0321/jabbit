import { ErrorInfoKey } from '../constants/ERROR_INFOS';

export interface ApiResponse<T = null> {
  success: boolean;
  status: number;
  data?: T;
  message?: string;
  errorInfoKey?: ErrorInfoKey;
}
