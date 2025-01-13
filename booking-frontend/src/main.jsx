import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Contact from './pages/contact.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './pages/Login/login.jsx';
import Signup from './pages/Signup/signup.jsx';
import Favorites from './pages/Favorites.jsx';
import RoomsList from './pages/RoomsList.jsx'
import { FavoritesProvider } from './context/FavoritesContext'; // Importăm FavoritesProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FavoritesProvider>
        <Header />
        <Home />
        <Footer />
      </FavoritesProvider>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Header />
        <Signup />
      </>
    ),
  },
  {
    path: "/favorites",
    element: (
      <FavoritesProvider>
        <Header />
        <Favorites />
      </FavoritesProvider>
    ),
  },
  {
    path: "/RoomsList", // Path nou pentru camere
    element: (
      <>
        <Header />
        <RoomsList /> {/* Afișăm lista de camere */}
        <Footer />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
