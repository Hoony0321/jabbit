import { AI_API_URL } from '@/src/client/constants/API';
import { getAccessToken } from '@/src/client/utils/token';
import { useAuthStore } from '@/src/client/store/authStore';
import { redirect } from 'next/navigation';

interface RequestOptions extends RequestInit {
  body?: any;
}

const getHeaders = async (): Promise<HeadersInit> => {
  const accessToken = await getAccessToken();
  return {
    'Content-Type': 'application/json',
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
  };
};

const handleClientUnauthorized = async () => {
  const { logout } = useAuthStore.getState();
  logout();
  window.location.href = '/login';
};

const handleServerUnauthorized = () => {
  redirect('/login');
};

const handleUnauthorized = async () => {
  const isClientSide = typeof window !== 'undefined';
  if (isClientSide) {
    await handleClientUnauthorized();
  } else {
    handleServerUnauthorized();
  }
};

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    if (response.status === 401) {
      await handleUnauthorized();
      throw new Error('Unauthorized access');
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

const request = async <T>(
  method: string,
  endpoint: string,
  data?: any,
  options: RequestOptions = {},
): Promise<T> => {
  const headers = await getHeaders();
  const fetchOptions: RequestInit = {
    method,
    headers,
    ...options,
  };

  if (data) {
    fetchOptions.body = JSON.stringify(data);
  }

  const response = await fetch(`${AI_API_URL}${endpoint}`, fetchOptions);
  return handleResponse<T>(response);
};

export const apiHandler = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>('GET', endpoint, undefined, options),

  post: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    request<T>('POST', endpoint, data, options),

  put: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    request<T>('PUT', endpoint, data, options),

  patch: <T>(endpoint: string, data?: any, options?: RequestOptions) =>
    request<T>('PATCH', endpoint, data, options),

  delete: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>('DELETE', endpoint, undefined, options),
};
