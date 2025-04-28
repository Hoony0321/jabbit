import { NextResponse } from 'next/server';
import {
  API_ERROR_INFOS,
  API_SUCCESS_INFOS,
  ApiErrorInfoKeys,
  ApiSuccessInfoKeys,
} from '../constants/API_MESSAGES';

const ALLOWED_ORIGIN = 'https://www.jabbit.my';
const ALLOWED_METHODS = 'GET, POST, PUT, DELETE, OPTIONS';
const ALLOWED_HEADERS = 'Content-Type, Authorization';
const ALLOWED_CREDENTIALS = 'true';

export const handlePreflight = (req: Request) => {
  if (req.method === 'OPTIONS') {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
    response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS);
    response.headers.set('Access-Control-Allow-Headers', ALLOWED_HEADERS);
    response.headers.set(
      'Access-Control-Allow-Credentials',
      ALLOWED_CREDENTIALS,
    );

    return response;
  }

  return null;
};
export const createSuccessApiResponse = <T>(
  apiSuccessInfoKey: ApiSuccessInfoKeys,
  data?: T,
) => {
  const response = NextResponse.json(
    {
      success: true,
      status: API_SUCCESS_INFOS[apiSuccessInfoKey].statusCode,
      data,
      message: API_SUCCESS_INFOS[apiSuccessInfoKey].message,
    },
    { status: API_SUCCESS_INFOS[apiSuccessInfoKey].statusCode },
  );

  // CORS 헤더 설정
  response.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS);
  response.headers.set('Access-Control-Allow-Headers', ALLOWED_HEADERS);
  response.headers.set('Access-Control-Allow-Credentials', ALLOWED_CREDENTIALS);
  return response;
};

export const createErrorApiResponse = (errorInfoKey: ApiErrorInfoKeys) => {
  const response = NextResponse.json(
    {
      success: false,
      status: API_ERROR_INFOS[errorInfoKey].statusCode,
      message: API_ERROR_INFOS[errorInfoKey].message,
    },
    { status: API_ERROR_INFOS[errorInfoKey].statusCode },
  );

  // CORS 헤더 설정
  response.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS);
  response.headers.set('Access-Control-Allow-Headers', ALLOWED_HEADERS);
  response.headers.set('Access-Control-Allow-Credentials', ALLOWED_CREDENTIALS);
  return response;
};
