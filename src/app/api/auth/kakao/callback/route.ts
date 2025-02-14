import { NextResponse } from 'next/server';
import { createJwtToken } from '@/src/utils/jwt';
import { getAccessToken, getUserInfo } from '@/src/utils/auth';
import { ERROR_INFOS } from '@/src/constants/ERROR_INFOS';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return NextResponse.json(
      { success: false, errorInfoKey: 'auth.noCode' },
      { status: ERROR_INFOS['auth.noCode'].statusCode },
    );
  }

  try {
    // 인증 코드로 access_token 요청
    const tokenData = await getAccessToken(code, 'KAKAO');
    if (!tokenData.access_token) {
      return NextResponse.json(
        { success: false, errorInfoKey: 'auth.accessTokenFailed' },
        { status: ERROR_INFOS['auth.accessTokenFailed'].statusCode },
      );
    }

    // access_token으로 사용자 정보 요청
    const userData = await getUserInfo(tokenData.access_token, 'KAKAO');

    // JWT 토큰 생성
    const jwtToken = createJwtToken({
      id: userData.id,
      provider: 'KAKAO',
    });

    return NextResponse.json({
      success: true,
      id: userData.id,
      provider: 'KAKAO',
      token: jwtToken,
    });
  } catch {
    return NextResponse.json(
      { success: false, errorInfoKey: 'auth.fetchUserInfoFailed' },
      { status: ERROR_INFOS['auth.fetchUserInfoFailed'].statusCode },
    );
  }
}
