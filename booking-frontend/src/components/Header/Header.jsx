import { Link } from 'react-router-dom';
import './Header.css';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaUser, FaSearch, FaHome, FaInfoCircle, FaEnvelope, FaHeart } from 'react-icons/fa'; // Importăm FaHeart pentru iconița de favorite
import AOS from 'aos';  // Importăm AOS
import 'aos/dist/aos.css'; // Importăm stilurile AOS

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top shadow-sm custom-navbar ${darkMode ? 'navbar-dark' : 'navbar-light'}`} data-aos="fade-down">
      <div className="container">
        <Link className="navbar-brand custom-brand" to="/" data-aos="zoom-in">
          BookingApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" data-aos="fade-up">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" data-aos="fade-left">
              <Link className="nav-link custom-link" to="/">
                <FaHome size={20} className="me-2" />
                Home
              </Link>
            </li>
            <li className="nav-item" data-aos="fade-left" data-aos-delay="200">
              <Link className="nav-link custom-link" to="/about">
                <FaInfoCircle size={20} className="me-2" />
                About
              </Link>
            </li>
            <li className="nav-item" data-aos="fade-left" data-aos-delay="400">
              <Link className="nav-link custom-link" to="/contact">
                <FaEnvelope size={20} className="me-2" />
                Contact
              </Link>
            </li>
            {/* Iconița pentru favorite */}
            <li className="nav-item" data-aos="fade-left" data-aos-delay="600">
              <Link className="nav-link custom-link" to="/favorites">
                <FaHeart size={20} className="me-2" />
                Favorites
              </Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search" data-aos="fade-up">
            <input
              className="form-control me-2 custom-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn custom-btn" type="submit">
              <FaSearch size={20} />
            </button>
          </form>
          <div className="theme-toggle-container ms-3" data-aos="zoom-in">
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
              <span className="slider round">
                {darkMode ? <FaMoon /> : <FaSun />}
              </span>
            </label>
          </div>
          <div className="login-icon ms-3" data-aos="zoom-in" data-aos-delay="500">
            <Link className="login-link" to="/login">
              <FaUser size={24} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
