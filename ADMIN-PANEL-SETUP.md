# Admin Panel Setup Guide 🔐

## Overview

The admin panel is now a **separate application** that runs on its own port (3002), completely isolated from the main customer-facing website.

## Why Separate Admin Panel?

✅ **Security**: Admin functions are not accessible from the main website
✅ **Performance**: Admin operations don't affect customer experience
✅ **Scalability**: Can be deployed separately and scaled independently
✅ **Access Control**: Requires password authentication

## Quick Start

### Option 1: Start All Services (Recommended)
```bash
# Double-click or run:
start-all.bat
```

This starts:
- Backend API (Port 3001)
- Main Website (Port 3000)
- Admin Panel (Port 3002)

### Option 2: Start Admin Panel Only
```bash
# Double-click or run:
start-admin.bat
```

Or manually:
```bash
cd admin
npm start
```

## First Time Setup

### Install Dependencies:
```bash
cd admin
npm install
```

## Access the Admin Panel

1. **Start the backend** (required for admin to work):
   ```bash
   cd backend
   npm start
   ```

2. **Start the admin panel**:
   ```bash
   cd admin
   npm start
   ```

3. **Open in browser**:
   ```
   http://localhost:3002
   ```

4. **Login**:
   - Default Password: `admin123`
   - Change this in `admin/src/pages/Admin.jsx`

## Features

### 🔐 Authentication
- Password-protected access
- Session-based authentication
- Logout functionality

### 📊 Dashboard
- Total orders count
- Pending orders
- Delivered orders
- Total revenue in ETB

### 📦 Order Management
- View all orders in real-time
- See customer information
- View order items and totals
- Update order status:
  - Pending
  - Confirmed
  - Preparing
  - Ready
  - Delivered
  - Cancelled

### 🎨 Theme Support
- Light/Dark mode toggle
- Responsive design
- Modern UI

### 🔄 Real-time Updates
- Refresh button to get latest orders
- Auto-refresh on status updates

## Changing the Admin Password

Edit `admin/src/pages/Admin.jsx`:

```javascript
// Line 13
const ADMIN_PASSWORD = 'your-secure-password-here';
```

**Important**: In production, use proper authentication with a backend API!

## Port Configuration

The admin panel runs on port 3002 by default. To change it:

Edit `admin/package.json`:
```json
"scripts": {
  "start": "set PORT=3002 && react-scripts start"
}
```

Change `3002` to your desired port.

## Architecture

```
┌─────────────────────────────────────────┐
│         Mesob Restaurant System         │
└─────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│   Backend    │  │   Frontend   │  │    Admin     │
│   Port 3001  │  │   Port 3000  │  │   Port 3002  │
│              │  │              │  │              │
│  - API       │  │  - Website   │  │  - Dashboard │
│  - Database  │  │  - Menu      │  │  - Orders    │
│  - Orders    │  │  - Cart      │  │  - Stats     │
└──────────────┘  └──────────────┘  └──────────────┘
       │                 │                  │
       └─────────────────┴──────────────────┘
                         │
                  ┌──────────────┐
                  │   Supabase   │
                  │   Database   │
                  └──────────────┘
```

## Deployment

### Development:
```bash
# All services
start-all.bat

# Or individually
start-backend.bat
start-frontend.bat
start-admin.bat
```

### Production:

1. **Backend**: Deploy to Heroku/Railway/Render
2. **Frontend**: Deploy to Vercel/Netlify
3. **Admin**: Deploy to separate Vercel/Netlify instance

Update API URLs in:
- `admin/src/pages/Admin.jsx` (line 48, 60)

## Security Best Practices

### For Development:
✅ Use simple password authentication
✅ Keep admin on separate port
✅ Don't expose admin URL publicly

### For Production:
✅ Implement proper JWT authentication
✅ Use environment variables for secrets
✅ Add rate limiting
✅ Use HTTPS only
✅ Implement role-based access control
✅ Add audit logging
✅ Use secure session management

## Troubleshooting

### Admin panel won't start:
```bash
cd admin
npm install
npm start
```

### Can't login:
- Check password in `admin/src/pages/Admin.jsx`
- Clear browser cache
- Check browser console for errors

### Orders not loading:
- Make sure backend is running on port 3001
- Check backend terminal for errors
- Test backend: http://localhost:3001/api/health

### Port already in use:
```bash
# Change port in admin/package.json
"start": "set PORT=3003 && react-scripts start"
```

## Admin Panel vs Main Website

| Feature | Main Website (3000) | Admin Panel (3002) |
|---------|-------------------|-------------------|
| Access | Public | Password Protected |
| Purpose | Customer ordering | Order management |
| Features | Menu, Cart, Contact | Orders, Stats, Status |
| Users | Customers | Restaurant staff |
| Navigation | Navbar | Dashboard |

## Next Steps

1. ✅ Install dependencies: `cd admin && npm install`
2. ✅ Start backend: `cd backend && npm start`
3. ✅ Start admin: `cd admin && npm start`
4. ✅ Login with password: `admin123`
5. ✅ View and manage orders
6. ✅ Change default password for security

## Support

For issues or questions:
1. Check backend terminal for errors
2. Check browser console (F12)
3. Verify all services are running
4. Test API: http://localhost:3001/api/health
