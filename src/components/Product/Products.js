import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './Product.css';
import {useNavigate} from 'react-router-dom';

const Products = ({ addItemToCart }) => {
    const [product,setProduct]=useState([]);
    const date = new Date();
    const showTime = date.getHours()
    const showDay=date.getDay()
    const showMinute=date.getMinutes()
    const showSecond=date.getSeconds()
    const navigate=useNavigate()
 
    useEffect(()=>{
        axios.get(" https://api.escuelajs.co/api/v1/products")
        .then(res=>{
          setProduct(res.data) 
          
      })
        .catch(err=>
          console.log(err)
        )
        },[]);
        
    const handleChange = (id) => {
      navigate(`about/${id}`, { state: { id: id } });
    };

        let box = document.querySelector(".products")



        
        const goToPrevious = () => {
            let width = box.clientWidth
            box.scrollLeft = box.scrollLeft - width;
            console.log(width)
        
        
            
          };
          const goToNext = () => {
            let width = box.clientWidth
            box.scrollLeft = box.scrollLeft + width;
            console.log(width)
          };
        
  return (
    <>
    <section id='cart-section'>
        

    <div className='flash-sales'><strong>Flash Sales </strong>
    <div className='timing'>
        <div className='min'>Day<br/><span className='sec'>{showDay} :</span></div>
        <div className='min'>Time<br/><span className='sec'>{showTime} :</span></div>
        <div className='min'>Minute<br/><span className='sec'>{showMinute} :</span></div>
        <div className='min'>Second<br/><span className='sec'>{showSecond} </span></div>

    </div>
    <div className='arrows'>
    <button className='leftArrowStyle' onClick={goToPrevious}  >
          ❰
        </button>
        <button className='rightArrowStyle' onClick={goToNext} >
          ❱
        </button>
    </div>
    </div>
    <div className='products'>
        {product.map((item,index)=>(
          <div className='add-btn'>
            <div className='product'  key={index}>
              
                <img className='product-image' onClick={()=>handleChange(item?.id)} src={item?.images} alt="" />
                <button className='view-product-detail' onClick={()=>addItemToCart(item)}>Add to Cart</button>
                <div className='product-name'>
                <h3>{item.title}</h3>
                <p>price:${item.price}</p>
                
                
                </div>
            </div>
           
            </div>
        ))}
    </div>
    
    <div className='product-details'>
        <button className='view-product'>View All Product</button>
        </div>
    </section>
    </>
  )
}

export default Products