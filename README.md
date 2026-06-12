# Portal Candles — Meta Checkout Redirect

This is a tiny Netlify serverless function that fixes the Instagram/Facebook
Shop checkout flow for Squarespace stores.

## How it works

When a customer taps "Go to checkout" on Instagram, Meta redirects them to:
  https://your-site.netlify.app/.netlify/functions/checkout?products=PRODUCT_ID:QUANTITY

This function converts that into a Squarespace-compatible cart URL:
  https://portalcandle.com/cart?addProductId=PRODUCT_ID&quantity=QUANTITY

---

## Setup (10 minutes)

### Step 1 — Create a GitHub repository
1. Go to https://github.com and sign in (or create a free account)
2. Click "New repository"
3. Name it: portal-checkout
4. Set it to Public
5. Click "Create repository"
6. Upload the two files from this folder:
   - netlify.toml
   - netlify/functions/checkout.js

### Step 2 — Deploy to Netlify
1. Go to https://netlify.com and sign in (or create a free account)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select your portal-checkout repository
5. Leave all settings as default and click "Deploy site"
6. Wait ~1 minute. You'll get a URL like: https://amazing-name-123.netlify.app

### Step 3 — Update Meta Commerce Manager
1. Go to https://business.facebook.com → Commerce Manager
2. Select your shop → Settings → General
3. Find "Checkout URL" and click Edit
4. Replace the current URL with:
   https://amazing-name-123.netlify.app/.netlify/functions/checkout
   (use YOUR actual Netlify URL)
5. Check the box "My URL will support product and coupon parameters"
6. Click Save

### Step 4 — Test it
Try this URL in your browser:
  https://amazing-name-123.netlify.app/.netlify/functions/checkout?products=675c810fa5c9013d84ff4a9d:1

You should land on portalcandle.com with THETA already in your cart.

---

## Your Product IDs (for reference)

| Product    | Squarespace ID                     |
|------------|------------------------------------|
| ALPHA      | 675c7dada75d8b573bd9ef72           |
| BETA       | 675c80a984cc816fc3335b84           |
| THETA      | 675c810fa5c9013d84ff4a9d           |
| Sample Set | 68855d0e41a7fe0160320ed0           |
