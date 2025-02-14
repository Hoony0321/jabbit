export const OAUTH = {
  KAKAO: {
    AUTH_URL: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`,
    TOKEN_URL: 'https://kauth.kakao.com/oauth/token',
    USER_INFO_URL: 'https://kapi.kakao.com/v2/user/me',
  },
  NAVER: {
    AUTH_URL: (state: string) =>
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_NAVER_REDIRECT_URI}&state=${state}`,
    TOKEN_URL: 'https://nid.naver.com/oauth2.0/token',
    USER_INFO_URL: 'https://openapi.naver.com/v1/nid/me',
  },
};
