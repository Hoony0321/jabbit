export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://jabbit.my/api'
    : 'http://localhost:3000/api';
