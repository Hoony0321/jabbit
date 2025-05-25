import { Secret } from 'jsonwebtoken';

export const JWT_EXPIRES_IN = '3d';

export const JWT = {
  SECRET: Buffer.from(process.env.JWT_SECRET as string, 'base64') as Secret,
  EXPIRES_IN: JWT_EXPIRES_IN,
} as const;
