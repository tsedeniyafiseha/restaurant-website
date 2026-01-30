import { useState, useEffect } from 'react';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/menu');
        if (response.ok) {
          const data = await response.json();
          setMenuItems(data);
        } else {
          console.log('Using static menu data');
          setMenuItems([
            {
              id: 1,
              name: 'Shekla Tibs',
              price: 15.99,
              description: 'Sizzling beef cubes with Ethiopian spices',
              image: '/images/tibs.jpeg',
              category: 'traditional'
            },
            {
              id: 2,
              name: 'Doro Wot',
              price: 14.99,
              description: 'Traditional Ethiopian chicken stew',
              image: '/images/Doro Wot.jpg',
              category: 'traditional'
            },
            {
              id: 3,
              name: 'Kitfo',
              price: 16.99,
              description: 'Ethiopian steak tartare with spices',
              image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
              category: 'traditional'
            },
            {
              id: 4,
              name: 'Margherita Pizza',
              price: 18.99,
              description: 'Classic Italian pizza',
              image: '/images/menu-pizza.jpg',
              category: 'international'
            },
            {
              id: 5,
              name: 'Classic Burger',
              price: 14.99,
              description: 'Juicy beef patty with cheese',
              image: '/images/burger.jpg',
              category: 'international'
            },
            {
              id: 6,
              name: 'Chicken Momo',
              price: 12.99,
              description: 'Nepalese steamed dumplings',
              image: '/images/momo.jpg',
              category: 'international'
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
        setMenuItems([
          {
            id: 1,
            name: 'Shekla Tibs',
            price: 15.99,
            description: 'Sizzling beef cubes with Ethiopian spices',
            image: '/images/tibs.jpeg',
            category: 'traditional'
          },
          {
            id: 2,
            name: 'Doro Wot',
            price: 14.99,
            description: 'Traditional Ethiopian chicken stew',
            image: '/images/Doro Wot.jpg',
            category: 'traditional'
          },
          {
            id: 3,
            name: 'Kitfo',
            price: 16.99,
            description: 'Ethiopian steak tartare with spices',
            image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
            category: 'traditional'
          },
          {
            id: 4,
            name: 'Margherita Pizza',
            price: 18.99,
            description: 'Classic Italian pizza',
            image: '/images/menu-pizza.jpg',
            category: 'international'
          },
          {
            id: 5,
            name: 'Classic Burger',
            price: 14.99,
            description: 'Juicy beef patty with cheese',
            image: '/images/burger.jpg',
            category: 'international'
          },
          {
            id: 6,
            name: 'Chicken Momo',
            price: 12.99,
            description: 'Nepalese steamed dumplings',
            image: '/images/momo.jpg',
            category: 'international'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const traditionalItems = filteredItems.filter(item => item.category === 'traditional');
  const internationalItems = filteredItems.filter(item => item.category === 'international');

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
      <section className="menu-hero">
        <div className="container text-center">
          <h1 className="hero-title text-white">Our Menu</h1>
          <p className="hero-subtitle text-white">
            Discover authentic Ethiopian flavors and international favorites
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

      <section className="food-menu">
        <div className="container">
          {traditionalItems.length > 0 && (
            <div className="menu-category">
              <h2 className="category-header">Traditional Ethiopian Dishes</h2>
              {traditionalItems.map((item) => (
                <div key={item.id} className="food-menu-box">
                  <div className="food-menu-img">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-responsive img-curve"
                    />
                  </div>
                  <div className="food-menu-desc">
                    <h4>{item.name}</h4>
                    <div className="cuisine-badge traditional">Traditional</div>
                    <p className="food-price">${item.price}</p>
                    <p className="food-detail">{item.description}</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              ))}
            </div>
          )}

          {internationalItems.length > 0 && (
            <div className="menu-category">
              <h2 className="category-header">International Favorites</h2>
              {internationalItems.map((item) => (
                <div key={item.id} className="food-menu-box">
                  <div className="food-menu-img">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="img-responsive img-curve"
                    />
                  </div>
                  <div className="food-menu-desc">
                    <h4>{item.name}</h4>
                    <div className="cuisine-badge international">International</div>
                    <p className="food-price">${item.price}</p>
                    <p className="food-detail">{item.description}</p>
                  </div>
                  <div className="clearfix"></div>
                </div>
              ))}
            </div>
          )}

          <div className="clearfix"></div>
        </div>
      </section>
    </>
  );
};

export default Menu;