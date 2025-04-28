import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

class UserFinancialAnalysisService {
  constructor(private readonly supabase: SupabaseClient<Database, 'public'>) {}

  async getUserFinancialDiagnosisByUserId(userId: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select(
        '*, user_financial_info(*), user_financial_diagnosis(*), user_financial_prediction(*)',
      )
      .eq('id', userId)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    const userFinancialAnalysis = {
      ...data,
      user_financial_info: data.user_financial_info[0],
      user_financial_diagnosis: data.user_financial_diagnosis[0],
      user_financial_prediction: data.user_financial_prediction[0],
    };

    return userFinancialAnalysis;
  }
}

export default UserFinancialAnalysisService;
