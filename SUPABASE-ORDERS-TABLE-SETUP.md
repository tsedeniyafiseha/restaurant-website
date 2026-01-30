# 🗄️ Supabase Orders Table Setup Guide

## 📋 **Manual Setup Required**

Since the automatic table creation didn't work, you need to manually create the orders table in your Supabase dashboard. Follow these simple steps:

## 🚀 **Step-by-Step Instructions**

### **Step 1: Access Supabase Dashboard**
1. Go to [https://supabase.com](https://supabase.com)
2. Sign in to your account
3. Select your project: `nzioipimfegguuaqvbul`

### **Step 2: Open SQL Editor**
1. In the left sidebar, click on **"SQL Editor"**
2. Click **"New Query"** button
3. You'll see a blank SQL editor

### **Step 3: Create Orders Table**
Copy and paste this SQL command into the editor:

```sql
-- Create Orders Table for Restaurant Cart System
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  customer_address TEXT,
  notes TEXT,
  items JSONB NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add some indexes for better performance
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);

-- Insert a test record to verify table works
INSERT INTO orders (
  customer_name, 
  customer_email, 
  customer_phone, 
  items, 
  total_amount
) VALUES (
  'Test Customer',
  'test@example.com',
  '+1234567890',
  '[{"id":1,"name":"Doro Wot","price":18.99,"quantity":1}]',
  18.99
);

-- Verify the table was created and data inserted
SELECT * FROM orders;
```

### **Step 4: Execute the SQL**
1. Click the **"Run"** button (or press Ctrl+Enter)
2. You should see a success message
3. The query results will show your test order

### **Step 5: Verify Table Creation**
You should see output similar to:
```
id | customer_name | customer_email | customer_phone | items | total_amount | status | created_at
1  | Test Customer | test@example.com | +1234567890 | [{"id":1,"name":"Doro Wot","price":18.99,"quantity":1}] | 18.99 | pending | 2024-01-30 10:30:00
```

## ✅ **Verification Steps**

### **1. Check Table Structure**
Run this query to see the table structure:
```sql
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'orders';
```

### **2. Test Your Application**
1. Go to your website: `http://localhost:3000`
2. Add items to cart
3. Fill in customer information
4. Click "Place Order"
5. Check the admin dashboard: `http://localhost:3000/admin`

### **3. Verify Orders in Database**
```sql
SELECT 
  id,
  customer_name,
  customer_email,
  total_amount,
  status,
  created_at
FROM orders 
ORDER BY created_at DESC;
```

## 🔧 **Troubleshooting**

### **If SQL Execution Fails:**
1. **Permission Error**: Make sure you're logged in as the project owner
2. **Syntax Error**: Copy the SQL exactly as provided above
3. **Connection Error**: Check your internet connection and try again

### **If Table Already Exists:**
If you get an error saying the table already exists, that's good! Just run:
```sql
SELECT * FROM orders LIMIT 5;
```

### **If Orders Don't Save:**
1. Check browser console for errors
2. Verify backend is running: `http://localhost:3001/api/health`
3. Check network tab in browser dev tools

## 📊 **Expected Database Structure**

After successful creation, your orders table will have:

| Column | Type | Description |
|--------|------|-------------|
| `id` | SERIAL | Auto-incrementing order ID |
| `customer_name` | VARCHAR(255) | Customer's full name |
| `customer_email` | VARCHAR(255) | Customer's email |
| `customer_phone` | VARCHAR(50) | Customer's phone number |
| `customer_address` | TEXT | Delivery address (optional) |
| `notes` | TEXT | Special instructions (optional) |
| `items` | JSONB | Cart items in JSON format |
| `total_amount` | DECIMAL(10,2) | Total order amount |
| `status` | VARCHAR(50) | Order status (pending, confirmed, etc.) |
| `created_at` | TIMESTAMP | When order was placed |
| `updated_at` | TIMESTAMP | When order was last modified |

## 🎯 **What Happens After Setup**

Once the table is created:

1. ✅ **Cart Orders Save**: When customers place orders, they'll be saved to this table
2. ✅ **Admin Dashboard Works**: You can view all orders at `/admin`
3. ✅ **Order Management**: Update order status as you process them
4. ✅ **Customer Data**: All customer information is stored securely
5. ✅ **Order History**: Complete record of all orders with timestamps

## 🚀 **Ready to Test**

After creating the table:

1. **Start your servers**:
   ```bash
   # Terminal 1 - Backend
   cd project-root/backend
   npm start

   # Terminal 2 - Frontend  
   cd project-root/frontend
   npm start
   ```

2. **Test the ordering system**:
   - Go to `http://localhost:3000`
   - Add items to cart
   - Place an order
   - Check admin at `http://localhost:3000/admin`

3. **Verify in Supabase**:
   - Go back to SQL Editor
   - Run: `SELECT * FROM orders ORDER BY created_at DESC;`
   - You should see your test order!

## 📞 **Need Help?**

If you encounter any issues:
1. Check the browser console for JavaScript errors
2. Verify both frontend and backend servers are running
3. Ensure the SQL was executed successfully in Supabase
4. Test the API endpoint: `http://localhost:3001/api/orders`

Your database will be ready to receive and store all customer orders from the cart system!