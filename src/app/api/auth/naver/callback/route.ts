import { getAccessToken, getUserInfo } from '@/src/client/utils/auth';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import getAllUsers from '@/src/client/lib/api/getAllUsers';
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
    const user = userReadResponse.data.find(
      (user: User) => user.provider_id == userData.response.id,
      (user: User) => user.provider == 'NAVER',
    );

    return createSuccessApiResponse('READ_SUCCESS', {
      providerId: userData.response.id,
      provider: 'NAVER',
      name: user ? user.name : null,
      email: user ? user.email : null,
      userId: user ? user.id : null,
    });
  } catch {
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
