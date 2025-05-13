import UserService from '@/src/server/services/userService';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userService = new UserService(supabase);

  try {
    const { userId } = await params;
    const user = await userService.getUserById(userId);
    return createSuccessApiResponse('READ_SUCCESS', user);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('FETCH_FAILED');
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userService = new UserService(supabase);

  try {
    const { userId } = await params;
    const { email, name, birth_year, gender, phone_number } = await req.json();
    const user = await userService.updateUser(userId, {
      email,
      name,
      birth_year,
      gender,
      phone_number,
    });
    return createSuccessApiResponse('UPDATE_SUCCESS', user);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UPDATE_ERROR');
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userService = new UserService(supabase);

  try {
    const { userId } = await params;
    const user = await userService.deleteUser(userId);
    return createSuccessApiResponse('DELETE_SUCCESS', user);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('DELETE_ERROR');
  }
}
