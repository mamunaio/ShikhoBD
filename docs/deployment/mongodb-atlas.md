# MongoDB Atlas Deployment Guide

Follow these steps to set up your production database for ShikhoBD.

## 1. Create Account & Cluster
1. Go to [atlas.mongodb.com](https://atlas.mongodb.com) and create a free account.
2. Click **Create** to deploy a new cluster.
3. Select **M0 (Free Tier)**.
4. Choose **AWS** as the provider and **Mumbai (ap-south-1)** as the region for optimal latency from Bangladesh.
5. Click **Create Cluster**.

## 2. Database Access
1. Go to **Security > Database Access**.
2. Click **Add New Database User**.
3. Username: `shikhobd-admin`
4. Password: Click **Autogenerate Secure Password** (save this somewhere safe!).
5. Database User Privileges: Select **Atlas Admin**.
6. Click **Add User**.

## 3. Network Access
1. Go to **Security > Network Access**.
2. Click **Add IP Address**.
3. Select **Allow Access From Anywhere** (IP: `0.0.0.0/0`).
   - *Note: This is required for Vercel's dynamic IP environment.*
4. Click **Confirm**.

## 4. Connection String
1. Go to **Deployment > Database**.
2. Click **Connect** on your cluster.
3. Select **Drivers** (Node.js).
4. Copy the connection string:
   `mongodb+srv://shikhobd-admin:<password>@cluster0.xxxxx.mongodb.net/shikhobd?retryWrites=true&w=majority`
5. Replace `<password>` with your actual password.

## 5. Local Configuration
1. Open your `.env.local` and add:
   ```env
   MONGODB_URI=mongodb+srv://shikhobd-admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/shikhobd
   ```
2. Run the seed script to populate initial data:
   ```bash
   npx ts-node scripts/seed.ts
   ```
