# Deploy Aperture Analytics

## Quick Deploy to Vercel (Recommended)

### Option 1: Via Vercel Dashboard
1. Visit [vercel.com/new](https://vercel.com/new)
2. Import this Git repository OR upload the project folder
3. Click "Deploy"
4. Done! Your site will be live at `https://apertureanalytics.vercel.app` (or similar)

### Option 2: Via CLI
```bash
cd /home/ubuntu/clawd/apertureanalytics
vercel --prod
```

(You'll need to login first: `vercel login`)

## What's Included

✅ Fully responsive landing page
✅ Modern design with gradient accents
✅ SEO optimized with metadata
✅ 6 key features section
✅ 3-tier pricing ($99/$249/$499)
✅ Social proof section
✅ Email capture form
✅ Professional footer

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Font:** Inter (Google Fonts)

## Pages
- `/` - Landing page with all sections

## Next Steps

1. **Deploy to Vercel** (see above)
2. **Custom domain** - Add your domain in Vercel dashboard
3. **Email form** - Wire up the email capture to your preferred service:
   - Resend (recommended)
   - SendGrid
   - Mailchimp
   - ConvertKit
4. **Analytics** - Add Google Analytics or Plausible
5. **Content tweaks** - Update copy to match your exact positioning

## Form Integration

The email form at `/app/page.tsx` (line ~440) is currently frontend-only. To make it functional:

**Option A - API Route (Recommended)**
```typescript
// Create app/api/demo/route.ts
export async function POST(req: Request) {
  const { email } = await req.json()
  
  // Send to your email service
  // await sendEmail(email)
  
  return Response.json({ success: true })
}
```

**Option B - Serverless Function**
Use Vercel Edge Functions or add a backend API endpoint.

**Option C - Third-party Form**
Replace with Tally, Typeform, or your CRM's form embed.

## Local Development

```bash
npm run dev
# Open http://localhost:3000
```

---

**Project created:** Feb 13, 2026
**Status:** Ready to deploy
