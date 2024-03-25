import React, { useState } from 'react'
import Header from '../Header/Header'
import Products from './Products';
import Result from './Result';
import AddCart from '../Cart/AddCart';
const AddtoCart = () => {

  const [cart,setCart]=useState([])
  const addItemToCart = (product) => {
    const existingIndex = cart.findIndex(item => item.id === product.id);
    if (existingIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
    }
  };

  // Function to remove item from the cart
  const removeItemFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  
  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };
  
    
    
  
  return (
    <div>
    
      <Header size={cart?.length} />
       <Products addItemToCart={addItemToCart} /><AddCart cart={cart}
          removeItemFromCart={removeItemFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}/>
    </div>
  )
}


export default AddtoCart;

