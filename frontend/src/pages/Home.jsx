import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="home-page" style={{
      backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
      color: isDarkMode ? '#ffffff' : '#2c3e50'
    }}>
      {/* Hero Section */}
      <section className="hero-section" style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)' 
          : 'linear-gradient(135deg, #fef5e7 0%, #fff5e6 100%)',
        padding: '120px 0 100px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '60px',
            alignItems: 'center',
            minHeight: '70vh',
            position: 'relative',
            zIndex: 2
          }}>
            <div className="hero-content-left">
              <div className="hero-badge" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '0.95rem',
                color: isDarkMode ? '#f39c12' : '#d35400',
                fontWeight: '600',
                marginBottom: '2rem',
                boxShadow: isDarkMode ? 'none' : '0 5px 15px rgba(0, 0, 0, 0.08)',
                border: `1px solid ${isDarkMode ? 'rgba(243, 156, 18, 0.3)' : 'rgba(211, 84, 0, 0.1)'}`
              }}>
                🍽️ Authentic Ethiopian Experience
              </div>
              <h1 className="hero-main-title" style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: '800',
                color: isDarkMode ? '#ffffff' : '#2c3e50',
                lineHeight: '1.1',
                marginBottom: '1.5rem',
                fontFamily: 'Playfair Display, serif'
              }}>
                Mesob Restaurant
              </h1>
              <p className="hero-description" style={{
                fontSize: '1.2rem',
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                lineHeight: '1.8',
                marginBottom: '3rem',
                maxWidth: '500px'
              }}>
                Experience the rich flavors and warm hospitality of Ethiopia. 
                From traditional injera to perfectly spiced stews, every dish 
                tells a story of our heritage and passion for authentic cuisine.
              </p>
              <div className="hero-buttons" style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '4rem',
                flexWrap: 'wrap'
              }}>
                <Link 
                  to="/menu" 
                  style={{
                    background: 'linear-gradient(135deg, #d35400, #e67e22)',
                    color: 'white',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'inline-block'
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
                  🍽️ Order Online
                </Link>
                <Link 
                  to="/contact" 
                  style={{
                    background: 'transparent',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    padding: '18px 40px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '1.1rem',
                    border: `2px solid ${isDarkMode ? '#f39c12' : '#d35400'}`,
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    display: 'inline-block'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = isDarkMode ? '#f39c12' : '#d35400';
                    e.target.style.color = 'white';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = isDarkMode ? '#f39c12' : '#d35400';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📞 Make Reservation
                </Link>
              </div>
              <div className="hero-stats" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                maxWidth: '400px'
              }}>
                <div className="stat" style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '2.2rem',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '0.5rem',
                    fontWeight: '800',
                    fontFamily: 'Playfair Display, serif'
                  }}>15+</h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '500'
                  }}>Years Experience</p>
                </div>
                <div className="stat" style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '2.2rem',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '0.5rem',
                    fontWeight: '800',
                    fontFamily: 'Playfair Display, serif'
                  }}>50+</h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '500'
                  }}>Traditional Dishes</p>
                </div>
                <div className="stat" style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '2.2rem',
                    color: isDarkMode ? '#f39c12' : '#d35400',
                    marginBottom: '0.5rem',
                    fontWeight: '800',
                    fontFamily: 'Playfair Display, serif'
                  }}>1000+</h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontWeight: '500'
                  }}>Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="hero-content-right">
              <div className="hero-image-wrapper" style={{
                position: 'relative',
                width: '100%',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <img 
                  src="/images/image.jpg" 
                  alt="Ethiopian Food" 
                  style={{
                    width: '400px',
                    height: '400px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    boxShadow: isDarkMode ? '0 20px 60px rgba(0,0,0,0.5)' : '0 20px 60px rgba(0,0,0,0.15)',
                    border: `8px solid ${isDarkMode ? '#34495e' : '#ffffff'}`,
                    transition: 'all 0.3s ease'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '5%',
                  right: '5%',
                  background: isDarkMode ? 'rgba(52, 73, 94, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '15px 20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'}`
                }}>
                  <img src="/images/tibs.jpeg" alt="Tibs" style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }} />
                  <div>
                    <h4 style={{
                      fontSize: '0.9rem',
                      color: isDarkMode ? '#ffffff' : '#2c3e50',
                      marginBottom: '0.2rem',
                      fontWeight: '600'
                    }}>Shekla Tibs</h4>
                    <p style={{
                      fontSize: '1.1rem',
                      color: isDarkMode ? '#f39c12' : '#d35400',
                      fontWeight: '700',
                      margin: 0
                    }}>ETB 1150.00</p>
                  </div>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '5%',
                  background: isDarkMode ? 'rgba(52, 73, 94, 0.95)' : 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '15px 20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)'}`
                }}>
                  <img src="/images/Doro Wot.jpg" alt="Doro Wot" style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }} />
                  <div>
                    <h4 style={{
                      fontSize: '0.9rem',
                      color: isDarkMode ? '#ffffff' : '#2c3e50',
                      marginBottom: '0.2rem',
                      fontWeight: '600'
                    }}>Doro Wot</h4>
                    <p style={{
                      fontSize: '1.1rem',
                      color: isDarkMode ? '#f39c12' : '#d35400',
                      fontWeight: '700',
                      margin: 0
                    }}>ETB 950.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="chef-section" style={{
        padding: '100px 0',
        backgroundColor: isDarkMode ? '#2c3e50' : '#ffffff'
      }}>
        <div className="container">
          <div className="chef-wrapper" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center'
          }}>
            <div className="chef-image">
              <img 
                src="/images/chef_PNG121.png" 
                alt="Our Chef" 
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  height: 'auto',
                  borderRadius: '20px',
                  boxShadow: isDarkMode ? '0 20px 60px rgba(0,0,0,0.5)' : '0 20px 60px rgba(0,0,0,0.15)'
                }}
              />
            </div>
            <div className="chef-content">
              <h2 style={{
                fontSize: '3rem',
                color: isDarkMode ? '#ffffff' : '#2c3e50',
                marginBottom: '1rem',
                fontFamily: 'Playfair Display, serif'
              }}>Meet Our Chef</h2>
              <h3 style={{
                fontSize: '1.8rem',
                color: isDarkMode ? '#f39c12' : '#d35400',
                marginBottom: '2rem',
                fontWeight: '600'
              }}>Yohanis Gebreyesus</h3>
              <p className="chef-quote" style={{
                fontSize: '1.3rem',
                fontStyle: 'italic',
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                marginBottom: '2rem',
                padding: '20px',
                borderLeft: `4px solid ${isDarkMode ? '#f39c12' : '#d35400'}`,
                background: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : '#f8f9fa'
              }}>
                "Ethiopian cuisine is about bringing people together, sharing from one plate, and celebrating our rich heritage."
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                marginBottom: '2rem'
              }}>
                With years of culinary experience shaped in Ethiopia and abroad,
                Chef Yohanis Gebreyesus brings authentic Ethiopian flavors to life.
                His dedication to traditional recipes, fresh ingredients, and cultural
                authenticity creates an unforgettable dining experience.
              </p>
              <div className="chef-specialties">
                <h4 style={{
                  fontSize: '1.4rem',
                  color: isDarkMode ? '#f39c12' : '#d35400',
                  marginBottom: '1rem',
                  fontWeight: '600'
                }}>Specialties:</h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0
                }}>
                  <li style={{
                    padding: '8px 0',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`
                  }}>🍽️ Traditional Ethiopian Cuisine</li>
                  <li style={{
                    padding: '8px 0',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`
                  }}>🌍 International Favorites</li>
                  <li style={{
                    padding: '8px 0',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem',
                    borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ecf0f1'}`
                  }}>🔥 Fusion Dishes</li>
                  <li style={{
                    padding: '8px 0',
                    color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                    fontSize: '1.1rem'
                  }}>🌱 Vegetarian Options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
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
            <Link to="/menu" style={{ textDecoration: 'none' }}>
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
                    src="/images/tibs.jpeg"
                    alt="Tibs"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
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
                    ETB 1150.00
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
                      Shekla Tibs
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
                    Sizzling beef cubes with Ethiopian spices
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
                      transition: 'all 0.3s ease'
                    }}>
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

            <Link to="/menu" style={{ textDecoration: 'none' }}>
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
                    src="/images/Doro Wot.jpg"
                    alt="Doro Wot"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
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
                    ETB 950.00
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
                      Doro Wot
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
                    Traditional chicken stew with berbere spice
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
                      transition: 'all 0.3s ease'
                    }}>
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

            <Link to="/menu" style={{ textDecoration: 'none' }}>
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
                    src="/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp"
                    alt="Kitfo"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
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
                    ETB 1250.00
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
                      Kitfo
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
                    Ethiopian steak tartare with mitmita spice
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
                      transition: 'all 0.3s ease'
                    }}>
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

      {/* Testimonials */}
      <section className="testimonials" style={{
        padding: '100px 0',
        backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa'
      }}>
        <div className="container">
          <h2 className="text-center" style={{
            fontSize: '3rem',
            color: isDarkMode ? '#ffffff' : '#2c3e50',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif'
          }}>What Our Customers Say</h2>
          <p className="section-subtitle text-center" style={{
            fontSize: '1.2rem',
            color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
            marginBottom: '4rem',
            maxWidth: '600px',
            margin: '0 auto 4rem'
          }}>
            Hear from those who have experienced our authentic Ethiopian hospitality
          </p>

          <div className="testimonial-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '30px'
          }}>
            <div className="testimonial-card" style={{
              background: isDarkMode ? '#2c3e50' : '#ffffff',
              padding: '40px 30px',
              borderRadius: '20px',
              boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`
            }}>
              <div className="testimonial-rating" style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#f39c12'
              }}>★★★★★</div>
              <p className="testimonial-text" style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                marginBottom: '25px',
                fontStyle: 'italic'
              }}>"The most authentic Ethiopian experience I've had outside of Ethiopia. The injera was perfect and the doro wot was absolutely divine!"</p>
              <div className="testimonial-author">
                <h4 style={{
                  fontSize: '1.2rem',
                  color: isDarkMode ? '#ffffff' : '#2c3e50',
                  marginBottom: '5px',
                  fontWeight: '600'
                }}>Sarah Johnson</h4>
                <p style={{
                  color: isDarkMode ? '#f39c12' : '#d35400',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>Food Blogger</p>
              </div>
            </div>
            <div className="testimonial-card" style={{
              background: isDarkMode ? '#2c3e50' : '#ffffff',
              padding: '40px 30px',
              borderRadius: '20px',
              boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`
            }}>
              <div className="testimonial-rating" style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#f39c12'
              }}>★★★★★</div>
              <p className="testimonial-text" style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                marginBottom: '25px',
                fontStyle: 'italic'
              }}>"I've been coming here for years and the quality never disappoints. The staff treats you like family and the food is consistently excellent."</p>
              <div className="testimonial-author">
                <h4 style={{
                  fontSize: '1.2rem',
                  color: isDarkMode ? '#ffffff' : '#2c3e50',
                  marginBottom: '5px',
                  fontWeight: '600'
                }}>Michael Chen</h4>
                <p style={{
                  color: isDarkMode ? '#f39c12' : '#d35400',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>Regular Customer</p>
              </div>
            </div>
            <div className="testimonial-card" style={{
              background: isDarkMode ? '#2c3e50' : '#ffffff',
              padding: '40px 30px',
              borderRadius: '20px',
              boxShadow: isDarkMode ? '0 15px 35px rgba(0,0,0,0.5)' : '0 15px 35px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`
            }}>
              <div className="testimonial-rating" style={{
                fontSize: '1.5rem',
                marginBottom: '20px',
                color: '#f39c12'
              }}>★★★★★</div>
              <p className="testimonial-text" style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: isDarkMode ? '#bdc3c7' : '#7f8c8d',
                marginBottom: '25px',
                fontStyle: 'italic'
              }}>"Finally found a place that reminds me of home! The spices are perfectly balanced and the traditional coffee ceremony is a beautiful touch."</p>
              <div className="testimonial-author">
                <h4 style={{
                  fontSize: '1.2rem',
                  color: isDarkMode ? '#ffffff' : '#2c3e50',
                  marginBottom: '5px',
                  fontWeight: '600'
                }}>Aisha Mohammed</h4>
                <p style={{
                  color: isDarkMode ? '#f39c12' : '#d35400',
                  fontSize: '0.95rem',
                  fontWeight: '500'
                }}>Ethiopian Food Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="reservation-cta" style={{
        padding: '100px 0',
        background: isDarkMode 
          ? 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)' 
          : 'linear-gradient(135deg, #d35400 0%, #e67e22 100%)',
        color: 'white'
      }}>
        <div className="container text-center">
          <h2 style={{
            fontSize: '3rem',
            marginBottom: '1.5rem',
            fontFamily: 'Playfair Display, serif'
          }}>Ready to Experience Authentic Ethiopian Cuisine?</h2>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            lineHeight: '1.6'
          }}>
            Reserve your table today and join us for an unforgettable journey
            through Ethiopian flavors and traditions
          </p>
          <Link 
            to="/contact" 
            className="btn btn-primary btn-large"
            style={{
              background: isDarkMode ? 'rgba(243, 156, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
              color: isDarkMode ? '#ffffff' : '#d35400',
              padding: '20px 50px',
              borderRadius: '50px',
              fontSize: '1.2rem',
              fontWeight: '700',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'all 0.3s ease',
              border: `2px solid ${isDarkMode ? '#f39c12' : 'white'}`,
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            }}
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;