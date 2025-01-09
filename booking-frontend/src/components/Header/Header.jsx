import { Link } from 'react-router-dom';
import './Header.css';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';  // Iconițe pentru soare și lună

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm"> 
      <div className="container">
        <Link className="navbar-brand" to="/">BookingApp</Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn custom-btn" type="submit">
              Search
            </button>
          </form>
          <div className="theme-toggle-container ms-3">
            <label className="switch">
              <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
              <span className="slider round">
                {darkMode ? <FaMoon /> : <FaSun />}  
              </span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
