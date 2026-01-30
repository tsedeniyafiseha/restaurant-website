-- Supabase Database Schema for Mesob Restaurant
-- Run these commands in your Supabase SQL editor

-- Enable Row Level Security (RLS)
-- You can disable this for development, enable for production

-- 1. Menu Items Table
CREATE TABLE IF NOT EXISTS menu_items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  image VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Orders Table
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

-- Insert Sample Menu Data with Ethiopian Birr (ETB) prices
INSERT INTO menu_items (name, price, category, description, image, featured) VALUES
('Shekla Tibs', 1150.00, 'traditional', 'Sizzling beef cubes sautéed with onions, peppers, and Ethiopian spices, served on a hot clay plate.', '/images/tibs.jpeg', TRUE),
('Doro Wot', 950.00, 'traditional', 'Traditional Ethiopian chicken stew with hard-boiled eggs, slow-cooked in berbere spice and served with injera.', '/images/Doro Wot.jpg', TRUE),
('Kitfo', 1250.00, 'traditional', 'Ethiopian steak tartare - minced raw beef marinated in mitmita spice and clarified butter, served with injera and ayib.', '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp', TRUE),
('Vegetarian Combo', 850.00, 'traditional', 'A variety of vegetarian dishes including lentils, cabbage, and collard greens served with injera.', '/images/image.jpg', FALSE),
('Lamb Tibs', 1350.00, 'traditional', 'Tender lamb pieces sautéed with onions, tomatoes, and jalapeños in Ethiopian spices.', '/images/tibs.jpeg', FALSE),
('Fish Gulash', 1000.00, 'traditional', 'Fresh fish cooked in a rich tomato-based sauce with Ethiopian spices.', '/images/image.jpg', FALSE),
('Injera Platter', 1100.00, 'traditional', 'Traditional Ethiopian sourdough flatbread served with assorted vegetarian and meat dishes.', '/images/image.jpg', TRUE),
('Zilzil Tibs', 1300.00, 'traditional', 'Strips of tender beef sautéed with onions, jalapeños, and rosemary in Ethiopian spices.', '/images/tibs.jpeg', FALSE),
('Margherita Pizza', 850.00, 'international', 'Classic Italian pizza with fresh mozzarella, basil, and tomato sauce on wood-fired crust.', '/images/menu-pizza.jpg', TRUE),
('Gourmet Burger', 950.00, 'international', 'Juicy beef patty with cheese, lettuce, tomato, and special sauce on a toasted bun.', '/images/burger.jpg', TRUE),
('Chicken Momo', 750.00, 'international', 'Traditional Nepalese steamed dumplings filled with seasoned chicken, served with spicy chutney.', '/images/momo.jpg', FALSE),
('Grilled Salmon', 1250.00, 'international', 'Fresh Atlantic salmon grilled to perfection with lemon herb butter and seasonal vegetables.', '/images/image.jpg', FALSE),
('Pepperoni Pizza', 1000.00, 'international', 'Loaded with premium pepperoni, mozzarella cheese, and Italian herbs on wood-fired crust.', '/images/pizza.jpg', TRUE),
('Chicken Caesar Salad', 800.00, 'international', 'Crisp romaine lettuce with grilled chicken, parmesan cheese, and homemade Caesar dressing.', '/images/image.jpg', FALSE),
('Pasta Carbonara', 900.00, 'international', 'Creamy Italian pasta with pancetta, eggs, parmesan cheese, and black pepper.', '/images/image.jpg', FALSE);

-- Enable RLS (Optional - for production security)
-- ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policies (Optional - for production)
-- CREATE POLICY "Allow public read access to menu_items" ON menu_items FOR SELECT USING (available = true);
-- CREATE POLICY "Allow public insert to contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
-- CREATE POLICY "Allow public insert to orders" ON orders FOR INSERT WITH CHECK (true);