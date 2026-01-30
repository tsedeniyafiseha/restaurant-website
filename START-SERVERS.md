# How to Start the Restaurant Application

## The Problem You're Seeing

The error "failed to place order. Please try again." happens because the **backend server is not running**.

The frontend (website) runs on `http://localhost:3000`
The backend (API) needs to run on `http://localhost:3001`

## Solution: Start Both Servers

### Option 1: Use the Batch Files (Easiest)

#### Start Both Servers at Once:
```bash
# Double-click this file or run:
start-both.bat
```

#### Or Start Them Separately:

**Terminal 1 - Backend:**
```bash
# Double-click or run:
start-backend.bat
```

**Terminal 2 - Frontend:**
```bash
# Double-click or run:
start-frontend.bat
```

### Option 2: Manual Start

#### Terminal 1 - Start Backend:
```bash
cd backend
npm start
```
You should see: `🚀 Backend API running on http://localhost:3001`

#### Terminal 2 - Start Frontend:
```bash
cd frontend
npm start
```
You should see: `Compiled successfully!` and browser opens to `http://localhost:3000`

## How to Test if Backend is Running

Open your browser and go to:
```
http://localhost:3001/api/health
```

If you see `{"status":"healthy"}`, the backend is running! ✅

If you see "This site can't be reached", the backend is NOT running ❌

## Troubleshooting

### Error: "Cannot connect to server"
**Problem:** Backend is not running
**Solution:** Start the backend server (see above)

### Error: "Port 3001 is already in use"
**Problem:** Another process is using port 3001
**Solution:** 
1. Close any other backend servers
2. Or change the port in `backend/src/app.js`

### Error: "Failed to place order"
**Problem:** Backend is running but there's a database error
**Solution:** Check the backend terminal for error messages

## Quick Test

1. Start backend: `cd backend && npm start`
2. Start frontend: `cd frontend && npm start`
3. Go to: http://localhost:3000/menu
4. Add an item to cart
5. Fill in your information
6. Click "Place Order"
7. You should see: "Order Placed Successfully! 🎉"

## Check if Order Was Saved

Go to: http://localhost:3000/admin

You should see your order with all the details!

## Need More Help?

Check the backend terminal for error messages. They will tell you exactly what went wrong.
