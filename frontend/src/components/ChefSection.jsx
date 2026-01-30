const ChefSection = () => {
  const specialties = [
    'Traditional Ethiopian Cuisine',
    'International Favorites',
    'Fusion Dishes',
    'Vegetarian Options'
  ];

  return (
    <section className="chef-section">
      <div className="container">
        <div className="chef-wrapper">
          <div className="chef-image">
            <img src="/images/image.jpg" alt="Our Chef" className="img-responsive" />
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
                {specialties.map((specialty, index) => (
                  <li key={index}>{specialty}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefSection;