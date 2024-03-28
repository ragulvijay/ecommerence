import React, { useState } from 'react'
import '../Cart/Cart.css';
import { useCart } from '../CartContext';

const AddCart = () => {  
  const { cartItems, removeItemFromCart,increaseQuantity,decreaseQuantity ,item} = useCart();
  
  console.log(cartItems);

  const [total, setTotal] = useState(0);
  const [coupon, setCoupon] = useState('');

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  }
  
  const ProcessCheckout  = async()=> {
    const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: cartItems,
        coupon: coupon,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  

  


  return (
    <>
    
    <div className='cart-container'>
    <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>SubTotal</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item ) => (
            <tr key={item?.id}>
              
              <td className='data-table'><img src={item?.images} alt={item.title} style={{ width: '100px' }} /></td>
              <td><p>{item?.title}</p></td>
              
              <td><p>${(item.price * item.quantity).toFixed(2)}</p></td>
              <td className='cursor'><span className='quantity-check'><span className='increase' onClick={()=>increaseQuantity(item?.id)}>+</span><span>{item.quantity}</span>
              <span className='decrease' onClick={()=>decreaseQuantity(item?.id)} disabled={item.quantity === 1}>-</span></span></td>
              
              <td><button onClick={() => removeItemFromCart(item?.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='shop-btn'>
        
         <div className='return-shop'>
             <button className='entroll-button'>Return to Shop</button>
         </div>
         <div className='update-btn'>
             <button className='entroll-button'>Update Cart</button>
         </div>
     </div>
     <div className='coupon-btn'>
         <div className='input-coupon'>
             <div className='coupon'><input className='coupen-code-text' placeholder='Coupon Code'/></div>
 <button className='coupon-btn-btn' onClick={handleCouponChange}>Apply Coupon</button>        </div>
         <div className='cart-total'>
            

            
             <h5 className='total'>Total cart</h5>
            
             <div className='total-price'>
                 <h5 className='total-code'>SubTotal</h5>
                 <h5 className='total-rupee'> ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} </h5>
             </div>
             <div className='total-price'>
                 <h5 className='total-code'>Shipping</h5>
                 <h5 className='total-rupee'>Free</h5>
             </div>
             <div className='total-price'>
                 <h5 className='total-code'>Total</h5>
                 <h5 className='total-rupee'>${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h5>
             </div>
             <div className='checkout-btn'>
                <button className='checkout-button' onClick={ProcessCheckout}>Process to Checkout</button>
             </div> 
            
         </div>
       
   </div>
    </div>
    
  
 
    </>
  )
}

export default AddCart
