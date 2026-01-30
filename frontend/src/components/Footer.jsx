import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <section className="social">
        <div className="container text-center">
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/50/000000/facebook-new.png" alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/48/000000/twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Mesob Restaurant</h3>
              <p>
                Experience authentic Ethiopian cuisine in a warm, welcoming atmosphere. 
                We bring the rich flavors and traditions of Ethiopia to your table, 
                creating memorable dining experiences for all our guests.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/contact">Reservations</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact Info</h4>
              <ul>
                <li>📍 123 Ethiopian Street, City, State 12345</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@mesobrestaurant.com</li>
                <li>🕒 Mon-Sun: 11:00 AM - 10:00 PM</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom text-center">
            <p>&copy; 2024 Mesob Restaurant. All rights reserved. | Designed with ❤️ for authentic Ethiopian cuisine</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;