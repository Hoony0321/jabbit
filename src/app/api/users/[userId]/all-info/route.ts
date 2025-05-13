import UserAllInfoService from '@/src/server/services/userAllInfoService';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';
import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';

export async function POST(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userAllInfoService = new UserAllInfoService(supabase);

  try {
    const { userId } = await params;
    const {
      personal_info,
      financial_goals,
      financial_concern,
      cashflows,
      expenses,
      debts,
      assets,
    } = await req.json();
    const userAllInfo = await userAllInfoService.createUserAllInfo(userId, {
      personal_info,
      financial_goals,
      financial_concern,
      cashflows,
      expenses,
      debts,
      assets,
    });

    return createSuccessApiResponse('CREATE_SUCCESS', userAllInfo);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('CREATE_ERROR');
  }
}

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userAllInfoService = new UserAllInfoService(supabase);

  try {
    const { userId } = await params;
    const userAllInfo = await userAllInfoService.getUserAllInfo(userId);

    if (
      !userAllInfo ||
      !userAllInfo.user_personal_info ||
      !userAllInfo.user_financial_goal ||
      userAllInfo.user_financial_goal.length != 3 ||
      !userAllInfo.user_financial_concern ||
      !userAllInfo.user_cashflows
    ) {
      return createErrorApiResponse('NOT_FOUND_ERROR');
    }

    return createSuccessApiResponse('READ_SUCCESS', userAllInfo);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('FETCH_FAILED');
  }
}
