import { SupabaseClient } from '@supabase/supabase-js';
import { Database } from '@/src/server/types/supabase';
import { User } from '@/src/server/types/domains';
type UserCreateForm = Omit<User, 'id' | 'created_at'>;
type UserUpdateForm = Partial<UserCreateForm>;
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

  async getUserByProviderAndProviderId(provider: string, provider_id: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select('*')
      .eq('provider', provider)
      .eq('provider_id', provider_id)
      .single();
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async createUser(user: UserCreateForm) {
    const { data, error } = await this.supabase
      .from('users')
      .insert(user)
      .select();
    if (error) {
      throw new Error(error.message);
    }
    return data[0];
  }

  async updateUser(id: string, user: UserUpdateForm) {
    const { data, error } = await this.supabase
      .from('users')
      .update(user)
      .eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }

  async deleteUser(id: string) {
    const { data, error } = await this.supabase
      .from('users')
      .delete()
      .eq('id', id);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}

export default UserService;
