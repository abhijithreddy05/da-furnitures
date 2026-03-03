import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
// For seeding, use the service role key for unrestricted access
// Set SUPABASE_SERVICE_ROLE_KEY in .env file
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing environment variables:');
  console.error('  - VITE_SUPABASE_URL');
  console.error('  - SUPABASE_SERVICE_ROLE_KEY (from Supabase project settings)');
  console.error('\nAdd to your .env file:');
  console.error('  SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const dummyProducts = [
  {
    name: 'Modern Sofa',
    model: 'Sofa',
    category: 'Living Room',
    price: 45999,
    customization_price: 5000,
    description: 'Comfortable modern sofa with premium fabric and wooden legs. Perfect for contemporary living spaces.',
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    order_index: 1,
  },
  {
    name: 'Dining Table Set',
    model: 'Table',
    category: 'Dining',
    price: 35999,
    customization_price: 3000,
    description: 'Elegant 6-seater dining table with matching chairs. Solid wood construction with beautiful finish.',
    image_url: 'https://images.unsplash.com/photo-1557804506-669714d2e9d8?w=500&h=500&fit=crop',
    order_index: 2,
  },
  {
    name: 'Wooden Bed Frame',
    model: 'Bed',
    category: 'Bedroom',
    price: 28999,
    customization_price: 2000,
    description: 'Sturdy wooden bed frame with storage. Available in Queen and King sizes.',
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
    order_index: 3,
  },
  {
    name: 'Office Desk',
    model: 'Desk',
    category: 'Office',
    price: 18999,
    customization_price: 1500,
    description: 'Professional office desk with multiple storage compartments. Great for home or workspace.',
    image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop',
    order_index: 4,
  },
  {
    name: 'Reclining Chair',
    model: 'Chair',
    category: 'Living Room',
    price: 22999,
    customization_price: 2000,
    description: 'Comfortable reclining chair with built-in footrest. Perfect for relaxation and comfort.',
    image_url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop',
    order_index: 5,
  },
  {
    name: 'Wall Unit Cabinet',
    model: 'Cabinet',
    category: 'Storage',
    price: 32999,
    customization_price: 2500,
    description: 'Modern wall-mounted cabinet with glass doors. Ideal for displaying and storing items.',
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    order_index: 6,
  },
  {
    name: 'Coffee Table',
    model: 'Table',
    category: 'Living Room',
    price: 12999,
    customization_price: 1000,
    description: 'Stylish wooden coffee table with lower shelf. Adds elegance to any living room.',
    image_url: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop',
    order_index: 7,
  },
  {
    name: 'Bookshelf',
    model: 'Shelf',
    category: 'Storage',
    price: 16999,
    customization_price: 1200,
    description: 'Tall wooden bookshelf with multiple shelves. Perfect for organizing books and decor.',
    image_url: 'https://images.unsplash.com/photo-1556020685-cf4202baaa5f?w=500&h=500&fit=crop',
    order_index: 8,
  },
  {
    name: 'Wardrobe Cabinet',
    model: 'Cabinet',
    category: 'Bedroom',
    price: 42999,
    customization_price: 3500,
    description: 'Large wardrobe with hanging space and drawers. Premium quality wooden construction.',
    image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    order_index: 9,
  },
  {
    name: 'Accent Stool',
    model: 'Stool',
    category: 'Living Room',
    price: 8999,
    customization_price: 500,
    description: 'Compact accent stool with upholstered top. Great for extra seating or as a footrest.',
    image_url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=500&fit=crop',
    order_index: 10,
  },
];

async function seedProducts() {
  try {
    console.log('🌱 Starting to seed products...');

    // Clear existing products
    const { error: deleteError } = await supabase
      .from('products')
      .delete()
      .neq('id', ''); // Delete all rows

    if (deleteError && deleteError.code !== 'PGRST116') {
      console.error('Error deleting existing products:', deleteError);
    } else {
      console.log('✓ Cleared existing products');
    }

    // Insert new products
    const { data, error } = await supabase
      .from('products')
      .insert(dummyProducts)
      .select();

    if (error) {
      console.error('❌ Error inserting products:', error);
      process.exit(1);
    }

    console.log(`✅ Successfully inserted ${data.length} products!`);
    console.log('\nProducts added:');
    data.forEach((product) => {
      console.log(`  - ${product.name} (${product.model}) - ₹${product.price}`);
    });

    process.exit(0);
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

seedProducts();
