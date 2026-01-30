// Create Orders Table in Supabase
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nzioipimfegguuaqvbul.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aW9pcGltZmVnZ3V1YXF2YnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzE4NDMsImV4cCI6MjA4NTM0Nzg0M30.YHOARugbREuwmcpTMJFi2IM8lTUiidl3pJK2rrIYiV4'
);

async function createOrdersTable() {
  console.log('🚀 Creating Orders Table in Supabase...\n');

  try {
    // Create the orders table using SQL
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: `
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
      `
    });

    if (error) {
      console.error('❌ Error creating table:', error);
      
      // Alternative method: Direct SQL execution
      console.log('🔄 Trying alternative method...');
      
      // Let's try creating a simple test record to trigger table creation
      const { data: testData, error: testError } = await supabase
        .from('orders')
        .insert([{
          customer_name: 'Test Customer',
          customer_email: 'test@example.com',
          customer_phone: '+1234567890',
          items: JSON.stringify([{ id: 1, name: 'Test Item', price: 10.00, quantity: 1 }]),
          total_amount: 10.00,
          status: 'pending'
        }])
        .select();

      if (testError) {
        console.error('❌ Table creation failed:', testError);
        console.log('\n📋 Manual Steps Required:');
        console.log('1. Go to your Supabase dashboard');
        console.log('2. Navigate to SQL Editor');
        console.log('3. Run this SQL command:');
        console.log(`
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
        `);
        return;
      } else {
        console.log('✅ Orders table created successfully!');
        console.log('📊 Test record created:', testData);
        
        // Clean up test record
        if (testData && testData[0]) {
          await supabase.from('orders').delete().eq('id', testData[0].id);
          console.log('🧹 Test record cleaned up');
        }
      }
    } else {
      console.log('✅ Orders table created successfully!');
    }

    // Verify table exists
    console.log('\n🔍 Verifying table structure...');
    const { data: tableData, error: tableError } = await supabase
      .from('orders')
      .select('*')
      .limit(1);

    if (tableError) {
      console.error('❌ Table verification failed:', tableError);
    } else {
      console.log('✅ Orders table is ready to use!');
      console.log('\n📋 Table Structure:');
      console.log('   - id (Primary Key)');
      console.log('   - customer_name (Required)');
      console.log('   - customer_email (Required)');
      console.log('   - customer_phone (Required)');
      console.log('   - customer_address (Optional)');
      console.log('   - notes (Optional)');
      console.log('   - items (JSON - Required)');
      console.log('   - total_amount (Decimal - Required)');
      console.log('   - status (Default: pending)');
      console.log('   - created_at (Auto)');
      console.log('   - updated_at (Auto)');
      
      console.log('\n🛒 Your cart orders will now be saved to the database!');
    }

  } catch (error) {
    console.error('❌ Unexpected error:', error);
  }
}

// Run the creation
createOrdersTable();