
import React, { createContext, useContext, useState } from 'react';

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);


  const toggleLike = (productId) => {
    setLikedItems((prevLikedItems) => {
      if (prevLikedItems.includes(productId)) {
        return prevLikedItems.filter((id) => id !== productId);
      } else {
        return [...prevLikedItems, productId];
      }
    });
  };
   
  const removeItem = (itemId) => {
    setLikedItems(likedItems.filter((id) => id !== itemId));
  };

  return (
    <LikesContext.Provider value={{ likedItems, toggleLike,removeItem }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => {
  const context = useContext(LikesContext);
  if (!context) {
    throw new Error('uselike must used');
  }
  return context;
};
