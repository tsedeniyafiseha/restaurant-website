import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <section className="social" style={{
        padding: '60px 0',
        backgroundColor: isDarkMode ? '#2c3e50' : '#f8f9fa'
      }}>
        <div className="container text-center">
          <ul style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                padding: '15px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
                borderRadius: '15px',
                transition: 'all 0.3s ease',
                boxShadow: isDarkMode ? '0 8px 25px rgba(0,0,0,0.3)' : '0 8px 25px rgba(0,0,0,0.1)',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`
              }}>
                <img src="https://img.icons8.com/fluent/50/000000/facebook-new.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                padding: '15px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
                borderRadius: '15px',
                transition: 'all 0.3s ease',
                boxShadow: isDarkMode ? '0 8px 25px rgba(0,0,0,0.3)' : '0 8px 25px rgba(0,0,0,0.1)',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`
              }}>
                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" style={{
                display: 'block',
                padding: '15px',
                background: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : '#ffffff',
                borderRadius: '15px',
                transition: 'all 0.3s ease',
                boxShadow: isDarkMode ? '0 8px 25px rgba(0,0,0,0.3)' : '0 8px 25px rgba(0,0,0,0.1)',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'transparent'}`
              }}>
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer" style={{
        padding: '80px 0 40px',
        backgroundColor: isDarkMode ? '#1a1a1a' : '#2c3e50',
        color: 'white'
      }}>
        <div className="container">
          <div className="footer-content" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div className="footer-section">
              <h3 style={{
                fontSize: '2rem',
                color: isDarkMode ? '#f39c12' : '#f39c12',
                marginBottom: '1.5rem',
                fontFamily: 'Playfair Display, serif'
              }}>Mesob Restaurant</h3>
              <p style={{
                color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}>
                Experience authentic Ethiopian cuisine in a warm, welcoming atmosphere. 
                We bring the rich flavors and traditions of Ethiopia to your table, 
                creating memorable dining experiences for all our guests.
              </p>
            </div>
            <div className="footer-section">
              <h4 style={{
                fontSize: '1.5rem',
                color: isDarkMode ? '#f39c12' : '#f39c12',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>Quick Links</h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/" style={{
                    color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'color 0.3s ease'
                  }}>Home</Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/menu" style={{
                    color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'color 0.3s ease'
                  }}>Menu</Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/contact" style={{
                    color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'color 0.3s ease'
                  }}>Contact</Link>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <Link to="/contact" style={{
                    color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    transition: 'color 0.3s ease'
                  }}>Reservations</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 style={{
                fontSize: '1.5rem',
                color: isDarkMode ? '#f39c12' : '#f39c12',
                marginBottom: '1.5rem',
                fontWeight: '600'
              }}>Contact Info</h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{
                  marginBottom: '15px',
                  color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>📍 123 Ethiopian Street, City, State 12345</li>
                <li style={{
                  marginBottom: '15px',
                  color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>📞 (555) 123-4567</li>
                <li style={{
                  marginBottom: '15px',
                  color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>✉️ info@mesobrestaurant.com</li>
                <li style={{
                  marginBottom: '15px',
                  color: isDarkMode ? '#bdc3c7' : '#bdc3c7',
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>🕒 Mon-Sun: 11:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom text-center" style={{
            paddingTop: '40px',
            borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.1)'}`
          }}>
            <p style={{
              color: isDarkMode ? '#95a5a6' : '#95a5a6',
              fontSize: '1rem',
              margin: 0
            }}>&copy; 2024 Mesob Restaurant. All rights reserved. | Designed with ❤️ for authentic Ethiopian cuisine</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;