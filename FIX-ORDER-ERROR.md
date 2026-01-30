# Fix "Failed to Place Order" Error ❌ → ✅

## The Error You're Seeing:
```
localhost:3000 says
failed to place order. Please try again.
```

## Why This Happens:
The **backend server is not running**. The frontend (website) can't connect to the backend (API) to save the order.

## Quick Fix (3 Steps):

### Step 1: Open a Terminal
- Press `Windows Key + R`
- Type `cmd` and press Enter

### Step 2: Start the Backend
```bash
cd path\to\project-root\backend
npm start
```

You should see:
```
🚀 Backend API running on http://localhost:3001
```

### Step 3: Try Ordering Again
- Go back to your browser
- Try placing the order again
- It should work now! ✅

## Even Easier: Use the Batch File

Just double-click: `start-both.bat`

This will start both servers automatically!

## How to Know if Backend is Running:

### Method 1: Check the Terminal
Look for this message:
```
🚀 Backend API running on http://localhost:3001
```

### Method 2: Test in Browser
Open: http://localhost:3001/api/health

If you see `{"status":"healthy"}` → Backend is running ✅
If you see "Can't reach this page" → Backend is NOT running ❌

## Common Issues:

### Issue 1: "Port 3001 is already in use"
**Solution:** Another program is using port 3001
```bash
# Kill the process using port 3001
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F
```

### Issue 2: "npm: command not found"
**Solution:** Node.js is not installed
- Download from: https://nodejs.org/
- Install Node.js
- Restart your terminal

### Issue 3: Backend starts but orders still fail
**Solution:** Check backend terminal for errors
- Look for database connection errors
- Check Supabase credentials in `backend/.env`

## Test the Complete System:

1. **Start Backend:**
   ```bash
   cd backend
   npm start
   ```
   Wait for: `🚀 Backend API running on http://localhost:3001`

2. **Start Frontend:**
   ```bash
   cd frontend
   npm start
   ```
   Wait for: Browser opens to `http://localhost:3000`

3. **Place Test Order:**
   - Go to Menu page
   - Add "Doro Wot" to cart
   - Click cart icon
   - Fill in:
     - Name: Test User
     - Email: test@example.com
     - Phone: 0911234567
   - Click "Place Order"
   - Should see: "Order Placed Successfully! 🎉"

4. **Verify Order Saved:**
   - Go to: http://localhost:3000/admin
   - You should see your order!

## Still Having Issues?

Check the backend terminal for error messages. They will tell you exactly what's wrong.

Common error messages:
- `ECONNREFUSED` → Backend not running
- `Database error` → Supabase connection issue
- `Missing required fields` → Form validation issue

## Need Help?

1. Check backend terminal for errors
2. Check browser console (F12) for errors
3. Make sure both servers are running
4. Test backend health: http://localhost:3001/api/health
