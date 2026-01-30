import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const MenuHighlights = () => {
  const { isDarkMode } = useTheme();
  
  const highlights = [
    {
      id: 1,
      name: 'Shekla Tibs',
      price: 'ETB 1150.00',
      description: 'Sizzling beef cubes with Ethiopian spices',
      image: '/images/tibs.jpeg',
      alt: 'Tibs'
    },
    {
      id: 2,
      name: 'Doro Wot',
      price: 950.00,
      description: 'Traditional chicken stew with berbere spice',
      image: '/images/Doro Wot.jpg',
      alt: 'Doro Wot'
    },
    {
      id: 3,
      name: 'Kitfo',
      price: 1250.00,
      description: 'Ethiopian steak tartare with mitmita spice',
      image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
      alt: 'Kitfo'
    }
  ];

  return (
    <section style={{
      padding: '100px 0',
      backgroundColor: isDarkMode ? '#34495e' : '#ffffff'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <h2 style={{
          fontSize: '3rem',
          color: isDarkMode ? '#ffffff' : '#2c3e50',
          marginBottom: '1rem',
          textAlign: 'center',
          fontFamily: 'Playfair Display, serif'
        }}>Menu Highlights</h2>
        <p style={{
          fontSize: '1.2rem',
          color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
          marginBottom: '4rem',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 4rem'
        }}>
          Discover our Ethiopian specialties and international favorites
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {highlights.map((item) => (
            <Link 
              to="/menu" 
              key={item.id} 
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease',
                height: '400px',
                cursor: 'pointer',
                background: isDarkMode ? '#2c3e50' : '#ffffff'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = isDarkMode ? '0 25px 50px rgba(0,0,0,0.6)' : '0 25px 50px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.15)';
              }}
              >
                <div style={{
                  position: 'relative',
                  height: '250px',
                  overflow: 'hidden'
                }}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(243, 156, 18, 0.9)',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    backdropFilter: 'blur(10px)'
                  }}>
                    ETB {typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    padding: '40px 20px 20px',
                    color: 'white'
                  }}>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '700',
                      margin: '0 0 5px 0',
                      fontFamily: 'Playfair Display, serif',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
                    }}>
                      {item.name}
                    </h3>
                  </div>
                </div>
                
                <div style={{
                  padding: '25px',
                  height: '150px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}>
                  <p style={{
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    margin: '0 0 20px 0'
                  }}>
                    {item.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      background: 'linear-gradient(135deg, #d35400, #e67e22)',
                      color: 'white',
                      padding: '12px 25px',
                      borderRadius: '25px',
                      fontSize: '1rem',
                      fontWeight: '600',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                    >
                      Order Now
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      color: '#f39c12',
                      fontSize: '1.1rem'
                    }}>
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div style={{
          textAlign: 'center',
          padding: '40px',
          background: isDarkMode 
            ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' 
            : 'linear-gradient(135deg, #fef5e7 0%, #fff5e6 100%)',
          borderRadius: '20px',
          border: `2px solid ${isDarkMode ? '#f39c12' : '#d35400'}`
        }}>
          <h3 style={{
            fontSize: '2rem',
            color: isDarkMode ? '#ffffff' : '#2c3e50',
            marginBottom: '15px',
            fontFamily: 'Playfair Display, serif'
          }}>
            Hungry for More?
          </h3>
          <p style={{
            fontSize: '1.2rem',
            color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
            marginBottom: '30px',
            maxWidth: '500px',
            margin: '0 auto 30px'
          }}>
            Explore our full menu with over 50 authentic Ethiopian dishes and international favorites
          </p>
          <Link 
            to="/menu"
            style={{
              background: 'linear-gradient(135deg, #d35400, #e67e22)',
              color: 'white',
              padding: '18px 40px',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(0,0,0,0.12)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
            }}
          >
            🍽️ View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;