import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './Favorite.css'; 

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorite-page">
      <h2 className="text-center my-4">Your Favorite Rooms</h2>
      <div className="favorite-list d-flex flex-wrap justify-content-start align-items-start">
        {Array.isArray(favorites) && favorites.length > 0 ? (
          favorites.map((carousel, index) => (
            <div key={index} className="carousel-box mx-2">
              <h5 className="carousel-title text-center">{carousel.title || `Room ${index + 1}`}</h5>
              <div
                id={`carouselExampleControlsFavorite${carousel.id}`}
                className="carousel slide custom-carousel"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  {carousel.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}
                    >
                      <img
                        className="d-block w-100 carousel-image"
                        src={image}
                        alt={`Slide ${imgIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExampleControlsFavorite${carousel.id}`}
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExampleControlsFavorite${carousel.id}`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No favorites yet</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
