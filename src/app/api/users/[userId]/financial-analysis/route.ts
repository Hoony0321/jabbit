import UserFinancialAnalysisService from '@/src/server/services/userFinancialAnalysisService';
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

  const { userId } = await params;

  const supabase = createSupabasePublicDBClient();
  const userFinancialAnalysisService = new UserFinancialAnalysisService(
    supabase,
  );

  try {
    const userFinancialAnalysis =
      await userFinancialAnalysisService.getUserFinancialDiagnosisByUserId(
        userId,
      );
    return createSuccessApiResponse('READ_SUCCESS', userFinancialAnalysis);
  } catch (error) {
    console.error(error);
    return createErrorApiResponse('UNKNOWN_ERROR');
  }
}
