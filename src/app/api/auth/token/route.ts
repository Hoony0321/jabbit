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

    return createSuccessApiResponse('CREATE_SUCCESS', token);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
