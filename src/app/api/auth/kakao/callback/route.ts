import { createJwtToken } from '@/src/client/utils/jwt';
import { getAccessToken, getUserInfo } from '@/src/client/utils/auth';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return createErrorApiResponse(
      ERROR_INFOS['auth.noCode'].statusCode,
      'auth.noCode',
    );
  }

  try {
    // 인증 코드로 access_token 요청
    const tokenData = await getAccessToken(code, 'KAKAO');
    if (!tokenData.access_token) {
      return createErrorApiResponse(
        ERROR_INFOS['auth.accessTokenFailed'].statusCode,
        'auth.accessTokenFailed',
      );
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'KAKAO');

    // JWT 토큰 생성
    const jwtToken = createJwtToken({
      id: userData.id,
      provider: 'KAKAO',
    });

    return createSuccessApiResponse(
      200,
      {
        id: userData.id,
        provider: 'KAKAO',
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
