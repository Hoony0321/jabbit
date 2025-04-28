import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';
import ConsultingProductService from '@/src/server/services/consultingProductService';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  console.log('request', request);
  const preflightResponse = handlePreflight(request);
  if (preflightResponse) {
    return preflightResponse;
  }

  const supabase = createSupabasePublicDBClient();
  const consultingProductService = new ConsultingProductService(supabase);

  try {
    const { id } = await params;
    const consultingProduct =
      await consultingProductService.getConsultingProductWithExpertById(id);
    return createSuccessApiResponse('READ_SUCCESS', consultingProduct);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('FETCH_FAILED');
  }
}
