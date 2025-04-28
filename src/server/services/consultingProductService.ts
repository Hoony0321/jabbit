import { SupabaseClient } from '@supabase/supabase-js';

import { Database } from '../types/supabase';

class ConsultingProductService {
  constructor(private readonly supabase: SupabaseClient<Database, 'public'>) {}

  async getConsultingProducts() {
    const { data, error } = await this.supabase
      .from('consulting_products')
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getConsultingProductById(id: string) {
    const { data, error } = await this.supabase
      .from('consulting_products')
      .select('*')
      .eq('id', id);

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getConsultingProductsWithExpert() {
    const { data, error } = await this.supabase
      .from('consulting_products')
      .select('*, experts(*)');

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }

  async getConsultingProductWithExpertById(id: string) {
    const { data, error } = await this.supabase
      .from('consulting_products')
      .select('*, experts(*)')
      .eq('id', id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}

export default ConsultingProductService;
