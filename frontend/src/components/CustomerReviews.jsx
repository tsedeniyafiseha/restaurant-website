import React, { useState, useEffect } from 'react';

const CustomerReviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 days ago',
      text: 'Absolutely incredible! The Doro Wot was the best I\'ve ever had. The spices were perfectly balanced and the chicken was so tender. The atmosphere is warm and welcoming.',
      image: '/images/Doro Wot.jpg',
      customerPhoto: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      dish: 'Doro Wot',
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      date: '1 week ago',
      text: 'First time trying Ethiopian food and I\'m blown away! The injera was fresh and tangy, perfect with the vegetarian combo. Staff was super helpful explaining everything.',
      image: '/images/image.jpg',
      customerPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      dish: 'Vegetarian Combo',
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 5,
      date: '3 days ago',
      text: 'The Kitfo was exceptional! You can taste the quality of the ingredients. The presentation was beautiful and the flavors were authentic. Will definitely be back!',
      image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
      customerPhoto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      dish: 'Kitfo',
      verified: true,
      helpful: 31
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      date: '5 days ago',
      text: 'Amazing experience! The Shekla Tibs was perfectly seasoned and the service was outstanding. The coffee ceremony at the end was a beautiful touch.',
      image: '/images/tibs.jpeg',
      customerPhoto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      dish: 'Shekla Tibs',
      verified: true,
      helpful: 22
    },
    {
      id: 5,
      name: 'Lisa Park',
      rating: 5,
      date: '1 week ago',
      text: 'Celebrated my birthday here and it was perfect! The staff surprised me with a traditional coffee ceremony. The food was incredible and the atmosphere was so warm.',
      image: '/images/image.jpg',
      customerPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      dish: 'Birthday Celebration',
      verified: true,
      helpful: 45
    }
  ];

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const currentReview = reviews[currentReviewIndex];
  const reviewOfTheWeek = reviews.reduce((prev, current) => 
    prev.helpful > current.helpful ? prev : current
  );

  return (
    <section className="customer-reviews-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>⭐ What Our Customers Say</h2>
          <p className="section-subtitle">
            Real reviews from real customers with real photos of their meals
          </p>
          <div className="google-rating">
            <div className="rating-display">
              <span className="rating-number">4.9</span>
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <span className="rating-text">Based on 247+ Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Review of the Week */}
        <div className="review-of-week">
          <div className="review-badge">🏆 Review of the Week</div>
          <div className="featured-review">
            <div className="review-content">
              <div className="customer-info">
                <img 
                  src={reviewOfTheWeek.customerPhoto} 
                  alt={reviewOfTheWeek.name}
                  className="customer-photo"
                />
                <div className="customer-details">
                  <h4>{reviewOfTheWeek.name}</h4>
                  <div className="review-meta">
                    <div className="stars">{'⭐'.repeat(reviewOfTheWeek.rating)}</div>
                    <span className="review-date">{reviewOfTheWeek.date}</span>
                    {reviewOfTheWeek.verified && <span className="verified-badge">✓ Verified</span>}
                  </div>
                </div>
              </div>
              <p className="review-text">"{reviewOfTheWeek.text}"</p>
              <div className="review-dish">
                <span className="dish-tag">Ordered: {reviewOfTheWeek.dish}</span>
                <span className="helpful-count">👍 {reviewOfTheWeek.helpful} found this helpful</span>
              </div>
            </div>
            <div className="review-image">
              <img src={reviewOfTheWeek.image} alt={reviewOfTheWeek.dish} />
            </div>
          </div>
        </div>

        {/* Rotating Reviews Carousel */}
        <div className="reviews-carousel">
          <h3 className="carousel-title">Recent Reviews</h3>
          <div className="carousel-container">
            <div className="review-card active">
              <div className="review-header">
                <img 
                  src={currentReview.customerPhoto} 
                  alt={currentReview.name}
                  className="customer-photo-small"
                />
                <div className="customer-info-small">
                  <h5>{currentReview.name}</h5>
                  <div className="review-meta-small">
                    <div className="stars-small">{'⭐'.repeat(currentReview.rating)}</div>
                    <span className="review-date-small">{currentReview.date}</span>
                  </div>
                </div>
                {currentReview.verified && <span className="verified-badge-small">✓</span>}
              </div>
              <p className="review-text-small">"{currentReview.text}"</p>
              <div className="review-footer">
                <img src={currentReview.image} alt={currentReview.dish} className="dish-photo-small" />
                <span className="dish-name-small">{currentReview.dish}</span>
              </div>
            </div>
          </div>
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentReviewIndex ? 'active' : ''}`}
                onClick={() => setCurrentReviewIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Review Stats */}
        <div className="review-stats">
          <div className="stat-item">
            <div className="stat-number">247+</div>
            <div className="stat-label">Total Reviews</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Recommend Us</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">156</div>
            <div className="stat-label">Photos Shared</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="review-cta">
          <h3>Share Your Experience!</h3>
          <p>Had a great meal? We'd love to hear about it and see your photos!</p>
          <div className="cta-buttons">
            <a href="https://g.page/r/your-google-business-id/review" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              📝 Write a Review
            </a>
            <button className="btn btn-secondary">
              📸 Share Photos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;