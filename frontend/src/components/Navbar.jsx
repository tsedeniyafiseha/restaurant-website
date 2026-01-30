import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ onCartClick, onReservationClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const { getTotalItems } = useCart();
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
    <section className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Restaurant Logo" className="img-responsive" />
          </Link>
        </div>
        <div className="menu text-right">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <button 
                className="nav-btn theme-toggle"
                onClick={toggleTheme}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </li>
            <li>
              <button 
                className="nav-btn cart-btn"
                onClick={onCartClick}
                title="View Cart"
              >
                🛒 Cart
                {getTotalItems() > 0 && (
                  <span className="cart-badge">{getTotalItems()}</span>
                )}
              </button>
            </li>
            <li>
              <button 
                className="nav-btn reservation-btn"
                onClick={onReservationClick}
              >
                🍽️ Reserve Table
              </button>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default Navbar;