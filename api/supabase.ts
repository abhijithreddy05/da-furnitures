// Vercel serverless function to proxy Supabase requests
// This bypasses ISP blocking by routing through Vercel's servers

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || '';
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Use service role key for API operations
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req: any, res: any) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { action, data } = req.body;

    switch (action) {
      // ===== PRODUCTS =====
      case 'GET_PRODUCTS':
        const { data: products, error: getError } = await supabase
          .from('products')
          .select('*')
          .order('order_index', { ascending: true });
        
        if (getError) throw getError;
        return res.status(200).json({ success: true, data: products });

      case 'CREATE_PRODUCT':
        const { data: newProduct, error: createError } = await supabase
          .from('products')
          .insert([data])
          .select();
        
        if (createError) throw createError;
        return res.status(200).json({ success: true, data: newProduct });

      case 'UPDATE_PRODUCT':
        const { data: updatedProduct, error: updateError } = await supabase
          .from('products')
          .update(data.data)
          .eq('id', data.id)
          .select();
        
        if (updateError) throw updateError;
        return res.status(200).json({ success: true, data: updatedProduct });

      case 'DELETE_PRODUCT':
        const { error: deleteError } = await supabase
          .from('products')
          .delete()
          .eq('id', data.id);
        
        if (deleteError) throw deleteError;
        return res.status(200).json({ success: true });

      case 'REORDER_PRODUCTS':
        // Update order_index for products
        for (let i = 0; i < data.length; i++) {
          const { error } = await supabase
            .from('products')
            .update({ order_index: i + 1 })
            .eq('id', data[i].id);
          
          if (error) throw error;
        }
        
        return res.status(200).json({ success: true });

      // ===== LOCATIONS =====
      case 'GET_LOCATIONS':
        const { data: locations, error: locError } = await supabase
          .from('locations')
          .select('*');
        
        if (locError) throw locError;
        return res.status(200).json({ success: true, data: locations });

      case 'CREATE_LOCATION':
        const { data: newLocation, error: locCreateError } = await supabase
          .from('locations')
          .insert([data])
          .select();
        
        if (locCreateError) throw locCreateError;
        return res.status(200).json({ success: true, data: newLocation });

      case 'UPDATE_LOCATION':
        const { data: updatedLocation, error: locUpdateError } = await supabase
          .from('locations')
          .update(data.data)
          .eq('id', data.id)
          .select();
        
        if (locUpdateError) throw locUpdateError;
        return res.status(200).json({ success: true, data: updatedLocation });

      case 'DELETE_LOCATION':
        const { error: locDeleteError } = await supabase
          .from('locations')
          .delete()
          .eq('id', data.id);
        
        if (locDeleteError) throw locDeleteError;
        return res.status(200).json({ success: true });

      // ===== AUTH =====
      case 'LOGIN':
        const { email, password } = data;
        const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (authError) throw authError;
        return res.status(200).json({ success: true, data: authData });

      case 'SIGNUP':
        const { data: signupData, error: signupError } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
        });
        
        if (signupError) throw signupError;
        return res.status(200).json({ success: true, data: signupData });

      default:
        return res.status(400).json({ error: 'Invalid action' });
    }
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(400).json({ 
      error: error.message || 'An error occurred',
      details: error.details || null,
    });
  }
}
