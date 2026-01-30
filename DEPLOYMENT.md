# 🚀 Deployment Guide - Mesob Restaurant Website

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- Supabase account

## 🔧 Local Development Setup

### 1. Clone the Repository
```bash
git clone https://github.com/tsedeniyafiseha/restaurant-website.git
cd restaurant-website
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
DATABASE_URL=your_supabase_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Database Setup
```bash
cd ../backend
node migrate.js
```

### 5. Start Development Servers

**Option 1: Use the batch file (Windows)**
```bash
# From project root
start-both.bat
```

**Option 2: Manual start**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 🌐 Production Deployment

### Frontend Deployment (Netlify/Vercel)

1. **Build the frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Add environment variables if needed

3. **Deploy to Vercel**
   ```bash
   npm install -g vercel
   vercel --prod
   ```

### Backend Deployment (Railway/Heroku)

1. **Railway Deployment**
   - Connect your GitHub repository
   - Select the backend folder
   - Add environment variables
   - Railway will auto-deploy

2. **Heroku Deployment**
   ```bash
   # Install Heroku CLI
   heroku create your-app-name
   
   # Set environment variables
   heroku config:set DATABASE_URL=your_supabase_url
   heroku config:set SUPABASE_URL=your_supabase_url
   heroku config:set SUPABASE_ANON_KEY=your_supabase_key
   
   # Deploy
   git subtree push --prefix backend heroku main
   ```

### Database (Supabase)

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Create new project
   - Get connection details

2. **Run Migration**
   ```bash
   node migrate.js
   ```

## 🔐 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://postgres.xxx:password@aws-0-region.pooler.supabase.com:6543/postgres?pgbouncer=true
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=your_anon_key
PORT=3001
```

### Frontend (if needed)
```env
REACT_APP_API_URL=https://your-backend-url.com
```

## 📱 Application URLs

- **Local Frontend**: http://localhost:3000
- **Local Backend**: http://localhost:3001
- **Production**: Update URLs after deployment

## 🔍 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 3000
   npx kill-port 3000
   
   # Kill process on port 3001
   npx kill-port 3001
   ```

2. **Database connection issues**
   - Check your Supabase credentials
   - Ensure database is running
   - Verify network connectivity

3. **Build errors**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Delete node_modules and reinstall
   rm -rf node_modules
   npm install
   ```

## 📊 Performance Optimization

### Frontend
- Images are optimized and served from public folder
- CSS is minified in production
- React components are optimized

### Backend
- Database queries are optimized
- CORS is properly configured
- Error handling is implemented

## 🔄 CI/CD Pipeline

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
    
    - name: Install dependencies
      run: |
        cd frontend && npm install
        cd ../backend && npm install
    
    - name: Build frontend
      run: cd frontend && npm run build
    
    - name: Deploy to production
      # Add your deployment steps here
```

## 📞 Support

For issues or questions:
- Check the GitHub Issues
- Review the README.md
- Contact the development team

---

**Happy Deploying! 🎉**