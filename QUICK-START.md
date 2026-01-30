# Quick Start Guide 🚀

## Start the Application

### 1. Start Backend Server
```bash
cd backend
npm start
```
Backend will run on: http://localhost:3001

### 2. Start Frontend Server
```bash
cd frontend
npm start
```
Frontend will run on: http://localhost:3000

## Test the Order System

### Place a Test Order:
1. Open http://localhost:3000
2. Go to **Menu** page
3. Click **"Add to Cart"** on any dish
4. Click the **cart icon** (top right)
5. Fill in the form:
   - Name: Your Name
   - Email: your@email.com
   - Phone: +251911234567
   - Address: Your address
6. Click **"Place Order"**
7. See confirmation: "Order Placed Successfully! 🎉"

### View Orders (Admin):
1. Go to http://localhost:3000/admin
2. See all orders with:
   - Customer details
   - Items ordered
   - Total amount in ETB
   - Order status

## What's New ✨

### Currency in Ethiopian Birr (ETB)
- All prices now display in ETB instead of $
- Example: Doro Wot - ETB 950.00

### Order System
- Add items to cart
- Enter customer information
- Orders saved to database
- Confirmation message shown

### No Errors
- All code checked and working
- No syntax or type errors
- Ready to use!

## Need Help?

Check these files:
- `CURRENCY-AND-ORDERS-UPDATE.md` - Full details of changes
- `test-complete-system.js` - Automated test script
- `SYSTEM-STATUS.md` - Overall system status
