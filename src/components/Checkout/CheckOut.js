import React,{useState,useEffect}from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './CheckOut.css';
import { useNavigate } from 'react-router-dom';
import pay from '../assetes/pay.png';
import bank from '../assetes/bank.png';
import visa from '../assetes/visa.png';
import ippo from '../assetes/ippo.png';



const CheckOut = () => {
    const [isChecked, setIsChecked] = useState(false);
    const location = useLocation();
    const state = location.state;
    console.log(state);
 

    const [data,setData] = useState([]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
      
    

    // useEffect(()=>{
    //     axios.get('https://api.escuelajs.co/api/v1/products')
    //     .then(res=>{
    //         setData(res.data);
    //     })
    // },[])



    


    

  return (
    <div>
      <div className='checkout-container'>
        
         <div className='billing-details'>
            <h2>Billing Details</h2>
            <div className='billing-form'>
                <input className='form-fillup' type='text' placeholder='First Name' />
                <br/>
                <input className='form-fillup' type='text' placeholder='Last Name' /><br/>
                <input className='form-fillup' type='text' placeholder='Email' /><br/>
                <input className='form-fillup' type='text' placeholder='Phone' /><br/>
                <input className='form-fillup' type='text' placeholder='Address' /><br/>
                <input className='form-fillup' type='text' placeholder='City' /><br/>
                <input className='form-fillup' type='text' placeholder='State' /><br/>
                <input className='form-fillup' type='text' placeholder='Zip Code' /><br/>
                <div className='checkbox-container'>
                    <input type="checkbox" id="checkbox" name="checkbox" value="checkbox" onChange={handleCheckboxChange} />
                    <label className='information-save' htmlFor="checkbox">Save this information for next time</label>
                </div>
            </div>
        </div>
        <div className='order-summary'>
            <h2>Order Summary</h2>
            <table className='order-table'>
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Size</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                    <tr>
                        <td><img src={state?.item.Image} alt="" /></td>
                        <td>{state?.item.name}</td>
                        <td>{state?.item.Size}</td>
                        <td>{state?.item.colorOptions}</td>
                        <td>{state?.item.quantity}</td>
                        <td>{state?.item.price}</td>
                    </tr>
                    
                   
                    </table>
                    <div className='shipping-options'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>
                    <div className='sub-total-price'>
                        <p>Total Price </p>
                        <p>${state?.item.totalPrice}</p>
                    </div>
                    <div className='payment-options'>
                    <input type="radio" id="bank" name="fav_language" value="Bank"/>
                     <label className='bank-detail' for="html">Bank</label>
                    <div className='payment-image'>
                        <img className='bank-img' src={bank} alt="" />
                        <img className='bank-img' src={pay} alt="" />
                        <img className='bank-img' src={visa} alt="" />
                        <img className='bank-img' src={ippo} alt="" />
                    </div></div>
                    <br/>
                    <div className='cash-on'>
                    <input className='cash-radio' type="radio" id="cash-on" name="fav_language" value="cashondelivery"/>
                     <label for="cash-on">Cashon Delivery</label>
                    </div><br/>
                    <div className='place-order'>
                        <input className='place-order-input' type="text" placeholder='Coupen Code' />
                        
                        <button className='place-order-btn'>Apply Coupen</button>
                    </div>
                    <div className='place-order-final'>
                        <button className='place-order-final-btn'>Place Order</button>
                        
                    </div>
                    
                
           
        </div>
    </div>
    </div>
    
          
    
  )
}

export default CheckOut;
