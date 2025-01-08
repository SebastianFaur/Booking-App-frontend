import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer.jsx'
import{createBrowserRouter,RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
