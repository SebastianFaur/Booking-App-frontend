import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    // Aplică tema globală pe body
    document.body.classList.toggle('dark', theme === 'dark');
    document.body.classList.toggle('light', theme === 'light');

    // Salvează tema în localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <footer className={`footer ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <div className="text-center p-3">
        © 2025 BookingApp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
