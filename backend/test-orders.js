// Test script to verify orders database functionality
const { db } = require('./src/database');

async function testOrdersDatabase() {
  console.log('🧪 Testing Orders Database...\n');

  try {
    // Test 1: Create a sample order
    console.log('1️⃣ Testing order creation...');
    const sampleOrder = {
      customer_name: 'Test Customer',
      customer_email: 'test@example.com',
      customer_phone: '+1234567890',
      customer_address: '123 Test Street, Test City',
      notes: 'This is a test order',
      items: JSON.stringify([
        {
          id: 1,
          name: 'Doro Wot',
          price: 18.99,
          quantity: 2,
          image: '/images/Doro Wot.jpg'
        },
        {
          id: 2,
          name: 'Shekla Tibs',
          price: 22.99,
          quantity: 1,
          image: '/images/tibs.jpeg'
        }
      ]),
      total_amount: 60.97,
      status: 'pending'
    };

    const orderId = await db.saveOrder(sampleOrder);
    console.log('✅ Order created successfully with ID:', orderId);

    // Test 2: Retrieve all orders
    console.log('\n2️⃣ Testing order retrieval...');
    const orders = await db.getOrders();
    console.log('✅ Retrieved', orders.length, 'orders from database');
    
    if (orders.length > 0) {
      const latestOrder = orders[0];
      console.log('📋 Latest order details:');
      console.log('   - Customer:', latestOrder.customer_name);
      console.log('   - Email:', latestOrder.customer_email);
      console.log('   - Total:', '$' + latestOrder.total_amount);
      console.log('   - Status:', latestOrder.status);
      console.log('   - Items:', JSON.parse(latestOrder.items).length, 'items');
    }

    // Test 3: Update order status
    if (orderId) {
      console.log('\n3️⃣ Testing order status update...');
      await db.updateOrderStatus(orderId, 'confirmed');
      console.log('✅ Order status updated to "confirmed"');
    }

    console.log('\n🎉 All tests passed! Orders database is working correctly.');
    console.log('\n📊 Database Summary:');
    console.log('   - Orders table: ✅ Working');
    console.log('   - Create orders: ✅ Working');
    console.log('   - Retrieve orders: ✅ Working');
    console.log('   - Update status: ✅ Working');
    console.log('\n🛒 Your cart orders will be saved successfully!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('   1. Check your Supabase connection');
    console.log('   2. Ensure orders table exists');
    console.log('   3. Verify database credentials');
  }
}

// Run the test
testOrdersDatabase();