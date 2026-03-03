# ⚡ Quick Start Checklist

Complete these steps in order to get your furniture website fully operational.

---

## 🎯 Phase 1: Setup (30 minutes)

### Step 1: Supabase Setup
- [ ] Create Supabase account at [supabase.com](https://supabase.com)
- [ ] Create new project (select region near you)
- [ ] Wait for project to be created (2-3 minutes)
- [ ] Go to Settings → API
- [ ] Copy **Project URL**
- [ ] Copy **Anon Public Key**

### Step 2: Database Configuration
- [ ] Open Supabase → SQL Editor
- [ ] Copy SQL from `DATABASE_SETUP.md`
- [ ] Run Products table script
- [ ] Run Locations table script
- [ ] Check tables created in "Tables" section
- [ ] (Optional) Add sample data from DATABASE_SETUP.md

### Step 3: Admin User Creation
- [ ] Go to Supabase → Authentication
- [ ] Click "Invite"
- [ ] Email: `admin@furniture.com`
- [ ] Create strong password
- [ ] Check "Auto confirm user"
- [ ] Click "Send invitation"

### Step 4: Environment Setup
- [ ] Create `.env` file in project root
- [ ] Copy from `.env.example`
- [ ] Paste Supabase URL
- [ ] Paste Supabase Anon Key
- [ ] (Optional) Add Google Maps API key
- [ ] Save file

### Step 5: Verify Setup
- [ ] Run `npm run dev`
- [ ] Open http://localhost:5173/
- [ ] Check no console errors
- [ ] Page should load normally

---

## 🛋️ Phase 2: Add Products (10 minutes)

### Option A: Via Admin Dashboard (Recommended)
- [ ] Go to http://localhost:5173/admin/login
- [ ] Email: `admin@furniture.com`
- [ ] Password: (the one you created)
- [ ] Click "Add New Product"
- [ ] Fill in product details:
  - [ ] Product Name (e.g., "Leather Sofa")
  - [ ] Model (e.g., "Recliner")
  - [ ] Category (e.g., "Living Room")
  - [ ] Price (e.g., "899.99")
  - [ ] Description (optional)
  - [ ] Image URL (optional)
- [ ] Click "Add Product"
- [ ] Repeat for 3-5 products
- [ ] Go to http://localhost:5173/products
- [ ] Verify products show up

### Option B: Via Supabase Dashboard
- [ ] Go to Supabase → Tables → products
- [ ] Click "Insert Row"
- [ ] Fill in product data
- [ ] Click "Save"
- [ ] Repeat for 3-5 products

---

## 📍 Phase 3: Add Locations (10 minutes)

### Setup via Supabase Dashboard
- [ ] Go to Supabase → Tables → locations
- [ ] Click "Insert Row"
- [ ] Fill in location details:
  - [ ] Branch Name (e.g., "Downtown Store")
  - [ ] Address (full street address)
  - [ ] Phone (e.g., "+1 (555) 123-4567")
  - [ ] Email (e.g., "downtown@furniture.com")
  - [ ] Opening Hours (format: "Mon-Sat: 10AM-6PM...")
  - [ ] Latitude (optional, for better maps)
  - [ ] Longitude (optional, for better maps)
- [ ] Click "Save"
- [ ] Add 2-3 locations minimum
- [ ] Go to http://localhost:5173/locations
- [ ] Verify locations and maps display

---

## ✅ Phase 4: Testing (15 minutes)

### Frontend Testing
- [ ] Test all navigation links in header
- [ ] Check mobile menu works
- [ ] Products page loads without errors
- [ ] Product filters work (by model and category)
- [ ] Locations page displays all branches
- [ ] Maps show correctly for each location
- [ ] Contact information is clickable (tel:, mailto:)

### Admin Testing
- [ ] Login works with correct credentials
- [ ] Wrong credentials show error
- [ ] Add product works
- [ ] Product appears in list immediately
- [ ] Delete product works
- [ ] Drag-drop reordering works
- [ ] Logout redirects to login page

### Data Testing
- [ ] Products on admin page match products page
- [ ] All product filters work correctly
- [ ] All locations display with proper info
- [ ] Maps embed without errors

---

## 🚀 Phase 5: Going Live (5 minutes)

### Pre-Launch Checks
- [ ] All products added and properly categorized
- [ ] All locations added with complete information
- [ ] Admin password is strong and secure
- [ ] `.env` file is in `.gitignore`
- [ ] No console errors
- [ ] Responsive design tested on mobile

### Deployment (Choose one)
- [ ] **Vercel:** `npm run build` then deploy
- [ ] **Netlify:** Connect GitHub repo and auto-deploy
- [ ] **Other:** Build with `npm run build`

### Post-Launch
- [ ] Test site on live domain
- [ ] Verify admin login still works
- [ ] Check products and locations display
- [ ] Monitor browser console for errors
- [ ] Test on mobile devices
- [ ] Share with team/clients

---

## 📊 Quick Reference

### Important URLs
| Page | URL | Access |
|------|-----|--------|
| Home | `/` | Public |
| Products | `/products` | Public |
| Locations | `/locations` | Public |
| Admin Login | `/admin/login` | Public |
| Admin Dashboard | `/admin/dashboard` | Admin Only |
| About | `/about` | Public |
| Contact | `/contact` | Public |

### Default Credentials
```
Email: admin@furniture.com
Password: (your chosen password)
```

### File Locations
| File | Purpose |
|------|---------|
| `.env` | Environment variables |
| `src/pages/Products.tsx` | Products page |
| `src/pages/Locations.tsx` | Locations page |
| `src/pages/AdminLogin.tsx` | Admin login |
| `src/pages/AdminDashboard.tsx` | Admin dashboard |
| `src/services/api.ts` | Database API calls |
| `SETUP_GUIDE.md` | Detailed setup guide |
| `DATABASE_SETUP.md` | Database SQL scripts |
| `FEATURES.md` | Feature documentation |

---

## 🆘 Common Issues & Solutions

### Issue: "Cannot find module '@supabase/supabase-js'"
**Solution:** Run `npm install`

### Issue: Products not loading
**Solution:**
1. Check `.env` file has correct Supabase URL and key
2. Verify products table exists in Supabase
3. Check browser console for error messages
4. Restart dev server: `npm run dev`

### Issue: Admin login fails
**Solution:**
1. Verify admin user exists in Supabase Auth
2. Check email is `admin@furniture.com`
3. Verify `.env` has correct Supabase credentials
4. Try password reset in Supabase dashboard

### Issue: Maps not showing
**Solution:**
1. Optional feature - works without Google Maps API key
2. Check internet connection
3. Verify addresses are in locations table
4. Check browser console for errors

### Issue: ".env file not loading"
**Solution:**
1. Restart dev server with `npm run dev`
2. Use `VITE_` prefix for all variables
3. Make sure `.env` is in project root
4. File should be named exactly `.env`

---

## 📞 Need Help?

### Documentation Files
- `SETUP_GUIDE.md` - Comprehensive setup guide
- `DATABASE_SETUP.md` - Database configuration
- `FEATURES.md` - Feature documentation
- `ENV_SETUP.md` - Environment variables guide
- `QUICKSTART.md` - This file

### External Resources
- Supabase Docs: https://supabase.com/docs
- React Docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Vite Guide: https://vitejs.dev/guide/

---

## ✨ Next Steps After Setup

1. **Customize Branding**
   - Change company name in Header
   - Update logo/favicon
   - Customize colors (edit Tailwind classes)

2. **Add More Content**
   - Fill in About page details
   - Add contact form handling
   - Add testimonials/reviews

3. **Enhance Features**
   - Add shopping cart functionality
   - Implement checkout system
   - Add product reviews
   - Enable product search

4. **Marketing**
   - Set up analytics
   - Create social media links
   - Add email newsletter signup
   - Implement SEO optimizations

---

## 🎉 You're All Set!

Your DA Furniture World website is now operational with:
- ✅ Product catalog with filtering
- ✅ Admin management system
- ✅ Store location finder with maps
- ✅ Beautiful responsive design

**Happy furniture selling!** 🛋️🏠

---

**Last Updated:** March 1, 2026
**Version:** 1.0
