import { handlePreflight } from '@/src/server/utils/apiResponseUtils';
import {
  createSuccessApiResponse,
  createErrorApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';
import UserConsultingHistoryService from '@/src/server/services/userConsultingHistoryService';

export async function GET(
  req: Request,
  { params }: { params: Promise<{ userId: string }> },
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
    const { userId } = await params;
    const userConsultingHistories =
      await userConsultingHistoryService.getUserConsultingHistories(userId);

    return createSuccessApiResponse('READ_SUCCESS', userConsultingHistories);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
