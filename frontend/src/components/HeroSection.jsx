import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content-left">
            <div className="hero-badge">🍽️ Authentic Ethiopian Experience</div>
            <h1 className="hero-main-title">Mesob Restaurant</h1>
            <p className="hero-description">
              Experience the rich flavors and warm hospitality of Ethiopia. 
              From traditional injera to perfectly spiced stews, every dish 
              tells a story of our heritage and passion for authentic cuisine.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn-hero-primary">
                View Our Menu
              </Link>
              <Link to="/contact" className="btn-hero-secondary">
                Make Reservation
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Traditional Dishes</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="hero-content-right">
            <div className="hero-image-wrapper">
              <img 
                src="/images/image.jpg" 
                alt="Ethiopian Food" 
                className="hero-main-image"
              />
              <div className="hero-floating-card card-1">
                <img src="/images/tibs.jpeg" alt="Tibs" />
                <div className="card-info">
                  <h4>Shekla Tibs</h4>
                  <p>ETB 1150.00</p>
                </div>
              </div>
              <div className="hero-floating-card card-2">
                <img src="/images/Doro Wot.jpg" alt="Doro Wot" />
                <div className="card-info">
                  <h4>Doro Wot</h4>
                  <p>ETB 950.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;