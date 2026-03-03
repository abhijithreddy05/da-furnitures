import { createClient } from '@supabase/supabase-js';
import { Product, Location } from '../types';

// Initialize Supabase client for auth
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Supabase environment variables not configured');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// API Proxy URL - routes through Vercel backend to avoid ISP blocking
const API_PROXY = '/api/supabase';

// Helper function to call backend proxy
const callProxy = async (action: string, data?: any) => {
  try {
    const response = await fetch(API_PROXY, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action, data }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'API request failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Proxy error for action ${action}:`, error);
    throw error;
  }
};

// Products API
export const productsAPI = {
  async getAll() {
    try {
      const result = await callProxy('GET_PRODUCTS');
      return result.data || [];
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  async create(product: Omit<Product, 'id' | 'created_at'>) {
    try {
      const result = await callProxy('CREATE_PRODUCT', product);
      return result.data[0];
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  },

  async update(id: string, product: Partial<Product>) {
    try {
      const result = await callProxy('UPDATE_PRODUCT', { id, data: product });
      return result.data[0];
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  },

  async delete(id: string) {
    try {
      await callProxy('DELETE_PRODUCT', { id });
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  },

  async reorder(products: Array<{ id: string; order_index: number }>) {
    try {
      await callProxy('REORDER_PRODUCTS', products);
    } catch (error) {
      console.error('Error reordering products:', error);
      throw error;
    }
  },
};

// Locations API
export const locationsAPI = {
  async getAll() {
    try {
      const result = await callProxy('GET_LOCATIONS');
      return result.data || [];
    } catch (error) {
      console.error('Error fetching locations:', error);
      throw error;
    }
  },

  async create(location: Omit<Location, 'id' | 'created_at'>) {
    try {
      const result = await callProxy('CREATE_LOCATION', location);
      return result.data[0];
    } catch (error) {
      console.error('Error creating location:', error);
      throw error;
    }
  },

  async update(id: string, location: Partial<Location>) {
    try {
      const result = await callProxy('UPDATE_LOCATION', { id, data: location });
      return result.data[0];
    } catch (error) {
      console.error('Error updating location:', error);
      throw error;
    }
  },

  async delete(id: string) {
    try {
      await callProxy('DELETE_LOCATION', { id });
    } catch (error) {
      console.error('Error deleting location:', error);
      throw error;
    }
  },
};

// Authentication
export const authAPI = {
  async login(email: string, password: string) {
    try {
      const result = await callProxy('LOGIN', { email, password });
      return result.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  async logout() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  },

  async getCurrentUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    } catch (error) {
      console.error('Error getting current user:', error);
      throw error;
    }
  },

  onAuthStateChange(callback: (user: any) => void) {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      callback(session?.user);
    });
    return subscription;
  },
};
