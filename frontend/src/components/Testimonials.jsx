const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Food Blogger',
      rating: '★★★★★',
      text: 'The most authentic Ethiopian experience I\'ve had outside of Ethiopia. The injera was perfect and the doro wot was absolutely divine!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Regular Customer',
      rating: '★★★★★',
      text: 'I\'ve been coming here for years and the quality never disappoints. The staff treats you like family and the food is consistently excellent.'
    },
    {
      id: 3,
      name: 'Aisha Mohammed',
      role: 'Ethiopian Food Enthusiast',
      rating: '★★★★★',
      text: 'Finally found a place that reminds me of home! The spices are perfectly balanced and the traditional coffee ceremony is a beautiful touch.'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="text-center">What Our Customers Say</h2>
        <p className="section-subtitle text-center">
          Hear from those who have experienced our authentic Ethiopian hospitality
        </p>

        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">{testimonial.rating}</div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;