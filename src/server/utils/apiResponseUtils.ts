import { ApiResponse } from '@/src/types/apiResponse';
import { NextResponse } from 'next/server';
import { ErrorInfoKey } from '@/src/constants/ERROR_INFOS';

export const createSuccessApiResponse = <T>(
  status: number,
  data?: T,
  message?: string,
): NextResponse<ApiResponse<T>> => {
  return NextResponse.json(
    {
      success: true,
      status,
      data,
      message,
    },
    { status },
  );
};

export const createErrorApiResponse = (
  status: number,
  errorInfoKey: ErrorInfoKey,
): NextResponse<ApiResponse> => {
  return NextResponse.json(
    { success: false, status, errorInfoKey },
    { status },
  );
};
