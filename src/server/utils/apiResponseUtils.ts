import { ApiResponse } from '@/src/client/types/apiResponse';
import { NextResponse } from 'next/server';
import { ErrorInfoKey } from '@/src/client/constants/ERROR_INFOS';

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
  status: number,
  data?: T,
  message?: string,
): NextResponse<ApiResponse<T>> => {
  const response = NextResponse.json(
    {
      success: true,
      status,
      data,
      message,
    },
    { status },
  );

  // CORS 헤더 설정
  response.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS);
  response.headers.set('Access-Control-Allow-Headers', ALLOWED_HEADERS);
  response.headers.set('Access-Control-Allow-Credentials', ALLOWED_CREDENTIALS);
  return response;
};

export const createErrorApiResponse = (
  status: number,
  errorInfoKey: ErrorInfoKey,
): NextResponse<ApiResponse> => {
  const response = NextResponse.json(
    { success: false, status, errorInfoKey },
    { status },
  );

  // CORS 헤더 설정
  response.headers.set('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  response.headers.set('Access-Control-Allow-Methods', ALLOWED_METHODS);
  response.headers.set('Access-Control-Allow-Headers', ALLOWED_HEADERS);
  response.headers.set('Access-Control-Allow-Credentials', ALLOWED_CREDENTIALS);
  return response;
};
