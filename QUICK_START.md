# 🚀 Quick Start Guide

## ⚡ 5 Minutes to Go Live

### Step 1: Verify `.env` File (Already Set)
Your `.env` file is already configured with Supabase credentials:
```env
VITE_SUPABASE_URL=https://lnbgdomshvfvffvicpza.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_1vycCYMlT6g8F9NuuRbgtA_Fe0-iBkq
```
✅ No changes needed!

---

### Step 2: Set Admin Password (1 minute)

1. Open Supabase: https://app.supabase.com
2. Select project: `lnbgdomshvfvffvicpza`
3. Click **Authentication** → **Users**
4. Find `admin@dafurnitureworld.com`
5. Click user → **Reset password**
6. Check email for reset link
7. Create your admin password (write it down!)

---

### Step 3: Install & Run (1 minute)

```bash
# Terminal in project folder:
npm install

npm run dev
```

Your website opens at: **http://localhost:5173**

---

### Step 4: Access Admin Panel (1 minute)

1. Click **"Admin Login"** in header
2. Or go to: http://localhost:5173/admin/login
3. Enter credentials:
   - Email: `admin@dafurnitureworld.com`
   - Password: (the one you just set)
4. Click **Login**

---

### Step 5: Add Your First Product (2 minutes)

On Admin Dashboard:
1. Click **"Add New Product"** button
2. Fill in:
   - **Name**: e.g., "Wooden Sofa"
   - **Model**: e.g., "Recliner"
   - **Category**: e.g., "Living Room"
   - **Price**: e.g., 899.99
   - **Description**: Optional
   - **Image URL**: Optional
3. Click **"Add Product"**
4. ✅ Product appears on `/products` page!

---

## 🎯 Key URLs

| Page | URL |
|------|-----|
| Home | http://localhost:5173 |
| About Us | http://localhost:5173/about |
| Products | http://localhost:5173/products |
| Contact & Locations | http://localhost:5173/contact |
| Admin Login | http://localhost:5173/admin/login |
| Admin Dashboard | http://localhost:5173/admin/dashboard |

---

## 📋 Navigation Structure

```
Home
├─ About Us
├─ Products
│  ├─ Filter by Model
│  ├─ Filter by Category
│  └─ Add/Edit Products (admin only)
└─ Contact & Locations
   ├─ 3 Branch Locations
   ├─ Google Maps for Each
   └─ Contact Details
```

---

## 🎨 Theme Colors (All Pages)

- **Primary**: Warm Amber/Brown
- **Background**: White with subtle amber gradient
- **Text**: Dark gray on light, white on dark
- **Buttons**: Amber gradient with darker hover
- **Admin**: Red for login/delete actions

**All pages match this consistent theme!**

---

## 📁 Files Changed/Created

### New Files
- ✅ `src/contexts/AuthContext.tsx` - Authentication
- ✅ `src/services/api.ts` - Supabase API
- ✅ `src/types/index.ts` - TypeScript types
- ✅ `src/pages/AdminLogin.tsx` - Admin login page
- ✅ `src/pages/AdminDashboard.tsx` - Admin dashboard
- ✅ `src/pages/Locations.tsx` - (Removed, merged into Contact)

### Updated Files
- ✅ `src/App.tsx` - Routes and providers
- ✅ `src/components/Header.tsx` - Navigation order
- ✅ `src/pages/Contact.tsx` - Multi-location support
- ✅ `src/pages/About.tsx` - Theme consistency

### Documentation
- ✅ `ADMIN_LOGIN.md` - Admin setup guide
- ✅ `DESIGN_SYSTEM.md` - Theme & color guide
- ✅ `PROJECT_SUMMARY.md` - Complete overview
- ✅ `SETUP_GUIDE.md` - Full setup
- ✅ `DATABASE_SETUP.md` - SQL scripts
- ✅ `ENV_SETUP.md` - Environment variables
- ✅ `FEATURES.md` - Feature overview

---

## ✅ What You Get

### For Customers
- 📱 Responsive website (mobile, tablet, desktop)
- 🛋️ Beautiful product showcase
- 📍 All 3 store locations with maps
- 📞 Easy contact information
- 🎨 Professional premium furniture brand look

### For Admin
- 🔐 Secure login
- ➕ Add products anytime
- 🗑️ Delete products
- 📋 Drag-and-drop reordering
- 👤 Admin-only access

---

## 🔒 Admin Credentials

```
Email:    admin@dafurnitureworld.com
Password: (You set this in Supabase)
```

**Don't forget to write down your password!**

---

## 🐛 Troubleshooting

### Can't login?
- ✓ Check email is: `admin@dafurnitureworld.com`
- ✓ Verify password (check caps lock)
- ✓ Reset password from Supabase if needed

### Products not showing?
- ✓ Make sure you added products in admin
- ✓ Check browser console for errors
- ✓ Restart: `npm run dev`

### Maps not showing?
- ✓ Maps work automatically
- ✓ No API key needed (already embedded)
- ✓ Check internet connection

### Styling looks wrong?
- ✓ Clear browser cache: Ctrl+Shift+Delete
- ✓ Restart dev server: `npm run dev`
- ✓ Close and reopen browser tab

---

## 📊 Quick Admin Tasks

### Add Product
1. Login to admin dashboard
2. Click "Add New Product"
3. Fill in details
4. Click "Add Product"

### Delete Product
1. Find product in list
2. Click trash icon 🗑️
3. Confirm deletion

### Reorder Products
1. Drag product by grip handle (≡)
2. Drop in new position
3. Auto-saves to database

### Logout
1. Click "Logout" button in top right
2. Redirects to login page

---

## 🎯 Next Steps

1. ✅ Set admin password (2 min)
2. ✅ Run `npm run dev` (1 min)
3. ✅ Login to admin dashboard (1 min)
4. ✅ Add 5 test products (5 min)
5. ✅ Check website on `/products` page
6. ✅ Visit `/contact` to see all 3 locations
7. ✅ Test on mobile (responsive design)
8. ✅ Deploy when ready!

---

## 📞 Support

**Documentation Files to Read:**

1. **Start here**: `PROJECT_SUMMARY.md`
2. **Admin setup**: `ADMIN_LOGIN.md`
3. **Theme guide**: `DESIGN_SYSTEM.md`
4. **Full setup**: `SETUP_GUIDE.md`

---

## 🎉 You're Ready!

Your professional furniture website is ready to use.

**All pages have matching theme and colors.**
**Admin system is fully functional.**
**Multi-location support with maps is working.**

**Go to http://localhost:5173 and explore!** 🚀

---

*Last updated: March 1, 2026*
