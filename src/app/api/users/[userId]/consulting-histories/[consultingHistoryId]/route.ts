import {
  handlePreflight,
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import UserConsultingHistoryService from '@/src/server/services/userConsultingHistoryService';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';

export async function GET(
  req: Request,
  {
    params,
  }: { params: Promise<{ userId: string; consultingHistoryId: string }> },
) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const userConsultingHistoryService = new UserConsultingHistoryService(
    supabase,
  );

  try {
    const { userId, consultingHistoryId } = await params;
    const userConsultingHistory =
      await userConsultingHistoryService.getConsultingHistoryById(
        consultingHistoryId,
      );

    if (userConsultingHistory.user_id !== userId) {
      return createErrorApiResponse('UNAUTHORIZED_ERROR');
    }

    return createSuccessApiResponse('READ_SUCCESS', userConsultingHistory);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
