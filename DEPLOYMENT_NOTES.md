# DA Furniture World - Deployment & Client Setup Guide

## 🌐 Live Site
**URL:** https://da-furnitures.vercel.app (or your custom domain)

---

## ⚠️ Important: VPN Requirement for Indian ISPs

### **Why VPN is Needed:**
Your ISP (likely in India) blocks direct connections to Supabase servers. This is a common ISP restriction, not a website issue.

### **For Client/Users:**
When accessing the admin dashboard (login), users need to:

1. **Enable VPN** (any VPN service)
   - Popular options: 
     - ExpressVPN
     - NordVPN
     - Windscribe (Free)
     - ProtonVPN (Free)
   
2. **Then access:** https://da-furnitures.vercel.app/admin/login
3. **Login with:**
   - Email: `admin@dafurnitureworld.com`
   - Password: (the password you set during setup)

4. **After VPN is enabled**, all features work normally:
   - ✅ Add/edit/delete products
   - ✅ Manage categories and models
   - ✅ View and manage orders

---

## 🔐 Security Notes

### **Sensitive Information (Already Secured):**
- ✅ `.env` file is NOT pushed to GitHub (in `.gitignore`)
- ✅ Vercel environment variables are encrypted
- ✅ Supabase keys use Row-Level Security (RLS)
- ✅ Admin login is protected

### **What NOT to do:**
- ❌ Never share Supabase anon key publicly
- ❌ Never commit `.env` file to GitHub
- ❌ Never use production keys in development

---

## 📝 Admin Credentials

```
Email: admin@dafurnitureworld.com
Password: (Set during initial setup)
```

**Note:** Keep these credentials safe!

---

## 🚀 Future Improvements (Optional)

If ISP blocking becomes a major issue, we can:

1. **Setup Supabase Edge Functions** - Proxy requests through Vercel (backend solution)
2. **Use alternative auth** - Firebase Authentication
3. **Migrate to different database** - MongoDB with custom backend
4. **Setup VPN at server level** - Always-on VPN for the business

---

## 🛠️ Troubleshooting

### **Problem: Can't login without VPN**
**Solution:** Enable VPN and try again

### **Problem: Products not showing**
**Solution:** 
1. Check VPN is enabled
2. Refresh page (Ctrl+R or Cmd+R)
3. Check browser console for errors (F12)

### **Problem: Images not loading**
**Solution:** This might also need VPN if ISP blocks image URLs
- Switch VPN location if one location doesn't work

### **Problem: Slow loading**
**Solution:** 
1. Check your internet speed
2. Try a different VPN server location
3. Clear browser cache (Ctrl+Shift+Delete)

---

## 📊 Product Management

### **To Add Products (Admin Only):**
1. Login to `/admin/dashboard` (with VPN)
2. Enter product details:
   - Name, Category, Model
   - Base Price, Customization Price
   - Description, Image URL
3. Click "Add Product"
4. Drag to reorder (if needed)

### **Pre-added Products:**
10 sample furniture items are available to showcase

---

## 🌐 Browser Compatibility

✅ Works on:
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

---

## 📱 Mobile Responsive

All pages are fully responsive:
- ✅ Mobile phones
- ✅ Tablets
- ✅ Desktops

### **Special Mobile Features:**
- **Products Page:** Pinch to zoom, drag to pan product images
- **Responsive Grid:** Adapts to screen size
- **Touch Optimized:** All buttons are touch-friendly

---

## 🎨 Pages & Features

### **Public Pages (No VPN Needed):**
1. **Home** - Hero, highlights, CTA
2. **About** - Company story, values
3. **Products** - Product grid with filters, zoom modal
4. **Contact** - Contact info, locations with maps

### **Admin Pages (VPN Needed):**
1. **Admin Login** - Email/password authentication
2. **Admin Dashboard** - Product management CRUD

---

## 🔄 Deployment Process

### **When Code Changes:**
1. Changes pushed to GitHub
2. Vercel automatically detects and builds
3. Site updated in 2-3 minutes
4. No manual intervention needed

### **To Update Manually:**
```bash
git push origin main
```
Vercel will auto-deploy!

---

## 📞 Support

For issues or questions:
1. Check this guide first
2. Enable VPN and retry
3. Check browser console (F12)
4. Clear cache and refresh
5. Contact development team if persists

---

## ✅ Checklist for Going Live

- [x] Site deployed to Vercel
- [x] Admin login working (with VPN)
- [x] Products can be added/edited/deleted
- [x] All pages responsive
- [x] Images loading correctly (with VPN)
- [x] Contact information displayed
- [x] Locations with maps showing
- [x] Product zoom/pan working on mobile

---

**Last Updated:** March 3, 2026
**Deployment Status:** ✅ LIVE

