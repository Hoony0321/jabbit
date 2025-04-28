import { Database } from '../types/supabase';

import { SupabaseClient } from '@supabase/supabase-js';

class ExpertService {
  constructor(private readonly supabase: SupabaseClient<Database, 'public'>) {}

  async getExperts() {
    const { data, error } = await this.supabase.from('experts').select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getExpertById(id: string) {
    const { data, error } = await this.supabase
      .from('experts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

export default ExpertService;
