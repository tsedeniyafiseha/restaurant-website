// Simple Migration Script
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://nzioipimfegguuaqvbul.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56aW9pcGltZmVnZ3V1YXF2YnVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3NzE4NDMsImV4cCI6MjA4NTM0Nzg0M30.YHOARugbREuwmcpTMJFi2IM8lTUiidl3pJK2rrIYiV4'
);

const sampleMenu = [
  { name: 'Shekla Tibs', price: 15.99, category: 'traditional', description: 'Sizzling beef cubes with Ethiopian spices', image: '/images/tibs.jpeg', featured: true },
  { name: 'Doro Wot', price: 14.99, category: 'traditional', description: 'Traditional Ethiopian chicken stew', image: '/images/Doro Wot.jpg', featured: true },
  { name: 'Margherita Pizza', price: 18.99, category: 'international', description: 'Classic Italian pizza', image: '/images/menu-pizza.jpg', featured: true },
  { name: 'Classic Burger', price: 14.99, category: 'international', description: 'Juicy beef patty with cheese', image: '/images/burger.jpg', featured: false }
];

async function migrate() {
  console.log('🚀 Running migration...');
  
  const { data: existing } = await supabase.from('menu_items').select('id').limit(1);
  
  if (existing && existing.length > 0) {
    console.log('📊 Data already exists');
    return;
  }

  const { error } = await supabase.from('menu_items').insert(sampleMenu);
  
  if (error) {
    console.error('❌ Migration failed:', error.message);
  } else {
    console.log('✅ Migration completed!');
  }
}

migrate();