import { toaster } from '../components/ui/toaster';
import { ERROR_INFOS } from '../constants/ERROR_INFOS';
import { AppError } from './AppError';

export const useErrorToast = () => {
  const getErrorDescription = (error: AppError | Error) => {
    if (error instanceof AppError) {
      if (error.errorInfoKey && error.errorInfoKey in ERROR_INFOS) {
        // AppError 객체에 errorInfoKey가 있는 경우
        return ERROR_INFOS[error.errorInfoKey].message;
      }
      // AppError 객체에 errorInfoKey가 없는 경우
      return error.message || ERROR_INFOS.unknownError.message;
    }

    // 일반 Error 객체
    return error.message || ERROR_INFOS.unknownError.message;
  };

  const getStatusCodeText = (error: AppError | Error) => {
    if (error instanceof AppError) {
      return error.statusCode ? `[${error.statusCode}]` : '';
    }
    return '';
  };

  const showErrorToast = (error: AppError | Error) => {
    const title = `문제가 발생했습니다.${getStatusCodeText(error)}`;
    const description = getErrorDescription(error);

    toaster.create({
      title,
      description,
      type: 'error',
    });
  };

  return { showErrorToast };
};
