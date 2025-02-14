import { OAUTH } from '@/src/config/auth';

export const getAccessToken = async (
  code: string,
  provider: keyof typeof OAUTH,
) => {
  const response = await fetch(OAUTH[provider].TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: process.env[`${provider}_CLIENT_ID`] ?? '',
      client_secret: process.env[`${provider}_CLIENT_SECRET`] ?? '',
      redirect_uri: process.env[`${provider}_REDIRECT_URI`] ?? '',
      code,
    }),
  });

  const tokenData = await response.json();
  return tokenData;
};

export const getUserInfo = async (
  accessToken: string,
  provider: keyof typeof OAUTH,
) => {
  const response = await fetch(OAUTH[provider].USER_INFO_URL, {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const userData = await response.json();
  return userData;
};
