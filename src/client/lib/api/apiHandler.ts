import { AI_API_URL } from '@/src/client/constants/API';
import { getAccessToken } from '../../utils/token';

interface RequestOptions extends RequestInit {
  body?: any;
}

const getHeaders = async (): Promise<HeadersInit> => {
  const accessToken = await getAccessToken();

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
    const response = await fetch(`${AI_API_URL}${endpoint}`, {
      method: 'GET',
      headers: await getHeaders(),
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
    const response = await fetch(`${AI_API_URL}${endpoint}`, {
      method: 'POST',
      headers: await getHeaders(),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  put: async <T>(
    endpoint: string,
    data?: any,
    options: RequestOptions = {},
  ): Promise<T> => {
    const response = await fetch(`${AI_API_URL}${endpoint}`, {
      method: 'PUT',
      headers: await getHeaders(),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  patch: async <T>(
    endpoint: string,
    options: RequestOptions = {},
  ): Promise<T> => {
    const response = await fetch(`${AI_API_URL}${endpoint}`, {
      method: 'PATCH',
      headers: await getHeaders(),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  delete: async <T>(
    endpoint: string,
    options: RequestOptions = {},
  ): Promise<T> => {
    const response = await fetch(`${AI_API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: await getHeaders(),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};
