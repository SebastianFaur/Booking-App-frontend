import React, { createContext, useState, useContext } from 'react';

// Creăm contextul pentru favorite
const FavoritesContext = createContext();

// Folosim acest hook pentru a accesa starea de favorite
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Componenta care va înconjura aplicația și va oferi acces la context
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Adăugăm un carusel în lista de favorite
  const addFavorite = (carousel) => {
    setFavorites((prevFavorites) => [...prevFavorites, carousel]);
  };

  // Înlăturăm un carusel din lista de favorite
  const removeFavorite = (carousel) => {
    setFavorites((prevFavorites) => 
      prevFavorites.filter(fav => fav.id !== carousel.id)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
