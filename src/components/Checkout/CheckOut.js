import React,{useState,useEffect}from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './CheckOut.css';



const CheckOut = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state);
 

    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then(res=>{
            setData(res.data);
        })
    },[])



    


    

  return (
    <div>
      <div className='checkout-container'>
        
         <div className='billing-details'>
            <h2>Billing Details</h2>
            <div className='billing-form'>
                <input type='text' placeholder='First Name' />
                <br/>
                <input type='text' placeholder='Last Name' /><br/>
                <input type='text' placeholder='Email' /><br/>
                <input type='text' placeholder='Phone' /><br/>
                <input type='text' placeholder='Address' /><br/>
                <input type='text' placeholder='City' /><br/>
                <input type='text' placeholder='State' /><br/>
                <input type='text' placeholder='Zip Code' /><br/>
            </div>
        </div>
        <div className='order-summary'>
            <h2>Order Summary</h2>
            <table className='order-table'>
                <tr>
                    <th>Image</th>
                    <th>Product</th>
                    <th>Size</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
                    <tr>
                        <td><img src={state?.item.Image} alt="" /></td>
                        <td>{state?.item.name}</td>
                        <td>{state?.item.Size}</td>
                        <td>{state?.item.quantity}</td>
                        <td>{state?.item.price}</td>
                    </tr>
                    <div className='total-price'>
                        <p>Total Price : {state?.item.price}</p>
                    </div>
                
            </table>
        </div>
    </div>
    </div>
    
          
    
  )
}

export default CheckOut;
