import { getAccessToken, getUserInfo } from '@/src/client/utils/auth';
import { createJwtToken } from '@/src/client/utils/jwt';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code || !state) {
    return createErrorApiResponse(
      ERROR_INFOS['auth.noCode'].statusCode,
      'auth.noCode',
    );
  }

  try {
    // 인증 코드로 access_token 요청
    const tokenData = await getAccessToken(code, 'NAVER');
    if (!tokenData.access_token) {
      return createErrorApiResponse(
        ERROR_INFOS['auth.accessTokenFailed'].statusCode,
        'auth.accessTokenFailed',
      );
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'NAVER');
    if (!userData.response.id) {
      return createErrorApiResponse(
        ERROR_INFOS['auth.fetchUserInfoFailed'].statusCode,
        'auth.fetchUserInfoFailed',
      );
    }

    // JWT 토큰 생성
    const jwtToken = createJwtToken({
      id: userData.response.id,
      provider: 'NAVER',
    });

    return createSuccessApiResponse(
      200,
      {
        id: userData.response.id,
        provider: 'NAVER',
        token: jwtToken,
      },
      API_MESSAGES['READ_SUCCESS'],
    );
  } catch {
    return createErrorApiResponse(
      ERROR_INFOS['auth.fetchUserInfoFailed'].statusCode,
      'auth.fetchUserInfoFailed',
    );
  }
}
