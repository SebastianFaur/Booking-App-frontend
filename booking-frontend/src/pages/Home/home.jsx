import React, { useEffect } from 'react';
import './Home.css';
import camin1 from '../../assets/images/camin1.jpg'; 
import camin2 from '../../assets/images/camin2.jpg';
import camin3 from '../../assets/images/camin3.jpg';
import AOS from 'aos';  
import 'aos/dist/aos.css';  
import { useFavorites } from '../../context/FavoritesContext';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Importăm iconițele de inimă goală și umplută

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { addFavorite, removeFavorite, favorites } = useFavorites();
  
  // Array cu datele caruselelor
  const carousels = [
    {
      id: 1,
      images: [camin1, camin2, camin3]
    },
    {
      id: 2,
      images: [camin2, camin3, camin1]
    },
    {
      id: 3,
      images: [camin3, camin1, camin2]
    }
  ];

  const isFavorite = (carousel) => {
    return favorites.some(fav => fav.id === carousel.id); // Verificăm dacă caruselul este în lista de favorite
  };

  const handleFavoriteClick = (carousel) => {
    if (isFavorite(carousel)) {
      removeFavorite(carousel); // Înlăturăm caruselul din favorite
    } else {
      addFavorite(carousel); // Adăugăm caruselul în favorite
    }
  };

  return (
    <div className="home-container">
      <h1 className="typing-text" data-aos="fade-up">Welcome to ULBS-Booking</h1>
      <p className="lead text-center" data-aos="fade-up" data-aos-delay="200">
        Find a room in our student dorm, perfect for your university life.
      </p>

      <div className="booking-widget" data-aos="fade-up" data-aos-delay="300">
        <select className="form-select me-2">
          <option value="">When</option>
          <option value="first">First Semester</option>
          <option value="second">Second Semester</option>
        </select>
        <select className="form-select">
          <option value="">Guests</option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
        </select>
      </div>


      <div className="carousel-container">
        {carousels.map((carousel) => (
          <div key={carousel.id} className="carousel-box">
            <div
              id={`carouselExampleControls${carousel.id}`}
              className="carousel slide custom-carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {carousel.images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                  >
                    <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#carouselExampleControls${carousel.id}`}
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#carouselExampleControls${carousel.id}`}
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Iconița de inimă pentru a adăuga sau elimina din favorite */}
            <div 
              className="favorite-icon" 
              onClick={() => handleFavoriteClick(carousel)} // Adăugăm sau eliminăm caruselul din favorite
            >
              {isFavorite(carousel) ? (
                <FaHeart size={30} color="blue" />
              ) : (
                <FaRegHeart size={30} color="blue" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
