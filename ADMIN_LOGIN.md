# 🔐 Admin Login Credentials & Setup

## ✅ Current Admin User

Your Supabase database is already connected with the following credentials:

```
VITE_SUPABASE_URL=https://lnbgdomshvfvffvicpza.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_1vycCYMlT6g8F9NuuRbgtA_Fe0-iBkq
```

---

## 🔑 Default Admin Account

### Email: 
```
admin@dafurnitureworld.com
```

### Password:
```
You need to set this in Supabase
```

---

## 📝 How to Create/Change Admin Password

### Step 1: Go to Supabase Dashboard
1. Open: https://app.supabase.com
2. Select your project: `lnbgdomshvfvffvicpza`

### Step 2: Navigate to Authentication
1. Click **Authentication** in the left sidebar
2. Click **Users**
3. Look for user with email: `admin@dafurnitureworld.com`

### Step 3: Create or Reset Password

#### If user doesn't exist:
1. Click **"Invite user"**
2. Enter email: `admin@dafurnitureworld.com`
3. Password will be sent to email
4. Click **"Send invite"**

#### If user exists:
1. Click on the user
2. Click **"Reset password"**
3. Email will be sent with reset link

---

## 🚀 How to Login

1. **Open your website** and click **"Admin Login"** button in the header
   - URL: `http://localhost:5173/admin/login`

2. **Enter credentials:**
   - Email: `admin@dafurnitureworld.com`
   - Password: (your set password)

3. **Click "Login"**

4. **You'll be redirected to Admin Dashboard** where you can:
   - ➕ Add new products
   - 🗑️ Delete products
   - 📋 Drag-and-drop reorder products
   - 👤 See your email
   - 🚪 Logout

---

## 🎯 Admin Dashboard Features

Once logged in at `/admin/dashboard`, you have access to:

### 1. **Add Products**
- Click "Add New Product" button
- Fill in product details:
  - **Product Name** (required) - e.g., "Leather Sofa"
  - **Model** (required) - e.g., "Recliner"
  - **Category** (required) - e.g., "Living Room"
  - **Price** (optional) - e.g., 899.99
  - **Description** (optional) - product details
  - **Image URL** (optional) - link to product image

### 2. **Delete Products**
- Find product in list
- Click trash icon 🗑️
- Confirm deletion
- Product is removed instantly

### 3. **Reorder Products**
- Drag product by the grip handle (≡ icon)
- Drop in new position
- Order saves automatically

### 4. **View All Products**
- See complete list of all products
- Each product shows: name, model, category, price
- Count of total products displayed

---

## 🔐 Important Security Notes

### ✅ DO:
1. **Keep password secure** - Don't share with anyone
2. **Use strong passwords** - Minimum 8 characters, mix of letters/numbers
3. **Change password regularly** - Every 30-90 days
4. **Logout after use** - Click logout when done
5. **Protect Supabase credentials** - Don't share `.env` file

### ❌ DON'T:
1. **Share credentials** with non-admin users
2. **Commit `.env` to Git** - Add to `.gitignore`
3. **Use weak passwords** - e.g., "12345678", "admin", "password"
4. **Leave admin session open** - Always logout
5. **Post credentials online** - GitHub issues, forums, etc.

---

## 🔄 Password Recovery

If you forget your admin password:

1. Go to Admin Login: `http://localhost:5173/admin/login`
2. (Note: There's no "Forgot Password" link on the login page)
3. Instead, go to **Supabase Dashboard** → **Authentication** → **Users**
4. Click your admin user and select **"Reset password"**
5. Check email for reset link
6. Create new password and login

---

## 👥 Add More Admin Users

To add another admin account:

1. Go to **Supabase Dashboard** → **Authentication** → **Users**
2. Click **"Invite user"**
3. Enter email for new admin
4. They'll receive an invite email
5. They can set their password and login

---

## 📊 Current Database Tables

Your Supabase project has:

### **Products Table**
- All furniture products
- Fields: name, model, category, price, description, image_url, order_index
- Public read, admin edit/delete

### **Locations Table** (in Supabase only)
- Store branch information
- Used on Contact page
- Can be managed in Supabase directly

### **Auth Users**
- Admin authentication
- Currently has: `admin@dafurnitureworld.com`

---

## 🌐 Accessing Admin Dashboard

### URL:
```
http://localhost:5173/admin/dashboard
```

### Access Control:
- ❌ If NOT logged in → Redirects to login page
- ✅ If logged in → Shows dashboard
- 🚪 Click **Logout** to exit

---

## 🛠️ Troubleshooting Admin Issues

### "Invalid Credentials" Error
- ✓ Check email spelling: `admin@dafurnitureworld.com`
- ✓ Verify password is correct
- ✓ Check Caps Lock is OFF
- ✓ Try resetting password from Supabase

### "Supabase not configured" Error
- ✓ Check `.env` file exists
- ✓ Verify Supabase URL and key are correct
- ✓ Restart dev server: `npm run dev`

### Can't add products
- ✓ Ensure you're logged in
- ✓ Check browser console for errors
- ✓ Verify all required fields are filled
- ✓ Check Supabase connection

### Products not loading
- ✓ Check Supabase credentials in `.env`
- ✓ Verify database tables exist
- ✓ Check RLS policies are correct
- ✓ Look at browser Network tab for API errors

---

## 📱 Admin Panel Screenshots

### Login Page (`/admin/login`)
- Clean, centered login form
- Amber/brown color scheme
- Email and password fields
- "Login" button
- Info message about contacting admin

### Dashboard (`/admin/dashboard`)
- Header with admin email and logout button
- "Add New Product" button
- Product form (when expanded)
- List of all products with drag-drop
- Delete button for each product
- Success/error messages

---

## 🎨 Admin Theme Colors

The admin panel uses the same colors as the website:

- **Primary**: Amber/Brown (`from-amber-700 to-amber-900`)
- **Text**: Dark gray on light backgrounds
- **Buttons**: Amber gradient for actions
- **Accents**: Red for logout, delete actions
- **Backgrounds**: White and amber-50 gradient

This maintains visual consistency across your entire website.

---

## ✨ Next Steps

1. ✅ Set your admin password in Supabase
2. ✅ Login to admin dashboard
3. ✅ Add some test products
4. ✅ View them on the Products page
5. ✅ Test reordering and deletion
6. ✅ Explore all features

---

**Your admin account is ready!** 🎉

For questions, check `FEATURES.md` or `SETUP_GUIDE.md` in the project root.
