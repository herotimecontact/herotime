# 🚀 SETUP CHECKLIST - HeroTime

Use this checklist to track your progress toward AdSense approval.

---

## ✅ STEP 1: BUILD ERRORS - COMPLETED ✅

- [x] Dev server running successfully on http://localhost:3000
- [x] No compilation errors
- [x] All pages load without errors
- [x] Next.js 16.1.1 (Turbopack) running

**Status:** ✅ **BLOCKER RESOLVED**

---

## 🔥 STEP 2: FIREBASE CONFIGURATION

### 2.1 Create Firebase Project
- [ ] Go to https://console.firebase.google.com/
- [ ] Create new project: "doomsday-countdown"
- [ ] Note your Project ID: _______________

### 2.2 Enable Firestore
- [ ] Navigate to Firestore Database
- [ ] Create database in test mode
- [ ] Select region: _______________
- [ ] Verify database is created

### 2.3 Get Firebase Credentials
- [ ] Go to Project Settings > General
- [ ] Scroll to "Your apps"
- [ ] Add Web app "</>", name: "HeroTime"
- [ ] Copy firebaseConfig values

### 2.4 Create .env.local File
- [ ] Copy `.env.local.template` to `.env.local`
- [ ] Replace all placeholder values with actual credentials
- [ ] Verify file is NOT committed to Git (it's in .gitignore)

### 2.5 Test Firebase Connection
```powershell
npm install  # Install dotenv if needed
npm run test:firebase
```
- [ ] Run test script
- [ ] Verify ✅ all checks pass
- [ ] Test fan form submission on localhost:3000

**Status:** ⏳ **PENDING** - Follow DEPLOYMENT_GUIDE.md section "BLOCKER #2"

---

## 🌐 STEP 3: DEPLOYMENT TO PRODUCTION

### 3.1 Prepare Code Repository
```powershell
cd "c:\Work\UI Platform\Mark 81D\mark-81d-app"
git init
git add .
git commit -m "Initial commit - HeroTime ready for deployment"
```
- [ ] Initialize Git repository
- [ ] Commit all files
- [ ] Verify .env.local is NOT in commit (check .gitignore)

### 3.2 Push to GitHub
- [ ] Create GitHub account (if needed): https://github.com/signup
- [ ] Create new repository: https://github.com/new
  - Name: `HeroTime-app`
  - Visibility: Public or Private
- [ ] Push code to GitHub:
```powershell
git remote add origin https://github.com/YOUR_USERNAME/HeroTime-app.git
git branch -M main
git push -u origin main
```

### 3.3 Deploy to Vercel
- [ ] Create Vercel account: https://vercel.com/signup
- [ ] Connect GitHub account
- [ ] Import repository: `HeroTime-app`
- [ ] Configure settings:
  - [x] Framework: Next.js (auto-detected)
  - [x] Build Command: `npm run build`
  - [x] Output Directory: `.next`

### 3.4 Add Environment Variables to Vercel
In Vercel dashboard > Settings > Environment Variables, add:
- [ ] `NEXT_PUBLIC_FIREBASE_API_KEY`
- [ ] `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- [ ] `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- [ ] `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- [ ] `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- [ ] `NEXT_PUBLIC_FIREBASE_APP_ID`

- [ ] Click "Deploy"
- [ ] Wait for deployment to complete (~3 minutes)
- [ ] Test deployment URL: https://_____________________.vercel.app

### 3.5 Verify HTTPS
- [ ] Visit your Vercel deployment URL
- [ ] Verify 🔒 HTTPS in browser address bar
- [ ] Test all pages load correctly
- [ ] Test fan form submission
- [ ] Check Firebase Console for new fan entries

**Status:** ⏳ **PENDING** - Follow DEPLOYMENT_GUIDE.md section "BLOCKER #3"

---

## 🌍 STEP 4: CUSTOM DOMAIN (Optional but Recommended)

### Option A: Buy Domain through Vercel (Easiest)
- [ ] In Vercel dashboard: Settings > Domains
- [ ] Click "Buy domain"
- [ ] Search for domain: HeroTime.com (or alternative)
- [ ] Purchase domain ($15-20/year)
- [ ] Vercel auto-configures DNS and SSL
- [ ] Test domain: https://HeroTime.com

### Option B: Use Existing Domain
- [ ] Buy domain from Namecheap, GoDaddy, etc.
- [ ] Domain purchased: _______________________
- [ ] In Vercel: Add domain in Settings > Domains
- [ ] Update DNS records in domain registrar:
  - [ ] A record: `76.76.21.21`
  - [ ] CNAME record: `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (5-30 minutes)
- [ ] Verify SSL certificate issued automatically

**Status:** ⏳ **OPTIONAL** - Recommended for AdSense

---

## 📝 STEP 5: CONTENT & SEO PREPARATION

### 5.1 Create Required Images
- [ ] Create OG image: `/public/og-image.png` (1200x630px)
  - No copyrighted content
  - Use website theme colors
  - Include "HeroTime" text
- [ ] Create favicon: `/public/favicon.ico`
- [ ] Create PWA icons: `/public/icon-192.png` and `/public/icon-512.png`

### 5.2 Update Metadata
- [ ] Update `app/layout.js`:
  - [ ] Replace `HeroTime.com` with actual domain
  - [ ] Update Twitter handle: `@HeroTime` with real handle
- [ ] Verify all meta descriptions are under 160 characters
- [ ] Check all page titles are unique

### 5.3 Google Search Console
- [ ] Go to https://search.google.com/search-console
- [ ] Add property: Your domain
- [ ] Verify ownership (automatic with Vercel)
- [ ] Submit sitemap.xml (Vercel auto-generates)
- [ ] Wait 24-48 hours for indexing

### 5.4 Test All Pages
Test on production domain:
- [ ] Home page: https://yourdomain.com/
- [ ] Fans page: https://yourdomain.com/fans
- [ ] About page: https://yourdomain.com/about
- [ ] Privacy page: https://yourdomain.com/privacy
- [ ] Contact page: https://yourdomain.com/contact

Test functionality:
- [ ] Countdown timer works
- [ ] Fan form submits successfully
- [ ] Fan wall displays correctly
- [ ] World map renders
- [ ] Poll voting works
- [ ] Mobile responsive on real device

**Status:** ⏳ **PENDING**

---

## 📊 STEP 6: WAIT FOR DOMAIN AGE

- [ ] Domain active date: _______________
- [ ] Wait 1-2 weeks for domain to "age"
- [ ] Generate some organic traffic (share with friends, social media)
- [ ] Verify site indexed in Google: `site:yourdomain.com`

**Recommended Wait Time:** 7-14 days

**Status:** ⏳ **WAITING**

---

## 💰 STEP 7: APPLY FOR GOOGLE ADSENSE

### Pre-Application Checklist
- [ ] Site live on custom domain with HTTPS
- [ ] Domain at least 1-2 weeks old
- [ ] All required pages present (About, Privacy, Contact)
- [ ] Privacy Policy mentions AdSense and cookies
- [ ] Site has original content (500+ words)
- [ ] No copyrighted images
- [ ] Site indexed in Google Search
- [ ] Mobile responsive
- [ ] No broken links

### Application Process
1. [ ] Go to https://www.google.com/adsense/start/
2. [ ] Enter your website URL
3. [ ] Complete application form
4. [ ] Add AdSense code to `<head>` (in `app/layout.js`)
5. [ ] Submit for review
6. [ ] Wait 1-3 weeks for approval

### After Approval
- [ ] Replace `ca-pub-XXXXXXXXXXXXXXXX` with real publisher ID
- [ ] Create ad units in AdSense dashboard
- [ ] Update `data-ad-slot` values in AdSlot component
- [ ] Remove placeholder content from AdSlot
- [ ] Test ads display correctly
- [ ] Monitor AdSense dashboard

**Status:** ⏳ **NOT READY** - Complete steps 1-6 first

---

## 🎯 PROGRESS SUMMARY

| Step | Status | Priority |
|------|--------|----------|
| 1. Build Errors | ✅ DONE | Critical |
| 2. Firebase Config | ⏳ Pending | Critical |
| 3. Deployment | ⏳ Pending | Critical |
| 4. Custom Domain | ⏳ Optional | High |
| 5. Content/SEO | ⏳ Pending | High |
| 6. Domain Age | ⏳ Waiting | Medium |
| 7. AdSense Apply | ⏳ Future | Final |

---

## 🆘 NEED HELP?

### Quick Reference
- **Firebase Setup:** See `FIREBASE_SETUP.md`
- **Deployment:** See `DEPLOYMENT_GUIDE.md`
- **AdSense:** See `ADSENSE_AND_SEO_GUIDE.md`

### Test Commands
```powershell
# Test Firebase connection
npm run test:firebase

# Test local build
npm run build
npm start

# Deploy to Vercel
npm run deploy
```

### Common Issues
1. **Port 3000 in use:**
   ```powershell
   Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
   ```

2. **Firebase permission denied:**
   - Check Firestore rules are in test mode
   - Verify .env.local has correct credentials

3. **Build fails on Vercel:**
   - Ensure environment variables added
   - Test `npm run build` locally first

---

**Estimated Time to Complete:**
- Steps 1-3: ~1 hour
- Step 4: ~30 minutes
- Step 5: ~2 hours
- Step 6: 7-14 days
- Step 7: 1-3 weeks

**Total Active Time:** ~4 hours + waiting periods

---

**Last Updated:** January 1, 2026  
**Next Milestone:** Complete Firebase configuration and deploy to Vercel

**YOU'RE ALMOST THERE! 🚀**
