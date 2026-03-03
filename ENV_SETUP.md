# 🔧 Environment Configuration Guide

## .env File Setup

Create a `.env` file in your project root directory (same level as `package.json`).

### Required Variables

Copy and paste this template, then fill in your actual values:

```env
# Supabase Configuration (REQUIRED)
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Google Maps Configuration (OPTIONAL)
VITE_GOOGLE_MAPS_API_KEY=AIzaSyA0pR0M5ZJSw1234567890...
```

---

## 📝 Step-by-Step Configuration

### 1. Get Supabase Credentials

#### Step 1a: Create/Open Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign in or create account
3. Create a new project or open existing one

#### Step 1b: Find Your Credentials
In your Supabase Dashboard:
1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** → paste as `VITE_SUPABASE_URL`
   - **Anon Public Key** → paste as `VITE_SUPABASE_ANON_KEY`

Example:
```env
VITE_SUPABASE_URL=https://xyzabc123.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emFiYzEyMyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjk5MDAwMDAwLCJleHAiOjE3MzExNDAwMDB9.abc123def456...
```

### 2. (Optional) Get Google Maps API Key

#### Step 2a: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable these APIs:
   - Maps Embed API
   - Maps JavaScript API

#### Step 2b: Create API Key
1. Go to **Credentials**
2. Click **Create Credentials** → **API Key**
3. Copy the key → paste as `VITE_GOOGLE_MAPS_API_KEY`

Example:
```env
VITE_GOOGLE_MAPS_API_KEY=AIzaSyA0pR0M5ZJSw1234567890abcdefghijk
```

#### Step 2c: Restrict Key (Security Best Practice)
1. Click on your created key
2. Go to **Application restrictions**
3. Select **Websites**
4. Add your domain(s)
5. Go to **API restrictions**
6. Select **Restrict key**
7. Check **Maps Embed API** and **Maps JavaScript API**

---

## 📋 Complete Example .env File

Here's a complete example with all variables:

```env
# ===== SUPABASE (REQUIRED) =====
# Get from: Supabase Dashboard → Settings → API
VITE_SUPABASE_URL=https://xyzabc123.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emFiYzEyMyIsInJvbGUiOiJhbm9uIn0.abc123def456ghi789...

# ===== GOOGLE MAPS (OPTIONAL) =====
# Get from: Google Cloud Console → Credentials
# Only needed for advanced map features
VITE_GOOGLE_MAPS_API_KEY=AIzaSyA0pR0M5ZJSw1234567890abcdefghijk
```

---

## ✅ Verification Checklist

After setting up `.env`:

- [ ] File is named exactly `.env` (no spaces, no extension)
- [ ] File is in project root directory
- [ ] `VITE_SUPABASE_URL` is set and starts with `https://`
- [ ] `VITE_SUPABASE_ANON_KEY` is set (long string)
- [ ] `.env` is added to `.gitignore` (don't commit!)
- [ ] Run `npm run dev` without errors

### Quick Test:
```bash
# In terminal, run:
npm run dev

# Check browser console for errors
# Admin page should load without connection errors
```

---

## 🔒 Security Guidelines

### ✅ DO:
- ✅ Keep `.env` file private (add to `.gitignore`)
- ✅ Use strong passwords for admin account
- ✅ Enable RLS (Row Level Security) in Supabase
- ✅ Restrict Google Maps API key to your domain
- ✅ Regularly rotate admin passwords

### ❌ DON'T:
- ❌ Share `.env` file publicly
- ❌ Commit `.env` to Git
- ❌ Post keys in GitHub issues
- ❌ Use weak admin passwords
- ❌ Use unrestricted API keys

### If Keys Are Compromised:
1. Go to Supabase Dashboard
2. Regenerate Anon Public Key
3. Update `.env` file
4. Restart development server
5. For Google Maps: Disable old key in Cloud Console

---

## 🚀 Running the App

### With Proper Configuration:
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Troubleshooting:

#### "Supabase environment variables not configured"
- Check `.env` file exists
- Verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` are set
- Restart development server: `npm run dev`

#### Products don't load
- Check Supabase credentials are correct
- Verify database tables are created (see DATABASE_SETUP.md)
- Check browser console for error messages

#### Maps not showing
- Google Maps API key is optional
- Remove `VITE_GOOGLE_MAPS_API_KEY` if causing issues
- Maps will still work with address-based embedding

---

## 📚 Variable Reference

| Variable | Purpose | Required | Example |
|----------|---------|----------|---------|
| `VITE_SUPABASE_URL` | Supabase project URL | ✅ Yes | `https://abc123.supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | Supabase public key | ✅ Yes | `eyJ...very long string...` |
| `VITE_GOOGLE_MAPS_API_KEY` | Google Maps API | ❌ No | `AIzaSy...` |

---

## 🔗 Useful Links

- **Supabase API Settings:** https://app.supabase.com/project/_/settings/api
- **Google Cloud Console:** https://console.cloud.google.com
- **Environment Variables (Vite):** https://vitejs.dev/guide/env-and-mode.html
- **Supabase Docs:** https://supabase.com/docs

---

## 💡 Pro Tips

1. **Keep a backup:** Save your credentials in a secure password manager
2. **Use environment-specific keys:** Consider different keys for dev/staging/production
3. **Monitor usage:** Check Supabase dashboard for API usage and costs
4. **Test admin login:** After setup, test `/admin/login` to verify credentials work

---

## ❓ FAQ

**Q: Can I use the same key for multiple projects?**
A: No, each Supabase project has unique credentials.

**Q: What if I lose my admin password?**
A: You can reset it in Supabase Auth → Users → Edit user

**Q: Do I need Google Maps API key?**
A: Optional. Maps will work with address-based embedding without it.

**Q: Is it safe to share Anon Key?**
A: Yes, the Anon Key is meant to be public. The important secret is the database passwords managed by RLS policies.

---

**Configuration Complete!** 🎉 Your app is ready to run.
