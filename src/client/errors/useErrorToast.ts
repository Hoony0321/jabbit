import { toaster } from '../components/ui/toaster';

export const useErrorToast = () => {
  const showErrorToast = (error: Error) => {
    const title = `문제가 발생했습니다.[${error.name}]`;
    const description = error.message;

    toaster.create({
      title,
      description,
      type: 'error',
    });
  };

  return { showErrorToast };
};
