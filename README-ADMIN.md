# Mesob Restaurant - Complete System

## 🎯 Overview

A full-stack restaurant management system with:
- Customer-facing website (Port 3000)
- Admin panel (Port 3002)
- Backend API (Port 3001)

## 🚀 Quick Start

### Start Everything:
```bash
start-all.bat
```

### Or Start Individually:
```bash
# Backend
start-backend.bat

# Website
start-frontend.bat

# Admin
start-admin.bat
```

## 📦 First Time Setup

### 1. Install Dependencies:
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install

# Admin
cd admin
npm install
```

### 2. Start Services:
```bash
start-all.bat
```

## 🌐 Access Points

| Service | URL | Purpose |
|---------|-----|---------|
| **Website** | http://localhost:3000 | Customer ordering |
| **Admin** | http://localhost:3002 | Order management |
| **Backend** | http://localhost:3001 | API server |

## 🔐 Admin Access

1. Go to: http://localhost:3002
2. Password: `admin123`
3. Manage orders!

**⚠️ Change password in production!**

## ✨ Features

### Customer Website:
- Browse menu (prices in ETB)
- Add items to cart
- Place orders
- Order confirmation
- Contact form
- Dark/Light mode

### Admin Panel:
- Password protected
- Dashboard with stats
- View all orders
- Update order status
- Customer information
- Real-time updates

### Backend:
- RESTful API
- Supabase database
- Order management
- Contact submissions

## 📊 System Architecture

```
┌─────────────────────────────────────────┐
│         Mesob Restaurant System         │
└─────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Backend    │  │   Frontend   │  │    Admin     │
│   Port 3001  │  │   Port 3000  │  │   Port 3002  │
└──────────────┘  └──────────────┘  └──────────────┘
       │                 │                  │
       └─────────────────┴──────────────────┘
                         │
                  ┌──────────────┐
                  │   Supabase   │
                  └──────────────┘
```

## 🛠️ Tech Stack

- **Frontend**: React, React Router
- **Admin**: React (separate app)
- **Backend**: Node.js, Express-like HTTP server
- **Database**: Supabase (PostgreSQL)
- **Styling**: Inline styles, CSS

## 📝 Documentation

- `ADMIN-PANEL-SETUP.md` - Complete admin setup
- `ADMIN-QUICK-START.md` - Quick reference
- `FINAL-CHANGES-SUMMARY.md` - All changes made
- `CURRENCY-AND-ORDERS-UPDATE.md` - Currency changes
- `ORDER-SYSTEM-VERIFICATION.md` - Order system proof

## 🔧 Configuration

### Change Admin Password:
Edit `admin/src/pages/Admin.jsx`:
```javascript
const ADMIN_PASSWORD = 'your-secure-password';
```

### Change Ports:
- Backend: `backend/src/app.js` (line 95)
- Frontend: `frontend/package.json` scripts
- Admin: `admin/package.json` scripts

## 🧪 Testing

### Test Backend:
```bash
cd backend
node test-orders.js
```

### Test Complete System:
```bash
node test-complete-system.js
```

### Verify Orders:
```bash
node verify-orders.js
```

## 📦 Deployment

### Development:
```bash
start-all.bat
```

### Production:
1. Deploy backend to Heroku/Railway
2. Deploy frontend to Vercel/Netlify
3. Deploy admin to separate Vercel/Netlify
4. Update API URLs in code

## 🐛 Troubleshooting

### Orders not saving:
- Check backend is running (port 3001)
- Test: http://localhost:3001/api/health

### Admin won't start:
```bash
cd admin
npm install
npm start
```

### Port already in use:
- Close other instances
- Or change port in package.json

## 📚 API Endpoints

```
GET  /api/menu              - Get all menu items
GET  /api/menu/traditional  - Get traditional items
GET  /api/menu/international - Get international items
GET  /api/menu/search?q=    - Search menu
POST /api/contact           - Submit contact form
POST /api/orders            - Create new order
GET  /api/orders            - Get all orders
PUT  /api/orders/:id/status - Update order status
GET  /api/health            - Health check
```

## 🎨 Features

- ✅ Ethiopian Birr (ETB) currency
- ✅ Order management system
- ✅ Separate admin panel
- ✅ Password authentication
- ✅ Dark/Light mode
- ✅ Responsive design
- ✅ Real-time updates
- ✅ Order status tracking

## 📄 License

Private - Mesob Restaurant

## 👥 Support

For issues:
1. Check documentation files
2. Check backend terminal for errors
3. Check browser console (F12)
4. Verify all services are running

## 🎉 Ready to Use!

Everything is set up and working. Just run `start-all.bat` and you're good to go!
