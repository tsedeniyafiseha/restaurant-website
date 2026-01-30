import { useState, useEffect } from 'react';

const FeaturedDishes = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/menu');
        if (response.ok) {
          const data = await response.json();
          // Filter for featured items only
          const featuredItems = data.filter(item => item.featured);
          setMenuItems(featuredItems);
        } else {
          console.log('Using static menu data');
          // Fallback to static data
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
            }
          ]);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
        // Fallback to static data
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
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (loading) {
    return (
      <section className="food-menu">
        <div className="container">
          <h2 className="text-center">Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="food-menu">
      <div className="container">
        <h2 className="text-center">Featured Dishes</h2>
        <p className="section-subtitle text-center">
          Taste the authentic flavors of Ethiopia and international favorites
        </p>

        {menuItems.map((item) => (
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
              <div className={`cuisine-badge ${item.category}`}>
                {item.category}
              </div>
              <p className="food-price">${item.price}</p>
              <p className="food-detail">{item.description}</p>
            </div>
            <div className="clearfix"></div>
          </div>
        ))}

        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default FeaturedDishes;