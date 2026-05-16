# Cloudinary Media Setup

ShikhoBD uses Cloudinary for course thumbnails, avatars, and certificate storage.

## 1. Initial Setup
1. Sign up at [cloudinary.com](https://cloudinary.com).
2. Go to your **Dashboard**.
3. Copy your **Cloud Name**, **API Key**, and **API Secret**.

## 2. Environment Variables
Add these to your `.env.local` and Vercel dashboard:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 3. Upload Presets (Recommended)
Go to **Settings > Upload > Upload presets** and create:
- `course-thumbnails`:
    - Folder: `shikhobd/courses`
    - Quality: Auto, Format: Auto
- `avatars`:
    - Folder: `shikhobd/users`
    - Transformations: `c_thumb,g_face,w_200,h_200` (Square face-crop)
- `certificates`:
    - Folder: `shikhobd/docs`
    - Access: Private (optional)

## 4. Usage in Code
We use `cloudinary` npm package. See `lib/cloudinary.ts` for implementation details.
