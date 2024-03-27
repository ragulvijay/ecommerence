
import React, { createContext, useContext, useState } from 'react';

const LikesContext = createContext();

export const LikesProvider = ({ children }) => {
  const [likedItems, setLikedItems] = useState([]);

  

  const toggleLike = (itemId) => {
    if (likedItems.includes(itemId)) {
      setLikedItems(likedItems.filter((id) => id !== itemId));
      console.log(likedItems);
    } else {
      setLikedItems([...likedItems, itemId]);
      console.log(likedItems);
    }
  };

  return (
    <LikesContext.Provider value={{ likedItems, toggleLike }}>
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
