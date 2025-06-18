import jwt from 'jsonwebtoken';
import { JWT } from '@/src/client/config/jwt';
import { AuthUser } from '@/src/client/store/authStore';
import {
  createSuccessApiResponse,
  createErrorApiResponse,
} from '@/src/server/utils/apiResponseUtils';
export async function POST(request: Request) {
  try {
    const user: AuthUser = await request.json();

    if (!user || !user.id) {
      return createErrorApiResponse('INVALID_USER_DATA');
    }

    const payload = {
      sub: user.id,
      id: user.id,
      name: user.name,
      email: user.email,
      auth: 'ROLE_USER',
    };

    const token = jwt.sign(payload, JWT.SECRET, {
      expiresIn: JWT.EXPIRES_IN,
    });

    const response = createSuccessApiResponse('CREATE_SUCCESS', token);

    response.headers.set(
      'Set-Cookie',
      `token=${token}; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=3600`,
    );

    return response;
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}

export async function DELETE() {
  const response = createSuccessApiResponse('DELETE_SUCCESS');

  response.headers.set(
    'Set-Cookie',
    'token=; HttpOnly; Path=/; Secure; SameSite=Strict; Max-Age=0',
  );

  return response;
}