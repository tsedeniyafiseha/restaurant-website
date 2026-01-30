# Database Orders Table - Complete Setup & Documentation

## 📊 **Database Structure**

The orders table is already created and configured in your Supabase database. Here's the complete structure:

### **Orders Table Schema**
```sql
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
```

### **Field Descriptions**
| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `id` | SERIAL | Auto-incrementing primary key | ✅ Auto |
| `customer_name` | VARCHAR(255) | Customer's full name | ✅ Yes |
| `customer_email` | VARCHAR(255) | Customer's email address | ✅ Yes |
| `customer_phone` | VARCHAR(50) | Customer's phone number | ✅ Yes |
| `customer_address` | TEXT | Delivery address | ❌ Optional |
| `notes` | TEXT | Special instructions from customer | ❌ Optional |
| `items` | JSONB | Order items in JSON format | ✅ Yes |
| `total_amount` | DECIMAL(10,2) | Total order amount | ✅ Yes |
| `status` | VARCHAR(50) | Order status (default: 'pending') | ✅ Auto |
| `created_at` | TIMESTAMP | When order was created | ✅ Auto |
| `updated_at` | TIMESTAMP | When order was last updated | ✅ Auto |

## 🛒 **How Cart Orders Are Saved**

### **1. Customer Places Order**
When a customer clicks "Place Order" in the cart:

```javascript
// Frontend: SimpleCart.jsx
const orderData = {
  customer_name: customerInfo.name,
  customer_email: customerInfo.email,
  customer_phone: customerInfo.phone,
  customer_address: customerInfo.address,
  notes: customerInfo.notes,
  items: cartItems,  // Array of cart items
  total_amount: getTotalPrice()
};

// Send to backend
const response = await fetch('http://localhost:3001/api/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(orderData)
});
```

### **2. Backend Processes Order**
```javascript
// Backend: app.js
else if (pathname === '/api/orders' && req.method === 'POST') {
  const body = await getBody(req);
  
  // Validate required fields
  if (!body.customer_name || !body.customer_email || 
      !body.customer_phone || !body.items || !body.total_amount) {
    sendJSON(res, { error: 'Missing required fields' }, 400);
    return;
  }
  
  // Prepare order for database
  const order = {
    customer_name: body.customer_name,
    customer_email: body.customer_email,
    customer_phone: body.customer_phone,
    customer_address: body.customer_address || '',
    notes: body.notes || '',
    items: JSON.stringify(body.items),  // Convert array to JSON
    total_amount: body.total_amount,
    status: 'pending'
  };
  
  // Save to database
  const orderId = await db.saveOrder(order);
  sendJSON(res, { 
    success: true, 
    message: 'Order placed successfully!', 
    orderId: orderId 
  });
}
```

### **3. Database Saves Order**
```javascript
// Backend: database.js
async saveOrder(order) {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([order])
      .select();
    
    if (error) {
      console.error('Database error:', error);
      throw error;
    }
    return data[0].id;  // Return the new order ID
  } catch (error) {
    console.error('Error in saveOrder:', error);
    throw error;
  }
}
```

## 📋 **Sample Order Data**

### **Cart Items Format**
```json
[
  {
    "id": 1,
    "name": "Doro Wot",
    "price": 18.99,
    "quantity": 2,
    "image": "/images/Doro Wot.jpg",
    "description": "Traditional chicken stew with berbere spice"
  },
  {
    "id": 2,
    "name": "Shekla Tibs",
    "price": 22.99,
    "quantity": 1,
    "image": "/images/tibs.jpeg",
    "description": "Sizzling beef cubes with Ethiopian spices"
  }
]
```

### **Complete Order Record**
```json
{
  "id": 1,
  "customer_name": "John Doe",
  "customer_email": "john@example.com",
  "customer_phone": "+1234567890",
  "customer_address": "123 Main St, City, State 12345",
  "notes": "Please make it less spicy",
  "items": "[{\"id\":1,\"name\":\"Doro Wot\",\"price\":18.99,\"quantity\":2},{\"id\":2,\"name\":\"Shekla Tibs\",\"price\":22.99,\"quantity\":1}]",
  "total_amount": 60.97,
  "status": "pending",
  "created_at": "2024-01-30T10:30:00Z",
  "updated_at": "2024-01-30T10:30:00Z"
}
```

## 🔄 **Order Status Workflow**

### **Status Values**
1. **`pending`** - Order just placed (default)
2. **`confirmed`** - Restaurant confirmed the order
3. **`preparing`** - Kitchen is preparing the food
4. **`ready`** - Food is ready for pickup/delivery
5. **`delivered`** - Order has been delivered
6. **`cancelled`** - Order was cancelled

### **Status Update API**
```javascript
// Update order status
PUT /api/orders/:id/status
{
  "status": "confirmed"
}
```

## 🔍 **Viewing Orders**

### **Admin Dashboard**
- Access: `http://localhost:3000/admin`
- Shows all orders with customer details
- Allows status updates
- Displays order items and totals

### **API Endpoints**
```javascript
// Get all orders (for admin)
GET /api/orders

// Create new order (from cart)
POST /api/orders

// Update order status
PUT /api/orders/:id/status
```

## 🛠 **Database Operations**

### **Available Methods**
```javascript
// Save new order
await db.saveOrder(orderData);

// Get all orders
await db.getOrders();

// Update order status
await db.updateOrderStatus(orderId, newStatus);
```

## 📊 **Database Connection**
- **Platform**: Supabase (PostgreSQL)
- **Connection**: Already configured in `database.js`
- **Table**: `orders` table is created and ready
- **Migration**: Already run successfully

## ✅ **Verification Steps**

### **1. Check Table Exists**
```sql
SELECT * FROM orders LIMIT 1;
```

### **2. Test Order Creation**
1. Go to your website
2. Add items to cart
3. Fill customer information
4. Click "Place Order"
5. Check admin dashboard at `/admin`

### **3. Verify Data Structure**
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

## 🚀 **Ready to Use**

Your database is **completely set up** and ready to receive orders! When customers:

1. ✅ Add items to cart
2. ✅ Fill in their information
3. ✅ Click "Place Order"
4. ✅ Order is automatically saved to database
5. ✅ Restaurant can view orders in admin dashboard
6. ✅ Order status can be updated as needed

The system is fully functional and will save all customer orders with complete details including items, customer information, and order totals.

## 📞 **Customer Communication**
Each order includes:
- Customer name, email, and phone
- Delivery address (if provided)
- Special instructions/notes
- Complete itemized order
- Total amount

This allows the restaurant to:
- Call customers to confirm orders
- Send updates about order status
- Handle delivery arrangements
- Process payments
- Manage special requests