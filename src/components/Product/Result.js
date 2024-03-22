// import React, { useState } from 'react'
// import './Result.css'

// const Result = ({ cart, removeItemFromCart, increaseQuantity, decreaseQuantity }) => {
//       const [price,setPrice]=useState(0)
//       return (
//         <ul>
//           {cart?.map(item => (
//             <li key={item.id}>
//               <img src={item.imgSrc} alt={item.title} />
//               <p>{item.title}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ${item.price * item.quantity}</p>
//               <button onClick={() => increaseQuantity(item.id)}>+</button>
//               <button onClick={() => decreaseQuantity(item.id)}>-</button>
//               <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//       );
// }

// export default Result



// import React,{useState} from 'react'
// import '../Cart/Cart.css'
// import display from '../assetes/display.png';
// import game from '../assetes/game.png';

// const AddCart = ({ cart, removeItemFromCart, increaseQuantity, decreaseQuantity }) => {
//     const[price,setPrice]=useState(0);
//     const [quantity, setQuantity] = useState(1);
   
      
//   return (
//     <>
    
//     <div className='cart-container'>
        
//        <table>
//        {cart?.map(item => (
//         <tr>
//             <th>Product</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>SubTotal</th>
//         </tr>
        
//         <tr>
        
//             <td className='data-table'><img className='monitor-im' src={display} alt='display'/><h5 className='text'>LCD Monitor</h5> </td>
//             <td>$650</td>
//             <td><span className='quantity-check'><span className='increase' onClick={increaseQuantity}>+</span><span>{quantity}</span>
//             <span className='decrease' onClick={decreaseQuantity}>-</span></span></td>
//             <td><div className='sub-todal'>$650
//                 </div></td>
                
                
//         </tr>
//         <tr>
//             <td className='data-table'><img src={game} alt='display'/><h5 className='text'>H1 Gamepad</h5></td>
//             <td>$550</td>
//             <td><span className='quantity-check'><span className='increase' onClick={increaseQuantity}>+</span><span>{quantity}</span>
//             <span className='decrease' onClick={decreaseQuantity}>-</span></span></td>
//             <td><div className='sub-todal'>$550
//                 </div></td>
//         </tr>
     
//     </table>
//     <div className='shop-btn'>
//         <div className='return-shop'>
//             <button className='entroll-button'>Return to Shop</button>
//         </div>
//         <div className='update-btn'>
//             <button className='entroll-button'>Update Cart</button>
//         </div>
//     </div>
//     <div className='coupon-btn'>
//         <div className='input-coupon'>
//             <div className='coupon'><input className='coupen-code-text' placeholder='Coupon Code'/></div>
// <button className='coupon-btn-btn'>Apply Coupon</button>        </div>
//         <div className='cart-total'>
//             <h5 className='total'>Total cart</h5>
            
//             <div className='total-price'>
//                 <h5 className='total-code'>Subtotal</h5>
//                 <h5 className='total-rupee'>$650</h5>
//             </div>
//             <div className='total-price'>
//                 <h5 className='total-code'>Shipping</h5>
//                 <h5 className='total-rupee'>Free</h5>
//             </div>
//             <div className='total-price'>
//                 <h5 className='total-code'>Total</h5>
//                 <h5 className='total-rupee'>$1750</h5>
//             </div>
//             <div className='checkout-btn'>
//                 <button className='checkout-button'>Process to Checkout</button>
//             </div>
//         </div>

//     </div>
//     </div>
//     </>
//   )
// }

// export default AddCart
