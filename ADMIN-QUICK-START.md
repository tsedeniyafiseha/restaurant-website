# Admin Panel - Quick Start 🚀

## What Changed?

✅ **Admin panel is now separate** - Runs on http://localhost:3002
✅ **Removed from main website** - No longer in navbar
✅ **Password protected** - Requires authentication
✅ **Independent deployment** - Can be deployed separately

## Setup (First Time Only)

```bash
cd admin
npm install
```

## Start the Admin Panel

### Option 1: Start Everything
```bash
# Double-click:
start-all.bat
```

### Option 2: Start Admin Only
```bash
# Double-click:
start-admin.bat
```

### Option 3: Manual
```bash
cd admin
npm start
```

## Access

1. Open: **http://localhost:3002**
2. Password: **admin123**
3. Manage orders!

## Features

- 🔐 Password authentication
- 📊 Dashboard with stats
- 📦 View all orders
- ✏️ Update order status
- 🌓 Dark/Light mode
- 🔄 Refresh orders

## Important Notes

⚠️ **Backend must be running** on port 3001
⚠️ **Change default password** in production
⚠️ **Admin is NOT accessible** from main website

## Ports

- Backend: **3001**
- Main Website: **3000**
- Admin Panel: **3002**

## Default Password

```
admin123
```

Change it in: `admin/src/pages/Admin.jsx` (line 13)

## That's It!

The admin panel is completely separate from the main website for better security and performance.
