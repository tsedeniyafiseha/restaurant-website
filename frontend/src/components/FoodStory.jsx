import React from 'react';

const FoodStory = () => {
  const stories = [
    {
      id: 1,
      dish: 'Doro Wot',
      title: 'The Heart of Ethiopian Cuisine',
      story: 'Our Doro Wot recipe has been passed down through three generations of Ethiopian grandmothers. The secret lies in the berbere spice blend - 16 different spices ground fresh daily, creating that perfect balance of heat and flavor that makes your taste buds dance.',
      image: '/images/Doro Wot.jpg',
      heritage: '3 Generations',
      specialIngredient: '16-Spice Berbere Blend',
      cookingTime: '4 Hours Slow-Cooked',
      icon: '👵'
    },
    {
      id: 2,
      dish: 'Kitfo',
      title: 'Ethiopia\'s Finest Delicacy',
      story: 'Kitfo is not just raw beef - it\'s an art form. We source our beef from local farms within 50 miles, ensuring the highest quality. The meat is hand-minced with traditional tools and mixed with mitmita spice and clarified butter made in-house every morning.',
      image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
      heritage: 'Ancient Tradition',
      specialIngredient: 'Farm-to-Table Beef',
      cookingTime: 'Hand-Prepared Fresh',
      icon: '🥩'
    },
    {
      id: 3,
      dish: 'Injera',
      title: 'The Foundation of Every Meal',
      story: 'Our injera starts with teff grain, an ancient superfood native to Ethiopia. We ferment the batter for 3 days using a 100-year-old starter culture, creating that signature tangy flavor and spongy texture that perfectly complements every dish.',
      image: '/images/image.jpg',
      heritage: '100-Year Starter Culture',
      specialIngredient: 'Ancient Teff Grain',
      cookingTime: '3-Day Fermentation',
      icon: '🌾'
    }
  ];

  return (
    <section className="food-story-section">
      <div className="container">
        <div className="section-header text-center">
          <h2>🍛 Stories Behind Our Dishes</h2>
          <p className="section-subtitle">
            Every dish has a story. Discover the heritage, passion, and tradition behind our most beloved recipes.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={story.id} className={`story-card ${index % 2 === 1 ? 'story-reverse' : ''}`}>
              <div className="story-image">
                <img src={story.image} alt={story.dish} />
                <div className="story-icon">{story.icon}</div>
              </div>
              
              <div className="story-content">
                <div className="story-header">
                  <h3>{story.dish}</h3>
                  <h4>{story.title}</h4>
                </div>
                
                <p className="story-text">{story.story}</p>
                
                <div className="story-details">
                  <div className="story-detail">
                    <span className="detail-icon">🏛️</span>
                    <div>
                      <strong>Heritage</strong>
                      <p>{story.heritage}</p>
                    </div>
                  </div>
                  
                  <div className="story-detail">
                    <span className="detail-icon">⭐</span>
                    <div>
                      <strong>Special Ingredient</strong>
                      <p>{story.specialIngredient}</p>
                    </div>
                  </div>
                  
                  <div className="story-detail">
                    <span className="detail-icon">⏰</span>
                    <div>
                      <strong>Preparation</strong>
                      <p>{story.cookingTime}</p>
                    </div>
                  </div>
                </div>
                
                <div className="emotional-connection">
                  <span className="heart-icon">❤️</span>
                  <em>"Made with love, served with pride"</em>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="farm-to-table-banner">
          <div className="banner-content">
            <div className="banner-icon">🌱</div>
            <div className="banner-text">
              <h3>Farm-to-Table Promise</h3>
              <p>We source 90% of our ingredients from local Ethiopian farms and trusted suppliers within 100 miles of our restaurant, ensuring freshness and supporting our community.</p>
            </div>
            <div className="banner-stats">
              <div className="stat">
                <strong>90%</strong>
                <span>Local Sourced</span>
              </div>
              <div className="stat">
                <strong>100mi</strong>
                <span>Max Distance</span>
              </div>
              <div className="stat">
                <strong>15+</strong>
                <span>Partner Farms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodStory;