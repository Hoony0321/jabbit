import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';
import ExpertService from '@/src/server/services/expertService';
export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const expertService = new ExpertService(supabase);

  try {
    const experts = await expertService.getExperts();
    return createSuccessApiResponse('READ_SUCCESS', experts);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('FETCH_FAILED');
  }
}
