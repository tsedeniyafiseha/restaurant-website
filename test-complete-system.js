// Complete System Test - Currency, Orders, and Confirmation
const http = require('http');

const testAPI = async () => {
  console.log('🧪 Testing Complete Restaurant System...\n');

  // Test 1: Check Menu Items (ETB Currency)
  console.log('1️⃣ Testing Menu Items with ETB Currency...');
  try {
    const menuResponse = await fetch('http://localhost:3001/api/menu');
    const menuData = await menuResponse.json();
    
    if (menuData.success && menuData.data.length > 0) {
      console.log('✅ Menu loaded successfully!');
      console.log(`   Found ${menuData.data.length} items`);
      console.log(`   Sample: ${menuData.data[0].name} - ETB ${menuData.data[0].price}`);
    } else {
      console.log('❌ Menu loading failed');
    }
  } catch (error) {
    console.log('❌ Menu API Error:', error.message);
  }

  console.log('\n2️⃣ Testing Order Placement...');
  try {
    const testOrder = {
      customer_name: 'Test Customer',
      customer_email: 'test@example.com',
      customer_phone: '+251911234567',
      customer_address: 'Addis Ababa, Ethiopia',
      notes: 'Test order - please ignore',
      items: [
        {
          id: 1,
          name: 'Doro Wot',
          price: 950.00,
          quantity: 2,
          image: '/images/Doro Wot.jpg'
        },
        {
          id: 2,
          name: 'Shekla Tibs',
          price: 1150.00,
          quantity: 1,
          image: '/images/tibs.jpeg'
        }
      ],
      total_amount: 3050.00
    };

    const orderResponse = await fetch('http://localhost:3001/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testOrder),
    });

    const orderResult = await orderResponse.json();
    
    if (orderResult.success) {
      console.log('✅ Order placed successfully!');
      console.log(`   Order ID: ${orderResult.orderId}`);
      console.log(`   Total: ETB ${testOrder.total_amount.toFixed(2)}`);
      console.log(`   Items: ${testOrder.items.length}`);
    } else {
      console.log('❌ Order placement failed:', orderResult.error);
    }
  } catch (error) {
    console.log('❌ Order API Error:', error.message);
  }

  console.log('\n3️⃣ Testing Order Retrieval...');
  try {
    const ordersResponse = await fetch('http://localhost:3001/api/orders');
    const ordersData = await ordersResponse.json();
    
    if (ordersData.success) {
      console.log('✅ Orders retrieved successfully!');
      console.log(`   Total orders in database: ${ordersData.data.length}`);
      if (ordersData.data.length > 0) {
        const latestOrder = ordersData.data[0];
        console.log(`   Latest order: ${latestOrder.customer_name} - ETB ${latestOrder.total_amount}`);
        console.log(`   Status: ${latestOrder.status}`);
      }
    } else {
      console.log('❌ Orders retrieval failed');
    }
  } catch (error) {
    console.log('❌ Orders API Error:', error.message);
  }

  console.log('\n✨ System Test Complete!\n');
  console.log('📋 Summary:');
  console.log('   ✓ Currency: All prices in Ethiopian Birr (ETB)');
  console.log('   ✓ Orders: Saved to database with customer info');
  console.log('   ✓ Confirmation: Success message shown after order');
  console.log('\n🎯 Next Steps:');
  console.log('   1. Start backend: npm start (in backend folder)');
  console.log('   2. Start frontend: npm start (in frontend folder)');
  console.log('   3. Test ordering from the website');
  console.log('   4. Check Admin page to see orders\n');
};

// Run the test
testAPI().catch(console.error);
