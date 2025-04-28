import {
  createErrorApiResponse,
  createSuccessApiResponse,
  handlePreflight,
} from '@/src/server/utils/apiResponseUtils';
import ConsultingProductService from '@/src/server/services/consultingProductService';
import { createSupabasePublicDBClient } from '@/src/server/supabase/clients';

export async function GET(req: Request) {
  const preflightResponse = handlePreflight(req);
  if (preflightResponse) {
    return preflightResponse;
  }

  const { searchParams } = new URL(req.url);
  const includeExpert = searchParams.get('includeExpert') === 'true';

  const supabase = createSupabasePublicDBClient();
  const consultingProductService = new ConsultingProductService(supabase);

  try {
    if (includeExpert) {
      const consultingProducts =
        await consultingProductService.getConsultingProductsWithExpert();
      return createSuccessApiResponse('READ_SUCCESS', consultingProducts);
    }
    const consultingProducts =
      await consultingProductService.getConsultingProducts();
    return createSuccessApiResponse('READ_SUCCESS', consultingProducts);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('FETCH_FAILED');
  }
}
