# 📊 Database Setup SQL Scripts

Run these SQL scripts in your Supabase SQL Editor to set up the database for DA Furniture World.

## 1️⃣ Products Table Setup

```sql
-- Create products table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  model VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) DEFAULT 0,
  description TEXT,
  image_url TEXT,
  order_index INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policy: Public can read all products
CREATE POLICY "Allow public read" ON products
  FOR SELECT USING (true);

-- Policy: Authenticated users (admins) can insert
CREATE POLICY "Allow authenticated insert" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy: Authenticated users (admins) can update
CREATE POLICY "Allow authenticated update" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Policy: Authenticated users (admins) can delete
CREATE POLICY "Allow authenticated delete" ON products
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create index for faster queries
CREATE INDEX products_order_index_idx ON products(order_index);
CREATE INDEX products_model_idx ON products(model);
CREATE INDEX products_category_idx ON products(category);
```

## 2️⃣ Locations Table Setup

```sql
-- Create locations table
CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  branch_name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  phone VARCHAR(20),
  email VARCHAR(255),
  opening_hours TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- Policy: Public can read all locations
CREATE POLICY "Allow public read" ON locations
  FOR SELECT USING (true);

-- Policy: Authenticated users (admins) can insert
CREATE POLICY "Allow authenticated insert" ON locations
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Policy: Authenticated users (admins) can update
CREATE POLICY "Allow authenticated update" ON locations
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Policy: Authenticated users (admins) can delete
CREATE POLICY "Allow authenticated delete" ON locations
  FOR DELETE USING (auth.role() = 'authenticated');
```

## 3️⃣ Sample Data (Products)

```sql
INSERT INTO products (name, model, category, price, description, image_url, order_index) VALUES
  (
    'Classic Leather Sofa',
    'Recliner',
    'Living Room',
    899.99,
    'Premium leather reclining sofa with adjustable backrest',
    'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=300',
    0
  ),
  (
    'Modern Dining Table',
    'Dining',
    'Dining Room',
    599.99,
    'Sleek contemporary dining table for 6-8 people',
    'https://images.unsplash.com/photo-1574180045827-681f8a0a8c18?w=500&h=300',
    1
  ),
  (
    'Executive Office Chair',
    'Office',
    'Office',
    349.99,
    'Ergonomic office chair with lumbar support and swivel base',
    'https://images.unsplash.com/photo-1597070066623-6f8e22f06ce6?w=500&h=300',
    2
  ),
  (
    'Queen Bed Frame',
    'Bedroom',
    'Bedroom',
    449.99,
    'Sturdy wooden queen bed frame with storage',
    'https://images.unsplash.com/photo-1540932239986-310128078ceb?w=500&h=300',
    3
  ),
  (
    'Coffee Table',
    'Living Room',
    'Living Room',
    199.99,
    'Modern glass and wood coffee table with storage',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=300',
    4
  );
```

## 4️⃣ Sample Data (Locations)

```sql
INSERT INTO locations (branch_name, address, latitude, longitude, phone, email, opening_hours) VALUES
  (
    'Downtown Showroom',
    '123 Main Street, Downtown, City Center',
    40.7128,
    -74.0060,
    '+1 (555) 123-4567',
    'downtown@dafurnitureworld.com',
    'Monday - Saturday: 10:00 AM - 7:00 PM
Sunday: 12:00 PM - 6:00 PM
Holiday Hours May Vary'
  ),
  (
    'Shopping Mall Location',
    '456 Shopping Boulevard, Mall Complex, Floor 2',
    40.7580,
    -73.9855,
    '+1 (555) 234-5678',
    'mall@dafurnitureworld.com',
    'Monday - Sunday: 10:00 AM - 9:00 PM
Holiday Hours: 10:00 AM - 8:00 PM'
  ),
  (
    'Suburban Outlet',
    '789 Outlet Drive, Suburban Area, Tech Park',
    40.7489,
    -73.9680,
    '+1 (555) 345-6789',
    'outlet@dafurnitureworld.com',
    'Monday - Friday: 11:00 AM - 8:00 PM
Saturday: 10:00 AM - 8:00 PM
Sunday: 11:00 AM - 6:00 PM'
  );
```

## 5️⃣ Create Admin User

Go to **Supabase Dashboard** → **Authentication** → **Users** and click **"Invite"**

- **Email:** admin@furniture.com
- **Password:** Create a strong password (minimum 8 characters)
- **Auto confirm user:** ✅ Check this

## 📋 Verification Checklist

After running the SQL scripts:

- [ ] `products` table created with 5 columns
- [ ] `locations` table created with 8 columns
- [ ] RLS policies enabled on both tables
- [ ] Sample data inserted (5 products, 3 locations)
- [ ] Admin user created in Auth
- [ ] All indexes created for performance

## 🔑 Access Control Summary

| Action | Public Users | Admin Users |
|--------|--------------|-------------|
| View Products | ✅ Yes | ✅ Yes |
| View Locations | ✅ Yes | ✅ Yes |
| Add Product | ❌ No | ✅ Yes |
| Edit Product | ❌ No | ✅ Yes |
| Delete Product | ❌ No | ✅ Yes |
| Reorder Products | ❌ No | ✅ Yes |

---

**Need help?** Check Supabase docs: https://supabase.com/docs
