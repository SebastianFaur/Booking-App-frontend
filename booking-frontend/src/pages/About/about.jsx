import React, { useEffect } from "react";
import "./About.css";
import { FaHandshake, FaRocket, FaUniversity } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className="about-container">
      <header className="about-header">
        <h1 data-aos="fade-up">About ULBS-Booking</h1>
        <p data-aos="fade-up">
          Simplifying student accommodation at "Lucian Blaga University of Sibiu"!
        </p>
      </header>

      <section className="mission" data-aos="fade-right">
        <div className="icon">
          <FaUniversity size={50} />
        </div>
        <h2>Our Mission</h2>
        <p>
          ULBS-Booking aims to make finding and reserving a dorm room simple, efficient,
          and stress-free for every student.
        </p>
      </section>

      <section className="how-it-works">
        <h2 data-aos="fade-left">How It Works</h2>
        <div className="steps">
          <div className="step" data-aos="zoom-in">
            <FaRocket size={40} />
            <h3>Step 1: Create an Account</h3>
            <p>Sign up to access all the features of the platform.</p>
          </div>
          <div className="step" data-aos="zoom-in">
            <FaHandshake size={40} />
            <h3>Step 2: Browse Rooms</h3>
            <p>Explore options, view room details, and compare facilities.</p>
          </div>
          <div className="step" data-aos="zoom-in">
            <BiMessageSquareDetail size={40} />
            <h3>Step 3: Book Your Room</h3>
            <p>Reserve your perfect room with just a few clicks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
