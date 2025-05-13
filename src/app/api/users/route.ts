import UserService from '@/src/server/services/userService';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';
import {
  createSuccessApiResponse,
  createErrorApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userService = new UserService(supabase);

  try {
    const users = await userService.getAllUsers();
    return createSuccessApiResponse('READ_SUCCESS', users);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}

export async function POST(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userService = new UserService(supabase);

  try {
    const {
      provider_id,
      provider,
      email,
      name,
      birth_year,
      gender,
      phone_number,
    } = await req.json();
    const user = await userService.createUser({
      provider_id,
      provider,
      email,
      name,
      birth_year,
      gender,
      phone_number,
    });
    return createSuccessApiResponse('CREATE_SUCCESS', user);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
