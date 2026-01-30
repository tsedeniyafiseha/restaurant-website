import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodStory from '../components/FoodStory';
import CustomerReviews from '../components/CustomerReviews';
import SpecialEvents from '../components/SpecialEvents';
import LocationInfo from '../components/LocationInfo';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
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
                    <p>$15.99</p>
                  </div>
                </div>
                <div className="hero-floating-card card-2">
                  <img src="/images/Doro Wot.jpg" alt="Doro Wot" />
                  <div className="card-info">
                    <h4>Doro Wot</h4>
                    <p>$14.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="chef-section">
        <div className="container">
          <div className="chef-wrapper">
            <div className="chef-image">
              <img src="/images/chef_PNG121.png" alt="Our Chef" className="img-responsive" />
            </div>
            <div className="chef-content">
              <h2>Meet Our Chef</h2>
              <h3>Yohanis Gebreyesus</h3>
              <p className="chef-quote">
                "Ethiopian cuisine is about bringing people together, sharing from one plate, and celebrating our rich heritage."
              </p>
              <p>
                With years of culinary experience shaped in Ethiopia and abroad,
                Chef Yohanis Gebreyesus brings authentic Ethiopian flavors to life.
                His dedication to traditional recipes, fresh ingredients, and cultural
                authenticity creates an unforgettable dining experience.
              </p>
              <div className="chef-specialties">
                <h4>Specialties:</h4>
                <ul>
                  <li>Traditional Ethiopian Cuisine</li>
                  <li>International Favorites</li>
                  <li>Fusion Dishes</li>
                  <li>Vegetarian Options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="menu-highlights">
        <div className="container">
          <h2 className="text-center">Menu Highlights</h2>
          <p className="section-subtitle text-center">
            Discover our Ethiopian specialties and international favorites
          </p>

          <Link to="/menu">
            <div className="box-3 float-container">
              <img
                src="/images/tibs.jpeg"
                alt="Tibs"
                className="img-responsive img-curve"
              />
              <h3 className="float-text text-white">Shekla Tibs</h3>
            </div>
          </Link>

          <Link to="/menu">
            <div className="box-3 float-container">
              <img
                src="/images/Doro Wot.jpg"
                alt="Doro Wot"
                className="img-responsive img-curve"
              />
              <h3 className="float-text text-white">Doro Wot</h3>
            </div>
          </Link>

          <Link to="/menu">
            <div className="box-3 float-container">
              <img
                src="/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp"
                alt="Kitfo"
                className="img-responsive img-curve"
              />
              <h3 className="float-text text-white">Kitfo</h3>
            </div>
          </Link>

          <div className="clearfix"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="text-center">What Our Customers Say</h2>
          <p className="section-subtitle text-center">
            Hear from those who have experienced our authentic Ethiopian hospitality
          </p>

          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"The most authentic Ethiopian experience I've had outside of Ethiopia. The injera was perfect and the doro wot was absolutely divine!"</p>
              <div className="testimonial-author">
                <h4>Sarah Johnson</h4>
                <p>Food Blogger</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"I've been coming here for years and the quality never disappoints. The staff treats you like family and the food is consistently excellent."</p>
              <div className="testimonial-author">
                <h4>Michael Chen</h4>
                <p>Regular Customer</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">"Finally found a place that reminds me of home! The spices are perfectly balanced and the traditional coffee ceremony is a beautiful touch."</p>
              <div className="testimonial-author">
                <h4>Aisha Mohammed</h4>
                <p>Ethiopian Food Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Stories */}
      <FoodStory />

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Special Events */}
      <SpecialEvents />

      {/* Location Info */}
      <LocationInfo />

      {/* Reservation CTA */}
      <section className="reservation-cta">
        <div className="container text-center">
          <h2>Ready to Experience Authentic Ethiopian Cuisine?</h2>
          <p>
            Reserve your table today and join us for an unforgettable journey
            through Ethiopian flavors and traditions
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;