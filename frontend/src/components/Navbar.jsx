import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/SimpleCartContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      style={{
        background: isDarkMode ? 'rgba(44, 62, 80, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        padding: '1rem 0',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: scrolled ? '0 5px 15px rgba(0, 0, 0, 0.08)' : 'none'
      }}
    >
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Restaurant Logo" className="img-responsive" />
          </Link>
        </div>
        <div className="menu text-right">
          <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', alignItems: 'center', margin: 0, padding: 0 }}>
            <li>
              <Link 
                to="/" 
                style={{ 
                  fontWeight: '500', 
                  fontSize: '1rem', 
                  color: isDarkMode ? '#ffffff' : '#2c3e50', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  position: 'relative'
                }}
                onMouseOver={(e) => e.target.style.color = '#d35400'}
                onMouseOut={(e) => e.target.style.color = isDarkMode ? '#ffffff' : '#2c3e50'}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/menu"
                style={{ 
                  fontWeight: '500', 
                  fontSize: '1rem', 
                  color: isDarkMode ? '#ffffff' : '#2c3e50', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  position: 'relative'
                }}
                onMouseOver={(e) => e.target.style.color = '#d35400'}
                onMouseOut={(e) => e.target.style.color = isDarkMode ? '#ffffff' : '#2c3e50'}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                style={{ 
                  fontWeight: '500', 
                  fontSize: '1rem', 
                  color: isDarkMode ? '#ffffff' : '#2c3e50', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  position: 'relative'
                }}
                onMouseOver={(e) => e.target.style.color = '#d35400'}
                onMouseOut={(e) => e.target.style.color = isDarkMode ? '#ffffff' : '#2c3e50'}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/admin"
                style={{ 
                  fontWeight: '500', 
                  fontSize: '1rem', 
                  color: isDarkMode ? '#f39c12' : '#d35400', 
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  padding: '8px 0',
                  position: 'relative'
                }}
                onMouseOver={(e) => e.target.style.color = isDarkMode ? '#e67e22' : '#c0392b'}
                onMouseOut={(e) => e.target.style.color = isDarkMode ? '#f39c12' : '#d35400'}
              >
                Admin
              </Link>
            </li>
            <li>
              <button 
                onClick={toggleTheme}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  color: isDarkMode ? '#f39c12' : '#2c3e50'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(211, 84, 0, 0.1)';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'none';
                  e.target.style.transform = 'scale(1)';
                }}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
            <li>
              <button 
                onClick={() => setIsCartOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isDarkMode ? '#ffffff' : '#2c3e50',
                  fontWeight: '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'rgba(211, 84, 0, 0.1)';
                  e.target.style.color = isDarkMode ? '#f39c12' : '#d35400';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'none';
                  e.target.style.color = isDarkMode ? '#ffffff' : '#2c3e50';
                }}
              >
                🛒 Cart
                {getTotalItems() > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    background: '#d35400',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    animation: 'pulse 2s infinite'
                  }}>
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </li>
            <li>
              <Link 
                to="/contact" 
                style={{
                  background: 'linear-gradient(135deg, #d35400, #e67e22)',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  marginLeft: '1rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
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
                Reserve Table
              </Link>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default Navbar;