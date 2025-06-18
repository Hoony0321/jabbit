import { Secret } from 'jsonwebtoken';

export const JWT_EXPIRES_IN = '3d';

const isDev = process.env.NODE_ENV === 'development';

export const JWT = {
  SECRET: isDev
    ? (process.env.JWT_SECRET as Secret)
    : (Buffer.from(process.env.JWT_SECRET as string, 'base64') as Secret),
  EXPIRES_IN: JWT_EXPIRES_IN,
} as const;
