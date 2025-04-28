import { getAccessToken, getUserInfo } from '@/src/client/utils/auth';
import { createJwtToken } from '@/src/client/utils/jwt';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import getAllUsers from '@/src/client/lib/api/getAllUsers';
import createUser from '@/src/client/lib/api/createUser';
import { User } from '@/src/server/types/domains';
export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code || !state) {
    return createErrorApiResponse('BAD_REQUEST_ERROR');
  }

  try {
    // 인증 코드로 access_token 요청
    await fetch('https://nid.naver.com', { method: 'HEAD' }).catch(() => {});
    const tokenData = await getAccessToken(code, 'NAVER', state);
    if (!tokenData.access_token) {
      return createErrorApiResponse('BAD_REQUEST_ERROR');
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'NAVER');
    if (userData.message !== 'success') {
      return createErrorApiResponse('BAD_REQUEST_ERROR');
    }

    // 사용자 정보 조회
    const userReadResponse = await getAllUsers();
    let user = userReadResponse.data.find(
      (user: User) => user.provider_id === userData.response.id,
    );

    if (!user) {
      user = await createUser({
        provider_id: userData.response.id,
        provider: 'NAVER',
        email: userData.response.email,
      });
    }

    // JWT 토큰 생성
    const jwtToken = createJwtToken({
      id: user.id,
      provider: 'NAVER',
    });

    return createSuccessApiResponse('READ_SUCCESS', {
      id: user.id,
      provider: 'NAVER',
      token: jwtToken,
    });
  } catch {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
