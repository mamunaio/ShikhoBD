# Vercel Deployment Guide

Deploying the ShikhoBD frontend and API.

## 1. Prepare GitHub
1. Initialize git and push to a private repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ShikhoBD"
   git remote add origin https://github.com/your-username/shikhobd
   git push -u origin main
   ```

## 2. Deploy to Vercel
1. Log in to [vercel.com](https://vercel.com).
2. Click **Add New > Project**.
3. Import your `shikhobd` repository.
4. Framework Preset: **Next.js**.
5. Build Settings:
   - Build Command: `npm run build`
   - Install Command: `npm install`

## 3. Environment Variables
Add the following variables in the Vercel project settings:
- `MONGODB_URI`
- `NEXTAUTH_SECRET` (Run `openssl rand -base64 32` to generate)
- `NEXTAUTH_URL`: `https://your-app.vercel.app`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `JWT_SECRET`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASS`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## 4. Custom Domain
1. Go to **Settings > Domains**.
2. Add `shikhobd.com`.
3. Update your DNS settings at your registrar (A record to `76.76.19.61`).
4. Once verified, update `NEXTAUTH_URL` to `https://shikhobd.com`.
