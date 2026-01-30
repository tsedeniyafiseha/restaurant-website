import React, { useState, useEffect } from 'react';

const SpecialEvents = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute
    return () => clearInterval(timer);
  }, []);

  const getTodaysSpecial = () => {
    const day = currentDate.getDay();
    const specials = {
      0: { // Sunday
        name: 'Sunday Family Feast',
        description: 'Traditional Ethiopian family platter for 4-6 people',
        price: 'ETB 3250',
        discount: '15% OFF',
        icon: '👨‍👩‍👧‍👦'
      },
      1: { // Monday
        name: 'Meatless Monday',
        description: 'All vegetarian dishes 20% off',
        price: 'Various',
        discount: '20% OFF',
        icon: '🥬'
      },
      2: { // Tuesday
        name: 'Tibs Tuesday',
        description: 'All Tibs varieties with complimentary injera',
        price: 'ETB 900-1300',
        discount: 'Free Injera',
        icon: '🥩'
      },
      3: { // Wednesday
        name: 'Wine Wednesday',
        description: 'Ethiopian honey wine (Tej) tasting with dinner',
        price: 'ETB 1750',
        discount: 'Free Tasting',
        icon: '🍷'
      },
      4: { // Thursday
        name: 'Traditional Thursday',
        description: 'Authentic coffee ceremony with any traditional dish',
        price: 'ETB 1100-1400',
        discount: 'Free Coffee',
        icon: '☕'
      },
      5: { // Friday
        name: 'Fresh Fish Friday',
        description: 'Fresh catch of the day with Ethiopian spices',
        price: 'ETB 1200',
        discount: '10% OFF',
        icon: '🐟'
      },
      6: { // Saturday
        name: 'Spice Saturday',
        description: 'Extra spicy dishes for the brave souls',
        price: 'Various',
        discount: 'Free Dessert',
        icon: '🌶️'
      }
    };
    return specials[day];
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    const events = [
      {
        id: 1,
        name: 'Ethiopian New Year Celebration',
        date: new Date(today.getFullYear(), 8, 11), // September 11
        description: 'Traditional music, dance, and special menu',
        type: 'Cultural Event',
        icon: '🎊',
        special: 'Traditional dress encouraged!'
      },
      {
        id: 2,
        name: 'Live Jazz Night',
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7),
        description: 'Local jazz trio performing while you dine',
        type: 'Live Music',
        icon: '🎷',
        special: 'No cover charge with dinner'
      },
      {
        id: 3,
        name: 'Cooking Class: Injera Making',
        date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14),
        description: 'Learn to make traditional Ethiopian bread',
        type: 'Workshop',
        icon: '👨‍🍳',
        special: 'Limited to 12 participants'
      },
      {
        id: 4,
        name: 'Valentine\'s Special Menu',
        date: new Date(today.getFullYear(), 1, 14), // February 14
        description: 'Romantic dinner for two with special pricing',
        type: 'Holiday Special',
        icon: '💕',
        special: 'Couples menu ETB 4250 for two'
      }
    ];

    // Filter future events and sort by date
    return events
      .filter(event => event.date > today)
      .sort((a, b) => a.date - b.date)
      .slice(0, 3);
  };

  const getWeekendSpecials = () => {
    return [
      {
        name: 'Saturday Brunch',
        time: '10:00 AM - 2:00 PM',
        description: 'Ethiopian-style brunch with traditional coffee',
        price: 'ETB 1100',
        icon: '🥞'
      },
      {
        name: 'Sunday Live Music',
        time: '6:00 PM - 9:00 PM',
        description: 'Traditional Ethiopian music and dance',
        price: 'No cover charge',
        icon: '🎵'
      }
    ];
  };

  const todaysSpecial = getTodaysSpecial();
  const upcomingEvents = getUpcomingEvents();
  const weekendSpecials = getWeekendSpecials();

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="special-events-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>🎉 Special Events & Daily Offers</h2>
          <p className="section-subtitle">
            Something special happening every day at Mesob Restaurant
          </p>
        </div>

        {/* Today's Special */}
        <div className="todays-special">
          <div className="special-header">
            <div className="special-badge">Today's Special</div>
            <div className="current-date">{formatDate(currentDate)}</div>
          </div>
          <div className="special-card featured">
            <div className="special-icon">{todaysSpecial.icon}</div>
            <div className="special-content">
              <h3>{todaysSpecial.name}</h3>
              <p>{todaysSpecial.description}</p>
              <div className="special-pricing">
                <span className="price">{todaysSpecial.price}</span>
                <span className="discount">{todaysSpecial.discount}</span>
              </div>
            </div>
            <div className="special-action">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>

        {/* Weekend Specials */}
        <div className="weekend-specials">
          <h3>🌟 Weekend Highlights</h3>
          <div className="weekend-grid">
            {weekendSpecials.map((special, index) => (
              <div key={index} className="weekend-card">
                <div className="weekend-icon">{special.icon}</div>
                <h4>{special.name}</h4>
                <div className="weekend-time">{special.time}</div>
                <p>{special.description}</p>
                <div className="weekend-price">{special.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="upcoming-events">
          <h3>📅 Upcoming Events</h3>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <div className="event-month">
                    {event.date.toLocaleDateString('en-US', { month: 'short' })}
                  </div>
                  <div className="event-day">
                    {event.date.getDate()}
                  </div>
                </div>
                <div className="event-content">
                  <div className="event-type">{event.type}</div>
                  <h4>{event.name}</h4>
                  <p>{event.description}</p>
                  <div className="event-special">{event.special}</div>
                </div>
                <div className="event-icon">{event.icon}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Holiday Menu Preview */}
        <div className="holiday-menu">
          <div className="holiday-banner">
            <div className="holiday-content">
              <h3>🎄 Holiday Season Menu</h3>
              <p>Special festive dishes available December 15 - January 15</p>
              <div className="holiday-dishes">
                <div className="holiday-dish">
                  <span className="dish-name">Festive Doro Wot</span>
                  <span className="dish-price">ETB 1400</span>
                </div>
                <div className="holiday-dish">
                  <span className="dish-name">Holiday Spice Tibs</span>
                  <span className="dish-price">ETB 1600</span>
                </div>
                <div className="holiday-dish">
                  <span className="dish-name">New Year Vegetarian Feast</span>
                  <span className="dish-price">ETB 1200</span>
                </div>
              </div>
              <button className="btn btn-secondary">View Full Holiday Menu</button>
            </div>
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="loyalty-program">
          <div className="loyalty-header">
            <h3>🍔 Mesob Rewards Program</h3>
            <p>Earn points with every visit and unlock delicious rewards!</p>
          </div>
          <div className="loyalty-tiers">
            <div className="loyalty-tier">
              <div className="tier-icon">🥉</div>
              <h4>Bronze Member</h4>
              <p>Order 5 times → Get 1 appetizer free</p>
              <div className="tier-benefit">5% off all orders</div>
            </div>
            <div className="loyalty-tier">
              <div className="tier-icon">🥈</div>
              <h4>Silver Member</h4>
              <p>Order 10 times → Get 1 main dish free</p>
              <div className="tier-benefit">10% off + birthday discount</div>
            </div>
            <div className="loyalty-tier">
              <div className="tier-icon">🥇</div>
              <h4>Gold Member</h4>
              <p>Order 20 times → Get full meal free</p>
              <div className="tier-benefit">15% off + exclusive events</div>
            </div>
          </div>
          <div className="loyalty-signup">
            <button className="btn btn-primary">Join Rewards Program</button>
            <p className="loyalty-note">🎂 Special birthday discount for all members!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialEvents;