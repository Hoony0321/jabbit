export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.jabbit.my/api'
    : 'http://localhost:3000/api';
