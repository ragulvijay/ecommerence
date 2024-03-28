// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    const increaseQuantity = (index) => {
        let updatedCart = [...cartItems];
        updatedCart [ index ]. quantity++;
        setCartItems (updatedCart);
        console.log(updatedCart);
        };
    const decreaseQuantity = (index) => {
        let updatedCart = [ ...cartItems ];
        updatedCart [ index ]. quantity--;
        setCartItems (updatedCart);
        console.log(updatedCart);
        }



    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeItemFromCart,increaseQuantity,decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
