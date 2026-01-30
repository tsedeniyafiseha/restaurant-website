# 🍽️ Mesob Restaurant - Full Stack Application

A modern restaurant website with React frontend and Node.js backend.

## 🚀 Quick Start

### Backend (API)
```bash
cd backend
npm run dev
```
**Runs on:** http://localhost:3001

### Frontend (React)
```bash
cd frontend
npm run dev
```
**Runs on:** http://localhost:3000

## 📁 Clean Structure

```
project-root/
├── backend/
│   ├── src/
│   │   ├── app.js          # Simple API server
│   │   └── database.js     # Supabase connection
│   ├── migrate.js          # Add sample data
│   └── package.json
├── frontend/
│   ├── server.js           # React dev server
│   └── package.json
└── images/                 # Static assets
```

## ✨ Features

- ✅ **React Frontend** - Modern component-based UI
- ✅ **Node.js Backend** - RESTful API with native HTTP
- ✅ **Supabase Database** - PostgreSQL with real-time features
- ✅ **Responsive Design** - Mobile-friendly interface
- ✅ **Contact Forms** - Save directly to database
- ✅ **Menu System** - Dynamic content from database

## 🔧 API Endpoints

- `GET /api/menu` - All menu items
- `GET /api/menu/traditional` - Ethiopian dishes
- `GET /api/menu/international` - International dishes
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## 🎯 Tech Stack

- **Frontend**: React-like components, Modern CSS
- **Backend**: Node.js (native HTTP module)
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Ready for production

Built following modern full-stack development practices! 🚀