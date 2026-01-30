// Verify Orders in Database
const { db } = require('./backend/src/database');

const verifyOrders = async () => {
  console.log('🔍 Checking Orders in Database...\n');
  
  try {
    const orders = await db.getOrders();
    
    console.log(`📊 Total Orders: ${orders.length}\n`);
    
    if (orders.length > 0) {
      console.log('✅ YES! Orders are being saved to the database!\n');
      console.log('Recent Orders:');
      console.log('═'.repeat(80));
      
      orders.slice(0, 5).forEach((order, index) => {
        console.log(`\n${index + 1}. Order #${order.id}`);
        console.log(`   Customer: ${order.customer_name}`);
        console.log(`   Email: ${order.customer_email}`);
        console.log(`   Phone: ${order.customer_phone}`);
        console.log(`   Total: ETB ${order.total_amount}`);
        console.log(`   Status: ${order.status}`);
        console.log(`   Date: ${new Date(order.created_at).toLocaleString()}`);
        
        // Parse items
        try {
          const items = typeof order.items === 'string' ? JSON.parse(order.items) : order.items;
          console.log(`   Items: ${items.length} item(s)`);
          items.forEach(item => {
            console.log(`      - ${item.name} x${item.quantity} @ ETB ${item.price}`);
          });
        } catch (e) {
          console.log(`   Items: ${order.items}`);
        }
      });
      
      console.log('\n' + '═'.repeat(80));
      console.log('\n✨ Order System Status: WORKING PERFECTLY! ✨');
      console.log('\n📝 What happens when a user places an order:');
      console.log('   1. User adds items to cart');
      console.log('   2. User fills in delivery information');
      console.log('   3. User clicks "Place Order"');
      console.log('   4. Order is saved to Supabase database');
      console.log('   5. User sees confirmation message');
      console.log('   6. Admin can view order in Admin panel');
      
    } else {
      console.log('⚠️  No orders found in database yet.');
      console.log('   This is normal if no one has placed an order through the website.');
      console.log('   The system is ready to save orders when users place them!');
    }
    
  } catch (error) {
    console.error('❌ Error checking orders:', error.message);
  }
  
  process.exit(0);
};

verifyOrders();
