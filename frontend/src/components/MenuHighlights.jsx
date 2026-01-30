import { Link } from 'react-router-dom';

const MenuHighlights = () => {
  const highlights = [
    {
      id: 1,
      name: 'Shekla Tibs',
      image: '/images/tibs.jpeg',
      alt: 'Tibs'
    },
    {
      id: 2,
      name: 'Doro Wot',
      image: '/images/Doro Wot.jpg',
      alt: 'Doro Wot'
    },
    {
      id: 3,
      name: 'Kitfo',
      image: '/images/ethiopian-kitfo-herbs-cheese-ayibe-close-up-horizontal-plate-view-above-71683090.webp',
      alt: 'Kitfo'
    }
  ];

  return (
    <section className="menu-highlights">
      <div className="container">
        <h2 className="text-center">Menu Highlights</h2>
        <p className="section-subtitle text-center">
          Discover our Ethiopian specialties and international favorites
        </p>

        {highlights.map((item) => (
          <Link to="/menu" key={item.id}>
            <div className="box-3 float-container">
              <img
                src={item.image}
                alt={item.alt}
                className="img-responsive img-curve"
              />
              <h3 className="float-text text-white">{item.name}</h3>
            </div>
          </Link>
        ))}

        <div className="clearfix"></div>
      </div>
    </section>
  );
};

export default MenuHighlights;