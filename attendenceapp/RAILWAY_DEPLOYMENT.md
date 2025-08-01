# Railway Deployment Guide

## Current Issue Fixed

The original error was caused by an incorrect root directory in `backend/railway.json`. The path `"attendenceapp/backend"` was incorrect for your project structure.

## Backend-Only Deployment (Current Setup)

### Configuration Files:
1. **`backend/railway.json`** - Specifies the root directory
2. **`railway.toml`** - Main Railway configuration with build and deploy settings

### Key Changes Made:
- Fixed root directory from `"attendenceapp/backend"` to `"backend"`
- Added environment variable support for PORT
- Added debug logging for deployment troubleshooting
- Added database connection error handling

## Monorepo Deployment (Frontend + Backend)

If you want to deploy both frontend and backend in one Railway project, here are your options:

### Option 1: Separate Services (Recommended)
Deploy as two separate Railway services:
- **Backend Service**: Uses current configuration
- **Frontend Service**: Separate Railway service for the client

### Option 2: Single Service with Build Script
Create a unified deployment that serves both:

```json
// package.json (root level)
{
  "scripts": {
    "build": "cd client && npm install && npm run build && cd ../backend && npm install",
    "start": "cd backend && npm start"
  }
}
```

```toml
# railway.toml (root level)
[build]
builder = "nixpacks"

[deploy]
startCommand = "npm run build && npm start"
```

### Option 3: Backend Serves Frontend
Modify backend to serve built frontend files:

```javascript
// Add to backend/server.js
const path = require('path');

// Serve static files from client build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
```

## Environment Variables

Make sure to set these in Railway dashboard:
- `NODE_ENV=production`
- Database connection strings
- JWT secrets
- Any other environment variables from your `.env` file

## Deployment Steps

1. Push your changes to your repository
2. Connect your repository to Railway
3. Railway will automatically detect the configuration and deploy
4. Monitor the deployment logs for any issues

## Troubleshooting

The debug logs added to `server.js` will help identify:
- Current working directory
- Environment variables
- Process arguments
- Database connection status

Check Railway logs if deployment fails.