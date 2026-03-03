# 🛋️ DA Furniture World - Setup Guide

## 📋 New Features Added

### 1. **Products Page with Models**
- Display all furniture products in a grid layout
- Filter products by model (Recliner, Dining, Office, etc.)
- Filter products by category (Living Room, Bedroom, etc.)
- Add/remove/update products from admin dashboard
- Drag-and-drop reordering of products

### 2. **Admin Login & Dashboard**
- Secure admin authentication using Supabase
- Admin-only access to product management
- Add new products with details (name, model, category, price, description, image)
- Delete existing products
- Drag-and-drop product reordering
- Responsive admin interface

### 3. **Locations Page**
- Display all furniture store branches
- Embedded Google Maps for each location
- Location details: address, phone, email, opening hours
- Beautiful card layout with contact information
- Easy navigation and contact options

---

## 🚀 Quick Start Setup

### Step 1: Set Up Supabase

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your **Project URL** and **Anon Public Key**

### Step 2: Create Database Tables

In Supabase SQL Editor, run these queries:

#### Products Table
```sql
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

-- Enable RLS (Row Level Security)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read
CREATE POLICY "Allow public read" ON products
  FOR SELECT USING (true);

-- Admin insert/update/delete (requires authentication)
CREATE POLICY "Allow authenticated insert" ON products
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON products
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete" ON products
  FOR DELETE USING (auth.role() = 'authenticated');
```

#### Locations Table
```sql
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

-- Enable RLS
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public read
CREATE POLICY "Allow public read" ON locations
  FOR SELECT USING (true);

-- Admin insert/update/delete
CREATE POLICY "Allow authenticated insert" ON locations
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated update" ON locations
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated delete" ON locations
  FOR DELETE USING (auth.role() = 'authenticated');
```

### Step 3: Create Admin User

In Supabase Authentication, add a new user:
- Email: admin@furniture.com
- Password: (strong password of your choice)

### Step 4: Configure Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_GOOGLE_MAPS_API_KEY=optional_google_maps_key
```

### Step 5: Add Sample Data (Optional)

Go to Supabase Dashboard > Products table and add some products:

| Name | Model | Category | Price | Description |
|------|-------|----------|-------|-------------|
| Classic Leather Sofa | Recliner | Living Room | 899.99 | Comfortable leather reclining sofa |
| Modern Dining Table | Dining | Dining Room | 599.99 | Sleek contemporary dining table |
| Office Chair | Office | Office | 349.99 | Ergonomic office chair |

Add sample locations:

| Branch Name | Address | Phone | Email | Opening Hours |
|------------|---------|-------|-------|----------------|
| Downtown Store | 123 Main St | (555) 123-4567 | downtown@furniture.com | Mon-Sat: 10AM-6PM<br/>Sun: 12PM-5PM |
| Mall Location | 456 Shopping Blvd | (555) 234-5678 | mall@furniture.com | Mon-Sun: 10AM-8PM |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          (Updated with Locations & Admin links)
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── CustomCTA.tsx
│   └── WhyChooseUs.tsx
├── pages/
│   ├── Home.tsx
│   ├── Products.tsx        (Updated - displays products with filters)
│   ├── Locations.tsx       (New - stores with maps)
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── AdminLogin.tsx      (New - admin authentication)
│   └── AdminDashboard.tsx  (New - manage products)
├── contexts/
│   └── AuthContext.tsx     (New - handles admin authentication)
├── services/
│   └── api.ts              (New - Supabase API calls)
├── types/
│   └── index.ts            (New - TypeScript interfaces)
├── App.tsx                 (Updated - added routes)
└── main.tsx
```

---

## 🔐 Admin Access

### Login Page
- **URL:** `/admin/login`
- **Email:** admin@furniture.com
- **Password:** (your set password)

### Admin Dashboard
- **URL:** `/admin/dashboard` (automatically redirects if not authenticated)
- **Features:**
  - Add new products with drag-and-drop reordering
  - Delete products
  - View all products
  - Logout

---

## 🗺️ Maps Configuration

The Locations page uses embedded Google Maps. To enable custom maps:

1. Get a Google Maps API Key from [Google Cloud Console](https://console.cloud.google.com/)
2. Add to `.env`:
   ```
   VITE_GOOGLE_MAPS_API_KEY=your_api_key
   ```

The map will show each location at its coordinates if latitude/longitude are provided in the database.

---

## 🎨 Customization

### Change Colors
Colors are defined using Tailwind CSS classes. Main colors:
- **Primary:** `from-amber-700 to-amber-900` (brown/wood)
- **Secondary:** `from-blue-700 to-blue-900` (filters)
- **Accent:** `from-red-600 to-red-700` (admin)

### Add More Products
1. Go to Admin Dashboard
2. Click "Add New Product"
3. Fill in details and submit

### Add More Locations
Add directly to Supabase `locations` table with:
- `branch_name`
- `address`
- `phone`
- `email`
- `opening_hours`
- `latitude` & `longitude` (optional, for map)

---

## ⚠️ Security Notes

1. **Never commit `.env` file** - It contains sensitive keys
2. **Use strong admin passwords** - Protect your admin account
3. **Row Level Security (RLS)** - Already configured in Supabase
4. **Public Read, Authenticated Write** - Products/Locations are readable by all, but only admins can modify

---

## 🐛 Troubleshooting

### Products not showing?
- Check Supabase connection in `.env`
- Verify RLS policies are enabled
- Check browser console for errors

### Admin login fails?
- Confirm user exists in Supabase Auth
- Check email and password are correct
- Verify Supabase URL and key in `.env`

### Maps not displaying?
- Add Google Maps API key to `.env`
- Or use address-based embedding (already implemented)

---

## 📞 Support

For Supabase issues: https://supabase.com/docs
For React issues: https://react.dev/

Happy furniture shopping! 🛋️🏠
