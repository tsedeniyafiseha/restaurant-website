import { useState, useEffect } from 'react';
import { useCart } from '../context/SimpleCartContext';
import { useTheme } from '../context/ThemeContext';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();
  const { isDarkMode } = useTheme();

  const handleAddToCart = (item) => {
    addToCart(item);
    
    // Show success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: white;
      border-left: 4px solid var(--primary-color);
      border-radius: 8px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.12);
      z-index: 10000;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      padding: 15px 20px;
      display: flex;
      align-items: center;
      gap: 15px;
    `;
    notification.innerHTML = `
      <span style="font-size: 1.5rem;">✅</span>
      <span style="color: var(--text-dark); font-weight: 500;">${item.name} added to cart!</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 3000);
  };

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
      price: 950.00,
      description: 'Ethiopia\'s national dish - tender chicken simmered in berbere spice sauce with hard-boiled eggs',
      image: '/images/Doro Wot.jpg',
      category: 'traditional',
      spicy: 'hot',
      popular: true,
      available: true,
      isVeg: false,
      chefSpecial: true,
      ingredients: ['Chicken', 'Berbere', 'Onions', 'Eggs']
    },
    {
      id: 2,
      name: 'Shekla Tibs',
      price: 1150.00,
      description: 'Sizzling beef cubes marinated in Ethiopian spices, served on a hot plate with vegetables',
      image: '/images/tibs.jpeg',
      category: 'traditional',
      spicy: 'medium',
      popular: true,
      available: true,
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Beef', 'Onions', 'Peppers', 'Ethiopian Spices']
    },
    {
      id: 3,
      name: 'Kitfo',
      price: 1250.00,
      description: 'Ethiopian steak tartare seasoned with mitmita spice and clarified butter, served with injera',
      image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
      category: 'traditional',
      spicy: 'hot',
      popular: true,
      available: true,
      isVeg: false,
      chefSpecial: true,
      ingredients: ['Raw Beef', 'Mitmita', 'Clarified Butter', 'Cheese']
    },
    {
      id: 4,
      name: 'Vegetarian Combo',
      price: 850.00,
      description: 'A variety of vegetarian dishes including lentils, cabbage, and collard greens served with injera',
      image: '/images/image.jpg',
      category: 'traditional',
      spicy: 'mild',
      popular: false,
      available: true,
      isVeg: true,
      chefSpecial: false,
      ingredients: ['Lentils', 'Cabbage', 'Collard Greens', 'Injera']
    },
    {
      id: 5,
      name: 'Lamb Tibs',
      price: 1350.00,
      description: 'Tender lamb pieces sautéed with onions, tomatoes, and jalapeños in Ethiopian spices',
      image: '/images/tibs.jpeg',
      category: 'traditional',
      spicy: 'medium',
      popular: false,
      available: false, // Sold out example
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Lamb', 'Onions', 'Tomatoes', 'Jalapeños']
    },
    {
      id: 6,
      name: 'Fish Gulash',
      price: 1000.00,
      description: 'Fresh fish cooked in a rich tomato-based sauce with Ethiopian spices',
      image: '/images/image.jpg',
      category: 'traditional',
      spicy: 'mild',
      popular: false,
      available: true,
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Fish', 'Tomatoes', 'Onions', 'Ethiopian Spices']
    },
    {
      id: 7,
      name: 'Injera Platter',
      price: 1100.00,
      description: 'Traditional Ethiopian sourdough flatbread served with assorted vegetarian and meat dishes',
      image: '/images/image.jpg',
      category: 'traditional',
      spicy: 'medium',
      popular: true,
      available: true,
      isVeg: true,
      chefSpecial: false,
      ingredients: ['Injera', 'Lentils', 'Vegetables', 'Spices']
    },
    {
      id: 8,
      name: 'Zilzil Tibs',
      price: 1300.00,
      description: 'Strips of tender beef sautéed with onions, jalapeños, and rosemary in Ethiopian spices',
      image: '/images/tibs.jpeg',
      category: 'traditional',
      spicy: 'medium',
      popular: false,
      available: true,
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Beef Strips', 'Onions', 'Jalapeños', 'Rosemary']
    },
    {
      id: 9,
      name: 'Margherita Pizza',
      price: 850.00,
      description: 'Classic Italian pizza with fresh mozzarella, tomatoes, and basil on crispy thin crust',
      image: '/images/menu-pizza.jpg',
      category: 'international',
      spicy: 'none',
      popular: true,
      available: true,
      isVeg: true,
      chefSpecial: false,
      ingredients: ['Mozzarella', 'Tomatoes', 'Basil', 'Pizza Dough']
    },
    {
      id: 10,
      name: 'Gourmet Burger',
      price: 950.00,
      description: 'Juicy beef patty with aged cheddar, caramelized onions, and special sauce on brioche bun',
      image: '/images/burger.jpg',
      category: 'international',
      spicy: 'none',
      popular: true,
      available: true,
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Beef Patty', 'Cheddar', 'Onions', 'Brioche Bun']
    },
    {
      id: 11,
      name: 'Chicken Momo',
      price: 750.00,
      description: 'Nepalese steamed dumplings filled with seasoned chicken, served with spicy dipping sauce',
      image: '/images/momo.jpg',
      category: 'international',
      spicy: 'medium',
      popular: false,
      available: true,
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Chicken', 'Dumpling Wrapper', 'Spices', 'Dipping Sauce']
    },
    {
      id: 12,
      name: 'Grilled Salmon',
      price: 1250.00,
      description: 'Fresh Atlantic salmon grilled to perfection with lemon herb butter and seasonal vegetables',
      image: '/images/image.jpg',
      category: 'international',
      spicy: 'none',
      popular: false,
      available: true,
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Salmon', 'Lemon', 'Herbs', 'Vegetables']
    },
    {
      id: 13,
      name: 'Pepperoni Pizza',
      price: 1000.00,
      description: 'Loaded with premium pepperoni, mozzarella cheese, and Italian herbs on wood-fired crust',
      image: '/images/pizza.jpg',
      category: 'international',
      spicy: 'mild',
      popular: true,
      available: false, // Sold out example
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Pepperoni', 'Mozzarella', 'Italian Herbs', 'Pizza Dough']
    },
    {
      id: 14,
      name: 'Chicken Caesar Salad',
      price: 800.00,
      description: 'Crisp romaine lettuce with grilled chicken, parmesan cheese, and homemade Caesar dressing',
      image: '/images/image.jpg',
      category: 'international',
      spicy: 'none',
      popular: false,
      available: true,
      isVeg: false,
      chefSpecial: false,
      ingredients: ['Romaine', 'Grilled Chicken', 'Parmesan', 'Caesar Dressing']
    },
    {
      id: 15,
      name: 'Pasta Carbonara',
      price: 900.00,
      description: 'Creamy Italian pasta with pancetta, eggs, parmesan cheese, and black pepper',
      image: '/images/image.jpg',
      category: 'international',
      spicy: 'none',
      popular: false,
      available: true,
      isVeg: false,
      chefSpecial: false,
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

  // Apply category filter
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
    <div style={{
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#2c3e50',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section className="menu-hero" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' 
          : 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
        padding: '120px 0 80px',
        color: 'white'
      }}>
        <div className="container text-center">
          <h1 className="hero-title text-white" style={{
            fontSize: '4rem',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif'
          }}>Our Delicious Menu</h1>
          <p className="hero-subtitle text-white" style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Discover authentic Ethiopian flavors and international favorites crafted with love
          </p>
          <form className="search-form" onSubmit={handleSearch} style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="search"
              name="search"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                padding: '15px 25px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1.1rem',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#2c3e50'
              }}
            />
            <input 
              type="submit" 
              name="submit" 
              value="Search"
              style={{
                padding: '15px 30px',
                borderRadius: '50px',
                border: 'none',
                background: isDarkMode ? '#f39c12' : 'rgba(255, 255, 255, 0.9)',
                color: isDarkMode ? 'white' : '#d35400',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '1.1rem'
              }}
            />
          </form>
        </div>
      </section>

      {/* Menu Stats Section */}
      <section style={{ 
        padding: '60px 0', 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)' 
          : 'linear-gradient(135deg, #fff5e6 0%, #ffffff 100%)' 
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            <div style={{ 
              padding: '30px', 
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white', 
              borderRadius: '15px', 
              boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
            }}>
              <h3 style={{ fontSize: '2.5rem', color: isDarkMode ? '#f39c12' : '#d35400', marginBottom: '10px' }}>25+</h3>
              <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', fontWeight: '500' }}>Signature Dishes</p>
            </div>
            <div style={{ 
              padding: '30px', 
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white', 
              borderRadius: '15px', 
              boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
            }}>
              <h3 style={{ fontSize: '2.5rem', color: isDarkMode ? '#f39c12' : '#d35400', marginBottom: '10px' }}>100%</h3>
              <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', fontWeight: '500' }}>Fresh Ingredients</p>
            </div>
            <div style={{ 
              padding: '30px', 
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white', 
              borderRadius: '15px', 
              boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
            }}>
              <h3 style={{ fontSize: '2.5rem', color: isDarkMode ? '#f39c12' : '#d35400', marginBottom: '10px' }}>15+</h3>
              <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', fontWeight: '500' }}>Years Experience</p>
            </div>
            <div style={{ 
              padding: '30px', 
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'white', 
              borderRadius: '15px', 
              boxShadow: isDarkMode ? '0 10px 30px rgba(0,0,0,0.3)' : '0 10px 30px rgba(0,0,0,0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
            }}>
              <h3 style={{ fontSize: '2.5rem', color: isDarkMode ? '#f39c12' : '#d35400', marginBottom: '10px' }}>5⭐</h3>
              <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d', fontWeight: '500' }}>Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ 
        padding: '40px 0', 
        background: isDarkMode ? '#2c3e50' : 'white' 
      }}>
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
                  background: activeCategory === category.id 
                    ? 'linear-gradient(135deg, #d35400, #e67e22)' 
                    : isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#f8f9fa',
                  color: activeCategory === category.id 
                    ? 'white' 
                    : isDarkMode ? '#ffffff' : '#2c3e50',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '1rem',
                  border: `1px solid ${isDarkMode && activeCategory !== category.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`
                }}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="food-menu" style={{ 
        padding: '60px 0',
        backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff'
      }}>
        <div className="container">
          {filteredItems.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
              {filteredItems.map((item) => (
                <div key={item.id} className="modern-menu-card" style={{
                  background: isDarkMode ? '#2c3e50' : '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`
                }}>
                  <div className="menu-card-image" style={{ position: 'relative', height: '250px' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-responsive"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    {item.popular && (
                      <div className="popular-badge" style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        background: 'linear-gradient(135deg, #f39c12, #e67e22)',
                        color: 'white',
                        padding: '8px 15px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>
                        ⭐ Popular
                      </div>
                    )}
                    <div className="spicy-indicator" style={{
                      position: 'absolute',
                      top: '15px',
                      right: '15px',
                      fontSize: '1.2rem'
                    }}>
                      {getSpicyIcon(item.spicy)}
                    </div>
                  </div>
                  <div className="menu-card-content" style={{ padding: '25px' }}>
                    <div className="menu-card-header" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}>
                      <h3 style={{
                        fontSize: '1.5rem',
                        color: isDarkMode ? '#ffffff' : '#2c3e50',
                        marginBottom: '5px',
                        fontFamily: 'Playfair Display, serif'
                      }}>{item.name}</h3>
                      <span className="price" style={{
                        fontSize: '1.8rem',
                        fontWeight: '800',
                        color: isDarkMode ? '#f39c12' : '#d35400',
                        fontFamily: 'Playfair Display, serif'
                      }}>ETB {item.price.toFixed(2)}</span>
                    </div>
                    <div className={`cuisine-badge ${item.category}`} style={{
                      display: 'inline-block',
                      padding: '5px 12px',
                      borderRadius: '15px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      marginBottom: '15px',
                      background: item.category === 'traditional' 
                        ? (isDarkMode ? 'rgba(243, 156, 18, 0.2)' : 'rgba(211, 84, 0, 0.1)')
                        : (isDarkMode ? 'rgba(52, 152, 219, 0.2)' : 'rgba(52, 152, 219, 0.1)'),
                      color: item.category === 'traditional' 
                        ? (isDarkMode ? '#f39c12' : '#d35400')
                        : (isDarkMode ? '#3498db' : '#2980b9')
                    }}>
                      {item.category === 'traditional' ? '🇪🇹 Ethiopian' : '🌍 International'}
                    </div>
                    <p className="description" style={{
                      color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                      lineHeight: '1.6',
                      marginBottom: '15px',
                      fontSize: '1rem'
                    }}>{item.description}</p>
                    {item.ingredients && (
                      <div className="ingredients" style={{
                        marginBottom: '20px',
                        fontSize: '0.9rem',
                        color: isDarkMode ? '#95a5a6' : '#95a5a6'
                      }}>
                        <strong style={{ color: isDarkMode ? '#f39c12' : '#d35400' }}>Ingredients: </strong>
                        {item.ingredients.join(', ')}
                      </div>
                    )}
                    <button 
                      className="order-btn"
                      onClick={() => handleAddToCart(item)}
                      style={{
                        width: '100%',
                        padding: '12px 20px',
                        background: 'linear-gradient(135deg, #d35400, #e67e22)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '25px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: '15px',
                        fontSize: '1rem'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="container text-center" style={{ padding: '4rem 0' }}>
              <h3 style={{ color: isDarkMode ? '#ffffff' : '#2c3e50' }}>No menu items found</h3>
              <p style={{ color: isDarkMode ? '#bdc3c7' : '#7f8c8d' }}>Try adjusting your search or check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers Section */}
      <section style={{ 
        padding: '80px 0', 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)' 
          : 'linear-gradient(135deg, #fef5e7 0%, #fff5e6 100%)' 
      }}>
        <div className="container">
          <h2 className="text-center" style={{ 
            marginBottom: '50px',
            fontSize: '3rem',
            color: isDarkMode ? '#ffffff' : '#2c3e50',
            fontFamily: 'Playfair Display, serif'
          }}>Special Offers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div className="offer-card" style={{
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
              padding: '40px 30px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
            }}>
              <div className="offer-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>🍽️</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: isDarkMode ? '#ffffff' : '#2c3e50', 
                marginBottom: '15px',
                fontFamily: 'Playfair Display, serif'
              }}>Family Combo</h3>
              <p style={{ 
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>Get any 3 traditional dishes + injera for only ETB 2250</p>
              <div className="offer-price" style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: isDarkMode ? '#f39c12' : '#d35400'
              }}>Save ETB 450</div>
            </div>
            <div className="offer-card" style={{
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
              padding: '40px 30px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
            }}>
              <div className="offer-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>🎉</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: isDarkMode ? '#ffffff' : '#2c3e50', 
                marginBottom: '15px',
                fontFamily: 'Playfair Display, serif'
              }}>Happy Hour</h3>
              <p style={{ 
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>20% off all appetizers from 3-6 PM daily</p>
              <div className="offer-price" style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: isDarkMode ? '#f39c12' : '#d35400'
              }}>20% OFF</div>
            </div>
            <div className="offer-card" style={{
              background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#ffffff',
              padding: '40px 30px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.3)' : '0 15px 35px rgba(0,0,0,0.1)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'transparent'}`
            }}>
              <div className="offer-icon" style={{ fontSize: '3rem', marginBottom: '20px' }}>☕</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                color: isDarkMode ? '#ffffff' : '#2c3e50', 
                marginBottom: '15px',
                fontFamily: 'Playfair Display, serif'
              }}>Coffee Ceremony</h3>
              <p style={{ 
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d', 
                marginBottom: '20px',
                lineHeight: '1.6'
              }}>Traditional Ethiopian coffee ceremony with any meal</p>
              <div className="offer-price" style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: isDarkMode ? '#f39c12' : '#d35400'
              }}>Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Recommendations */}
      <section style={{ 
        padding: '80px 0', 
        background: isDarkMode ? '#1a1a1a' : 'white' 
      }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '3rem',
              color: isDarkMode ? '#ffffff' : '#2c3e50',
              fontFamily: 'Playfair Display, serif'
            }}>Chef's Recommendations</h2>
            <p className="section-subtitle" style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Our head chef's personal favorites, crafted with passion and authentic flavors
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {filteredItems.filter(item => item.popular).slice(0, 3).map((item) => (
              <div key={`chef-${item.id}`} style={{
                background: isDarkMode 
                  ? 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)' 
                  : 'linear-gradient(135deg, #fff5e6 0%, #ffffff 100%)',
                borderRadius: '20px',
                padding: '30px',
                textAlign: 'center',
                boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.1)',
                border: `2px solid ${isDarkMode ? '#f39c12' : '#f39c12'}`,
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
                <h3 style={{ 
                  color: isDarkMode ? '#ffffff' : '#d35400', 
                  marginBottom: '10px', 
                  fontFamily: 'Playfair Display, serif' 
                }}>
                  {item.name}
                </h3>
                <p style={{ 
                  color: isDarkMode ? '#bdc3c7' : '#7f8c8d', 
                  marginBottom: '15px', 
                  fontSize: '0.95rem' 
                }}>
                  {item.description}
                </p>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '800',
                  color: isDarkMode ? '#f39c12' : '#d35400',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  ETB {item.price.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ 
        padding: '80px 0', 
        background: isDarkMode 
          ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' 
          : 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', 
        color: 'white' 
      }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h2 style={{ 
              color: 'white',
              fontSize: '3rem',
              fontFamily: 'Playfair Display, serif'
            }}>Why Choose Mesob Restaurant?</h2>
            <p style={{ 
              color: '#bdc3c7', 
              fontSize: '1.2rem', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
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
    </div>
  );
};

export default Menu;