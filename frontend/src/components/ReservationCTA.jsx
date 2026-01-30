import { Link } from 'react-router-dom';

const ReservationCTA = () => {
  return (
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
  );
};

export default ReservationCTA;