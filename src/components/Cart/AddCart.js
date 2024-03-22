import React from 'react'
import '../Cart/Cart.css'

const AddCart = ({ cart, removeItemFromCart, increaseQuantity, decreaseQuantity }) => {  
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
          {cart?.map((item ) => (
            <tr key={item?.id}>
              
              <td className='data-table'><img src={item?.images} alt={item.title} style={{ width: '100px' }} /></td>
              <td><p>{item?.title}</p></td>
              
              <td><p>Price: ${item?.price * item?.quantity}</p></td>
              <td className='cursor'><span className='quantity-check'><span className='increase' onClick={() => increaseQuantity(item?.id)}>+</span><span>{item?.quantity}</span><span className='decrease' onClick={() => decreaseQuantity(item?.id)}>-</span></span></td>
              
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
 <button className='coupon-btn-btn'>Apply Coupon</button>        </div>
         <div className='cart-total'>
            

            
             <h5 className='total'>Total cart</h5>
            
             <div className='total-price'>
                 <h5 className='total-code'>SubTotal</h5>
                 <h5 className='total-rupee'> $456 </h5>
             </div>
             <div className='total-price'>
                 <h5 className='total-code'>Shipping</h5>
                 <h5 className='total-rupee'>Free</h5>
             </div>
             <div className='total-price'>
                 <h5 className='total-code'>Total</h5>
                 <h5 className='total-rupee'>$1750</h5>
             </div>
             <div className='checkout-btn'>
                <button className='checkout-button'>Process to Checkout</button>
             </div> 
            
         </div>
       
   </div>
    </div>
    
  
 
    </>
  )
}

export default AddCart
