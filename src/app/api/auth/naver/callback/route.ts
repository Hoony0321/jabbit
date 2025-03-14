import { getAccessToken, getUserInfo } from '@/src/client/utils/auth';
import { createJwtToken } from '@/src/client/utils/jwt';
import { ERROR_INFOS } from '@/src/client/constants/ERROR_INFOS';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { API_MESSAGES } from '@/src/server/constants/API_MESSAGES';
import { BASE_URL } from '@/src/server/constants/API';
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
    await fetch('https://nid.naver.com', { method: 'HEAD' }).catch(() => {});
    const tokenData = await getAccessToken(code, 'NAVER', state);
    if (!tokenData.access_token) {
      return createErrorApiResponse(
        ERROR_INFOS['auth.accessTokenFailed'].statusCode,
        'auth.accessTokenFailed',
      );
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'NAVER');
    if (userData.message !== 'success') {
      return createErrorApiResponse(
        ERROR_INFOS['auth.fetchUserInfoFailed'].statusCode,
        'auth.fetchUserInfoFailed',
      );
    }

    // 사용자 정보 조회
    const userReadResponse = await fetch(
      `${BASE_URL}/users/${userData.response.id}`,
    );
    if (userReadResponse.status === 404) {
      // 사용자 정보가 없으면 생성
      await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify({
          id: userData.response.id,
          provider: 'NAVER',
          createdAt: new Date(),
        }),
      });
    } else if (userReadResponse.status !== 200) {
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
