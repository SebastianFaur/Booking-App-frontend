import React from 'react';
import './Home.css';
import camin1 from '../../assets/images/camin1.jpg'; 
import camin2 from '../../assets/images/camin2.jpg';
import camin3 from '../../assets/images/camin3.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="typing-text">Welcome to ULBS-Booking</h1>
      <p className="lead text-center">
      Find a room in our student dorm , perfect for your university life."
      </p>
     <div id="carouselExampleControls" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={camin1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={camin2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={camin3} alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
