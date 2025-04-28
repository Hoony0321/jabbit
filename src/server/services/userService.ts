import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/src/server/types/supabase';

class UserService {
  constructor(private readonly supabase: SupabaseClient<Database, 'public'>) {}

  async getAllUsers() {
    const { data, error } = await this.supabase.from('users').select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getUserById(id: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async getUserByProviderId(provider_id: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select('*')
      .eq('provider_id', provider_id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async createUser({
    provider_id,
    provider,
    email,
  }: {
    provider_id: string;
    provider: string;
    email: string;
  }) {
    const { data, error } = await this.supabase.from('users').insert({
      provider_id,
      provider,
      email,
      birth_year: 0,
      has_children: false,
      is_married: false,
    });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}

export default UserService;
