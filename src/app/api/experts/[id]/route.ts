import {
  createErrorApiResponse,
  createSuccessApiResponse,
} from '@/src/server/utils/apiResponseUtils';
import { handlePreflight } from '@/src/server/utils/apiResponseUtils';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';
import ExpertService from '@/src/server/services/expertService';
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const preflightResponse = handlePreflight(_request);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const expertService = new ExpertService(supabase);

  try {
    const { id } = await params;
    const expert = await expertService.getExpertById(id);

    return createSuccessApiResponse('READ_SUCCESS', expert);
  } catch (error) {
    console.log(error);
    return createErrorApiResponse('FETCH_FAILED');
  }
}
