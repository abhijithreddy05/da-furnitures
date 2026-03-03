import { createClient } from '@supabase/supabase-js';
import { Product } from '../types';

// Initialize Supabase client
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Supabase environment variables not configured');
}

// Add console logs to debug Supabase URL and Key
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase Key:', import.meta.env.VITE_SUPABASE_ANON_KEY);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Products API
export const productsAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('order_index', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async create(product: Omit<Product, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, product: Partial<Product>) {
    const { data, error } = await supabase
      .from('products')
      .update(product)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },

  async reorder(products: Array<{ id: string; order_index: number }>) {
    for (const product of products) {
      const { error } = await supabase
        .from('products')
        .update({ order_index: product.order_index })
        .eq('id', product.id);
      
      if (error) throw error;
    }
  },
};

// Locations API
export const locationsAPI = {
  async getAll() {
    const { data, error } = await supabase
      .from('locations')
      .select('*')
      .order('created_at', { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async create(location: Omit<Location, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('locations')
      .insert([location])
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async update(id: string, location: Partial<Location>) {
    const { data, error } = await supabase
      .from('locations')
      .update(location)
      .eq('id', id)
      .select();
    
    if (error) throw error;
    return data[0];
  },

  async delete(id: string) {
    const { error } = await supabase
      .from('locations')
      .delete()
      .eq('id', id);
    
    if (error) throw error;
  },
};

// Authentication
export const authAPI = {
  async login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
},

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  onAuthStateChange(callback: (user: any) => void) {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      callback(session?.user);
    });
    return subscription;
  },
};
