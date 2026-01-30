import { useState, useEffect } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        console.log('Fetching menu from API...');
        const response = await fetch('http://localhost:3001/api/menu');
        console.log('Response status:', response.status);
        
        if (response.ok) {
          const result = await response.json();
          console.log('API Response:', result);
          
          if (result.success && Array.isArray(result.data)) {
            console.log('Using API data:', result.data.length, 'items');
            setMenuItems(result.data);
          } else if (Array.isArray(result)) {
            console.log('Using direct array data:', result.length, 'items');
            setMenuItems(result);
          } else {
            console.log('API response format unexpected, using static menu data');
            setMenuItems(getStaticMenuData());
          }
        } else {
          console.log('API request failed with status:', response.status);
          setMenuItems(getStaticMenuData());
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
        setMenuItems(getStaticMenuData());
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const getStaticMenuData = () => [
    {
      id: 1,
      name: 'Doro Wot',
      price: 18.99,
      description: 'Ethiopia\'s national dish - tender chicken simmered in berbere spice sauce with hard-boiled eggs',
      image: '/images/Doro Wot.jpg',
      category: 'traditional',
      spicy: 'hot',
      popular: true,
      ingredients: ['Chicken', 'Berbere', 'Onions', 'Eggs']
    },
    {
      id: 2,
      name: 'Shekla Tibs',
      price: 22.99,
      description: 'Sizzling beef cubes marinated in Ethiopian spices, served on a hot plate with vegetables',
      image: '/images/tibs.jpeg',
      category: 'traditional',
      spicy: 'medium',
      popular: true,
      ingredients: ['Beef', 'Onions', 'Peppers', 'Ethiopian Spices']
    },
    {
      id: 3,
      name: 'Kitfo',
      price: 24.99,
      description: 'Ethiopian steak tartare seasoned with mitmita spice and clarified butter, served with injera',
      image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
      category: 'traditional',
      spicy: 'hot',
      popular: true,
      ingredients: ['Raw Beef', 'Mitmita', 'Clarified Butter', 'Cheese']
    },
    {
      id: 4,
      name: 'Vegetarian Combo',
      price: 16.99,
      description: 'A variety of vegetarian dishes including lentils, cabbage, and collard greens served with injera',
      image: '/images/image.jpg',
      category: 'traditional',
      spicy: 'mild',
      popular: false,
      ingredients: ['Lentils', 'Cabbage', 'Collard Greens', 'Injera']
    },
    {
      id: 5,
      name: 'Lamb Tibs',
      price: 26.99,
      description: 'Tender lamb pieces sautéed with onions, tomatoes, and jalapeños in Ethiopian spices',
      image: '/images/tibs.jpeg',
      category: 'traditional',
      spicy: 'medium',
      popular: false,
      ingredients: ['Lamb', 'Onions', 'Tomatoes', 'Jalapeños']
    },
    {
      id: 6,
      name: 'Fish Gulash',
      price: 19.99,
      description: 'Fresh fish cooked in a rich tomato-based sauce with Ethiopian spices',
      image: '/images/image.jpg',
      category: 'traditional',
      spicy: 'mild',
      popular: false,
      ingredients: ['Fish', 'Tomatoes', 'Onions', 'Ethiopian Spices']
    },
    {
      id: 7,
      name: 'Injera Platter',
      price: 21.99,
      description: 'Traditional Ethiopian sourdough flatbread served with assorted vegetarian and meat dishes',
      image: '/images/image.jpg',
      category: 'traditional',
      spicy: 'medium',
      popular: true,
      ingredients: ['Injera', 'Lentils', 'Vegetables', 'Spices']
    },
    {
      id: 8,
      name: 'Zilzil Tibs',
      price: 25.99,
      description: 'Strips of tender beef sautéed with onions, jalapeños, and rosemary in Ethiopian spices',
      image: '/images/tibs.jpeg',
      category: 'traditional',
      spicy: 'medium',
      popular: false,
      ingredients: ['Beef Strips', 'Onions', 'Jalapeños', 'Rosemary']
    },
    {
      id: 9,
      name: 'Margherita Pizza',
      price: 16.99,
      description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil on crispy thin crust',
      image: '/images/menu-pizza.jpg',
      category: 'international',
      spicy: 'none',
      popular: true,
      ingredients: ['Mozzarella', 'Tomatoes', 'Basil', 'Pizza Dough']
    },
    {
      id: 10,
      name: 'Gourmet Burger',
      price: 18.99,
      description: 'Juicy beef patty with aged cheddar, caramelized onions, and special sauce on brioche bun',
      image: '/images/burger.jpg',
      category: 'international',
      spicy: 'none',
      popular: true,
      ingredients: ['Beef Patty', 'Cheddar', 'Onions', 'Brioche Bun']
    },
    {
      id: 11,
      name: 'Chicken Momo',
      price: 14.99,
      description: 'Nepalese steamed dumplings filled with seasoned chicken, served with spicy dipping sauce',
      image: '/images/momo.jpg',
      category: 'international',
      spicy: 'medium',
      popular: false,
      ingredients: ['Chicken', 'Dumpling Wrapper', 'Spices', 'Dipping Sauce']
    },
    {
      id: 12,
      name: 'Grilled Salmon',
      price: 24.99,
      description: 'Fresh Atlantic salmon grilled to perfection with lemon herb butter and seasonal vegetables',
      image: '/images/image.jpg',
      category: 'international',
      spicy: 'none',
      popular: false,
      ingredients: ['Salmon', 'Lemon', 'Herbs', 'Vegetables']
    },
    {
      id: 13,
      name: 'Pepperoni Pizza',
      price: 19.99,
      description: 'Loaded with premium pepperoni, mozzarella cheese, and Italian herbs on wood-fired crust',
      image: '/images/pizza.jpg',
      category: 'international',
      spicy: 'mild',
      popular: true,
      ingredients: ['Pepperoni', 'Mozzarella', 'Italian Herbs', 'Pizza Dough']
    },
    {
      id: 14,
      name: 'Chicken Caesar Salad',
      price: 15.99,
      description: 'Crisp romaine lettuce with grilled chicken, parmesan cheese, and homemade Caesar dressing',
      image: '/images/image.jpg',
      category: 'international',
      spicy: 'none',
      popular: false,
      ingredients: ['Romaine', 'Grilled Chicken', 'Parmesan', 'Caesar Dressing']
    },
    {
      id: 15,
      name: 'Pasta Carbonara',
      price: 17.99,
      description: 'Creamy Italian pasta with pancetta, eggs, parmesan cheese, and black pepper',
      image: '/images/image.jpg',
      category: 'international',
      spicy: 'none',
      popular: false,
      ingredients: ['Pasta', 'Pancetta', 'Eggs', 'Parmesan']
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const categories = [
    { id: 'all', name: 'All Items', icon: '🍽️' },
    { id: 'traditional', name: 'Ethiopian Traditional', icon: '🇪🇹' },
    { id: 'international', name: 'International', icon: '🌍' },
    { id: 'popular', name: 'Popular', icon: '⭐' }
  ];

  const safeMenuItems = Array.isArray(menuItems) ? menuItems : [];
  
  let filteredItems = safeMenuItems.filter(item =>
    item.name && item.description &&
    (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (activeCategory === 'popular') {
    filteredItems = filteredItems.filter(item => item.popular);
  } else if (activeCategory !== 'all') {
    filteredItems = filteredItems.filter(item => item.category === activeCategory);
  }

  const getSpicyIcon = (spicy) => {
    switch (spicy) {
      case 'hot': return '🌶️🌶️🌶️';
      case 'medium': return '🌶️🌶️';
      case 'mild': return '🌶️';
      default: return '';
    }
  };

  if (loading) {
    return (
      <div className="menu-hero">
        <div className="container text-center">
          <h1 className="hero-title text-white">Loading Menu...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="container text-center">
          <h1 className="hero-title text-white">Our Delicious Menu</h1>
          <p className="hero-subtitle text-white">
            Discover authentic Ethiopian flavors and international favorites crafted with love
          </p>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="search"
              name="search"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <input type="submit" name="submit" value="Search" />
          </form>
        </div>
      </section>

      {/* Menu Stats Section */}
      <section style={{ padding: '60px 0', background: 'linear-gradient(135deg, #fff5e6 0%, #ffffff 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <div style={{ padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#d35400', marginBottom: '10px' }}>25+</h3>
              <p style={{ color: '#7f8c8d', fontWeight: '500' }}>Signature Dishes</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#d35400', marginBottom: '10px' }}>100%</h3>
              <p style={{ color: '#7f8c8d', fontWeight: '500' }}>Fresh Ingredients</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#d35400', marginBottom: '10px' }}>15+</h3>
              <p style={{ color: '#7f8c8d', fontWeight: '500' }}>Years Experience</p>
            </div>
            <div style={{ padding: '30px', background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <h3 style={{ fontSize: '2.5rem', color: '#d35400', marginBottom: '10px' }}>5⭐</h3>
              <p style={{ color: '#7f8c8d', fontWeight: '500' }}>Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '40px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '40px' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: '12px 24px',
                  border: 'none',
                  borderRadius: '50px',
                  background: activeCategory === category.id ? 'linear-gradient(135deg, #d35400, #e67e22)' : '#f8f9fa',
                  color: activeCategory === category.id ? 'white' : '#2c3e50',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem'
                }}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="food-menu" style={{ padding: '60px 0' }}>
        <div className="container">
          {filteredItems.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {filteredItems.map((item) => (
                <div key={item.id} className="modern-menu-card">
                  <div className="menu-card-image">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-responsive"
                    />
                    {item.popular && (
                      <div className="popular-badge">
                        ⭐ Popular
                      </div>
                    )}
                    <div className="spicy-indicator">
                      {getSpicyIcon(item.spicy)}
                    </div>
                  </div>
                  <div className="menu-card-content">
                    <div className="menu-card-header">
                      <h3>{item.name}</h3>
                      <span className="price">${item.price}</span>
                    </div>
                    <div className={`cuisine-badge ${item.category}`}>
                      {item.category === 'traditional' ? '🇪🇹 Ethiopian' : '🌍 International'}
                    </div>
                    <p className="description">{item.description}</p>
                    {item.ingredients && (
                      <div className="ingredients">
                        <strong>Ingredients: </strong>
                        {item.ingredients.join(', ')}
                      </div>
                    )}
                    <button className="order-btn">
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="container text-center" style={{ padding: '4rem 0' }}>
              <h3>No menu items found</h3>
              <p>Try adjusting your search or check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #fef5e7 0%, #fff5e6 100%)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '50px' }}>Special Offers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="offer-card">
              <div className="offer-icon">🍽️</div>
              <h3>Family Combo</h3>
              <p>Get any 3 traditional dishes + injera for only $45</p>
              <div className="offer-price">Save $15</div>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🎉</div>
              <h3>Happy Hour</h3>
              <p>20% off all appetizers from 3-6 PM daily</p>
              <div className="offer-price">20% OFF</div>
            </div>
            <div className="offer-card">
              <div className="offer-icon">☕</div>
              <h3>Coffee Ceremony</h3>
              <p>Traditional Ethiopian coffee ceremony with any meal</p>
              <div className="offer-price">Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Recommendations */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2>Chef's Recommendations</h2>
            <p className="section-subtitle">
              Our head chef's personal favorites, crafted with passion and authentic flavors
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {filteredItems.filter(item => item.popular).slice(0, 3).map((item) => (
              <div key={`chef-${item.id}`} style={{
                background: 'linear-gradient(135deg, #fff5e6 0%, #ffffff 100%)',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                border: '2px solid #f39c12',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                  color: 'white',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }}>
                  👨‍🍳 Chef's Pick
                </div>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    margin: '0 auto 20px',
                    border: '4px solid #f39c12',
                    boxShadow: '0 8px 25px rgba(243, 156, 18, 0.3)'
                  }}
                />
                <h3 style={{ color: '#d35400', marginBottom: '10px', fontFamily: 'Playfair Display, serif' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#7f8c8d', marginBottom: '15px', fontSize: '0.95rem' }}>
                  {item.description}
                </p>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: '#d35400',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  ${item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '80px 0', background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', color: 'white' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ color: 'white' }}>Why Choose Mesob Restaurant?</h2>
            <p style={{ color: '#bdc3c7', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              Experience authentic Ethiopian cuisine with a modern twist in a warm, welcoming atmosphere
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🌿</div>
              <h3 style={{ color: '#f39c12', marginBottom: '15px' }}>Fresh Ingredients</h3>
              <p style={{ color: '#bdc3c7', lineHeight: '1.6' }}>
                We source the finest, freshest ingredients daily to ensure authentic flavors in every dish
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>👨‍🍳</div>
              <h3 style={{ color: '#f39c12', marginBottom: '15px' }}>Expert Chefs</h3>
              <p style={{ color: '#bdc3c7', lineHeight: '1.6' }}>
                Our experienced chefs bring generations of Ethiopian culinary tradition to your table
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏠</div>
              <h3 style={{ color: '#f39c12', marginBottom: '15px' }}>Warm Atmosphere</h3>
              <p style={{ color: '#bdc3c7', lineHeight: '1.6' }}>
                Enjoy your meal in our cozy, family-friendly environment that feels like home
              </p>
            </div>
            <div style={{ textAlign: 'center', padding: '30px 20px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ color: '#f39c12', marginBottom: '15px' }}>Fast Service</h3>
              <p style={{ color: '#bdc3c7', lineHeight: '1.6' }}>
                Quick, friendly service without compromising on quality or authenticity
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;