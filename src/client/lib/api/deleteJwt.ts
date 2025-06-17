import { apiHandler } from '@/src/client/lib/api/apiHandler';

export const deleteJwtToken = async (): Promise<any> => {
  return apiHandler.delete('/auth/token');
};
