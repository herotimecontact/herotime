# HeroTime - Google AdSense & SEO Setup

## Google AdSense Integration

### Setup Steps:
1. **Apply for Google AdSense** at https://www.google.com/adsense/
2. **Get your Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
3. **Update AdSense script** in `app/layout.js`:
   - Uncomment the script tag in the `<head>` section
   - Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual publisher ID

4. **Update Ad Slots** in `app/components/AdSlot.js`:
   - Replace `data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"` with your publisher ID
   - Create ad units in AdSense dashboard and update `data-ad-slot` values

5. **Initialize AdSense** (add to `app/layout.js` after AdSense approval):
   ```javascript
   useEffect(() => {
     try {
       (window.adsbygoogle = window.adsbygoogle || []).push({});
     } catch (err) {
       console.error('AdSense error:', err);
     }
   }, []);
   ```

### Current Ad Placements:
- **Hero Bottom Ad**: Below countdown section (horizontal banner)
- **Page Bottom Ad**: Near footer (rectangle/square)

### Ad Unit Recommendations:
- Hero Bottom: 728x90 Leaderboard (Desktop) / 320x50 Mobile Banner
- Page Bottom: 300x250 Medium Rectangle (works on all devices)

---

## SEO Optimization

### Completed:
✅ Comprehensive meta tags with HeroTime branding
✅ OpenGraph tags for social media sharing
✅ Twitter Card meta tags
✅ Structured H1/H2 hierarchy (H1: Avengers: Doomsday, H2: sections)
✅ Descriptive content about the countdown and community
✅ Keywords: HeroTime, Avengers Doomsday, December 18 2026, fan community
✅ Mobile-responsive viewport settings
✅ Theme color for mobile browsers (#4ade80)

### Next Steps:

1. **Create OpenGraph Image**:
   - Create `public/og-image.png` (1200x630px)
   - Include HeroTime branding and Avengers: Doomsday countdown theme
   - Update image path in `app/layout.js` metadata

2. **Add Structured Data** (JSON-LD):
   ```javascript
   // Add to layout.js <head>
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "WebSite",
     "name": "HeroTime - Avengers: Doomsday Countdown",
     "url": "https://mark81d.com",
     "description": "Global fan countdown to December 18, 2026"
   }
   </script>
   ```

3. **robots.txt** (create in `public/robots.txt`):
   ```
   User-agent: *
   Allow: /
   Sitemap: https://mark81d.com/sitemap.xml
   ```

4. **Generate Sitemap** (`public/sitemap.xml`):
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://mark81d.com/</loc>
       <lastmod>2025-01-01</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```

5. **Google Search Console**:
   - Submit your site at https://search.google.com/search-console
   - Submit sitemap
   - Monitor indexing and performance

6. **Performance Optimization**:
   - Enable Next.js Image optimization for og-image
   - Add loading="lazy" to non-critical images
   - Consider adding a service worker for offline support

7. **Analytics**:
   - Integrate Google Analytics 4 to track visitor engagement
   - Monitor countdown interaction and form submissions

---

## Testing Before Launch:

### SEO Testing:
- [ ] Test OpenGraph preview: https://www.opengraph.xyz/
- [ ] Test Twitter Card: https://cards-dev.twitter.com/validator
- [ ] Check mobile-friendliness: https://search.google.com/test/mobile-friendly
- [ ] Validate structured data: https://validator.schema.org/

### AdSense Testing:
- [ ] Verify ad code is commented out until approved
- [ ] Test ad placeholder visibility on mobile and desktop
- [ ] Ensure ads don't interfere with form buttons or navigation
- [ ] Check ad spacing and layout on different screen sizes

### Performance:
- [ ] Run Lighthouse audit (target 90+ score)
- [ ] Test page load speed
- [ ] Verify Firebase Firestore queries are optimized
- [ ] Check for console errors

---

## Launch Checklist:

1. [ ] Update site URL in metadata (replace `https://mark81d.com` with actual domain)
2. [ ] Create and add og-image.png
3. [ ] Update Twitter handle in metadata
4. [ ] Apply for AdSense approval
5. [ ] Add robots.txt and sitemap.xml
6. [ ] Submit to Google Search Console
7. [ ] Set up Google Analytics
8. [ ] Test all social media previews
9. [ ] Monitor initial AdSense performance
10. [ ] Track SEO rankings for key terms

---

## Key Features for SEO:

- **Unique Content**: HeroTime - Avengers: Doomsday countdown and fan community
- **Fresh Content**: Live countdown updates, new fans joining, poll results
- **User Engagement**: Interactive map, voting, registration forms
- **Mobile-First**: Responsive design with proper viewport settings
- **Fast Loading**: Next.js optimized with App Router
- **Social Sharing**: OpenGraph and Twitter Card meta tags

---

## Monetization Tips:

1. **AdSense Placement Best Practices**:
   - Keep ads away from clickable buttons (join form)
   - Place ads where users naturally pause (after hero, before footer)
   - Test different formats to see what performs best
   - Avoid too many ads (current: 2 placements is optimal)

2. **Content Strategy for Ads**:
   - Higher engagement = better ad performance
   - Encourage users to explore map and fan wall
   - Update polls regularly to bring users back
   - Add countdown milestones for recurring visits

3. **AdSense Approval Tips**:
   - Ensure site has substantial unique content (✅ done)
   - Add privacy policy page (recommended)
   - Have clear navigation (✅ done)
   - No copyright violations (✅ using original content)
   - Mobile-responsive (✅ done)

---

For questions or updates, refer to:
- Google AdSense Help: https://support.google.com/adsense
- Next.js SEO Guide: https://nextjs.org/learn/seo/introduction-to-seo
- Google Search Central: https://developers.google.com/search
