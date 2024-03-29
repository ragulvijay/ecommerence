// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        item.quantity=1;
        
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (itemId) => {
      const updatedCartItems = cartItems.filter(item => item.id !== itemId);
      setCartItems(updatedCartItems);
      };
      

    const  handleIncreaseQuantity = (itemId) => {
        setCartItems(cartItems.map(item => 
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
      };
    
      const handleDecreaseQuantity = (itemId) => {
        setCartItems(cartItems.map(item =>
          item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
      };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart,handleIncreaseQuantity,handleDecreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
