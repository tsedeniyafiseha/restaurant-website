import React from 'react';

const LocationInfo = () => {
  const locationDetails = {
    address: '123 Ethiopian Street, Cultural District, City 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@mesobrestaurant.com',
    coordinates: { lat: 40.7128, lng: -74.0060 }, // Example coordinates
    landmarks: [
      { name: 'City Center', distance: '5 min walk', icon: '🏛️' },
      { name: 'Metro Station', distance: '2 min walk', icon: '🚇' },
      { name: 'Cultural Museum', distance: '3 min walk', icon: '🏛️' },
      { name: 'Shopping Mall', distance: '10 min walk', icon: '🛍️' }
    ],
    parking: {
      available: true,
      type: 'Free street parking',
      spaces: '20+ spots',
      note: 'Valet service available on weekends'
    },
    accessibility: {
      wheelchairAccessible: true,
      features: ['Ramp entrance', 'Accessible restrooms', 'Wide aisles', 'Braille menus available']
    }
  };

  const hours = [
    { day: 'Monday', hours: '11:00 AM - 10:00 PM', isToday: false },
    { day: 'Tuesday', hours: '11:00 AM - 10:00 PM', isToday: false },
    { day: 'Wednesday', hours: '11:00 AM - 10:00 PM', isToday: false },
    { day: 'Thursday', hours: '11:00 AM - 10:00 PM', isToday: false },
    { day: 'Friday', hours: '11:00 AM - 11:00 PM', isToday: false },
    { day: 'Saturday', hours: '10:00 AM - 11:00 PM', isToday: false },
    { day: 'Sunday', hours: '10:00 AM - 10:00 PM', isToday: true }
  ];

  const getCurrentStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay();
    
    // Simplified logic - in real app, you'd parse the actual hours
    if (currentDay === 0) { // Sunday
      return currentHour >= 10 && currentHour < 22 ? 'Open Now' : 'Closed';
    } else if (currentDay === 6) { // Saturday
      return currentHour >= 10 && currentHour < 23 ? 'Open Now' : 'Closed';
    } else if (currentDay === 5) { // Friday
      return currentHour >= 11 && currentHour < 23 ? 'Open Now' : 'Closed';
    } else { // Monday-Thursday
      return currentHour >= 11 && currentHour < 22 ? 'Open Now' : 'Closed';
    }
  };

  const status = getCurrentStatus();

  return (
    <section className="location-info-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>📍 Visit Us</h2>
          <p className="section-subtitle">
            Located in the heart of the cultural district, easy to find and even easier to love
          </p>
        </div>

        <div className="location-grid">
          {/* Main Location Card */}
          <div className="location-main-card">
            <div className="location-header">
              <h3>Mesob Ethiopian Restaurant</h3>
              <div className={`status-badge ${status === 'Open Now' ? 'open' : 'closed'}`}>
                <span className="status-dot"></span>
                {status}
              </div>
            </div>

            <div className="location-details">
              <div className="detail-item">
                <span className="detail-icon">📍</span>
                <div className="detail-content">
                  <strong>Address</strong>
                  <p>{locationDetails.address}</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">📞</span>
                <div className="detail-content">
                  <strong>Phone</strong>
                  <p>{locationDetails.phone}</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-icon">✉️</span>
                <div className="detail-content">
                  <strong>Email</strong>
                  <p>{locationDetails.email}</p>
                </div>
              </div>
            </div>

            <div className="location-actions">
              <button className="btn btn-primary">
                🗺️ Get Directions
              </button>
              <button className="btn btn-secondary">
                📞 Call Now
              </button>
            </div>
          </div>

          {/* Hours Card */}
          <div className="hours-card">
            <h4>🕒 Opening Hours</h4>
            <div className="hours-list">
              {hours.map((item, index) => (
                <div key={index} className={`hours-item ${item.isToday ? 'today' : ''}`}>
                  <span className="day">{item.day}</span>
                  <span className="hours">{item.hours}</span>
                </div>
              ))}
            </div>
            <div className="hours-note">
              <small>⚠️ Hours may vary on holidays</small>
            </div>
          </div>
        </div>

        {/* Landmarks & Directions */}
        <div className="landmarks-section">
          <h3>🏛️ We're Close to Everything</h3>
          <div className="landmarks-grid">
            {locationDetails.landmarks.map((landmark, index) => (
              <div key={index} className="landmark-item">
                <span className="landmark-icon">{landmark.icon}</span>
                <div className="landmark-info">
                  <strong>{landmark.name}</strong>
                  <span className="landmark-distance">{landmark.distance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parking & Accessibility */}
        <div className="practical-info">
          <div className="parking-info">
            <h4>🚗 Parking Information</h4>
            <div className="parking-details">
              <div className="parking-item">
                <span className="parking-icon">🅿️</span>
                <div>
                  <strong>{locationDetails.parking.type}</strong>
                  <p>{locationDetails.parking.spaces} available</p>
                  <small>{locationDetails.parking.note}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="accessibility-info">
            <h4>♿ Accessibility</h4>
            <div className="accessibility-features">
              {locationDetails.accessibility.features.map((feature, index) => (
                <div key={index} className="accessibility-item">
                  <span className="check-icon">✅</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="map-section">
          <h3>🗺️ Find Us on the Map</h3>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <div className="map-pin">📍</div>
                <h4>Mesob Ethiopian Restaurant</h4>
                <p>{locationDetails.address}</p>
                <div className="map-actions">
                  <button className="btn btn-primary">Open in Google Maps</button>
                  <button className="btn btn-secondary">Open in Apple Maps</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Directions */}
          <div className="quick-directions">
            <h4>🚶‍♂️ Quick Directions</h4>
            <div className="directions-grid">
              <div className="direction-item">
                <span className="direction-icon">🚇</span>
                <div>
                  <strong>By Metro</strong>
                  <p>Take Line 1 to Cultural District Station (Exit B)</p>
                </div>
              </div>
              <div className="direction-item">
                <span className="direction-icon">🚗</span>
                <div>
                  <strong>By Car</strong>
                  <p>Take Highway 101, Exit 15A towards Cultural District</p>
                </div>
              </div>
              <div className="direction-item">
                <span className="direction-icon">🚌</span>
                <div>
                  <strong>By Bus</strong>
                  <p>Routes 42, 67, and 89 stop directly in front</p>
                </div>
              </div>
              <div className="direction-item">
                <span className="direction-icon">🚴‍♂️</span>
                <div>
                  <strong>By Bike</strong>
                  <p>Bike racks available, on the city bike path</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="contact-cta">
          <div className="cta-content">
            <h3>Need Help Finding Us?</h3>
            <p>Our friendly staff is happy to help with directions or answer any questions!</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">📞 Call for Directions</button>
              <button className="btn btn-secondary">💬 Chat with Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationInfo;