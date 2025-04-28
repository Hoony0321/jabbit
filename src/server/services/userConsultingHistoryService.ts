import { SupabaseClient } from '@supabase/supabase-js';

import { Database } from '../types/supabase';

class UserConsultingHistoryService {
  constructor(private readonly supabase: SupabaseClient<Database, 'public'>) {}

  async getUserConsultingHistories(userId: string) {
    const { data, error } = await this.supabase
      .from('user_consulting_histories')
      .select('*, consulting_products(*, experts(*))')
      .eq('user_id', userId);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getConsultingHistoryById(id: string) {
    const { data, error } = await this.supabase
      .from('user_consulting_histories')
      .select('*, consulting_products(*, experts(*))')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

export default UserConsultingHistoryService;
