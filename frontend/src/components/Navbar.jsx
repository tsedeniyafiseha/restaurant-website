import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/SimpleCartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

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
                className="nav-btn cart-btn"
                onClick={() => setIsCartOpen(true)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-dark)',
                  fontWeight: '500',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}
              >
                🛒 Cart
                {getTotalItems() > 0 && (
                  <span className="cart-badge" style={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    background: 'var(--primary-color)',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600'
                  }}>
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </li>
            <li>
              <Link to="/contact" className="btn btn-primary">Reserve Table</Link>
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default Navbar;