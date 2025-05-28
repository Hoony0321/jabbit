import { useAuthStore } from '@/src/client/store/authStore';
import { AI_API_URL } from '@/src/client/constants/API';

interface RequestOptions extends RequestInit {
  body?: any;
}

const getHeaders = (accessToken: string | null) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return headers;
};

export const apiHandler = {
  get: async <T>(
    endpoint: string,
    options: RequestOptions = {},
  ): Promise<T> => {
    const accessToken = useAuthStore.getState().accessToken;

    const response = await fetch(`${AI_API_URL}${endpoint}`, {
      method: 'GET',
      headers: getHeaders(accessToken),
      ...options,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  post: async <T>(
    endpoint: string,
    data?: any,
    options: RequestOptions = {},
  ): Promise<T> => {
    const accessToken = useAuthStore.getState().accessToken;

    const response = await fetch(`${AI_API_URL}${endpoint}`, {
      method: 'POST',
      headers: getHeaders(accessToken),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};
