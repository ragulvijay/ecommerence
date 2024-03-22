import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import heart from '../assetes/heart.png';
import order from '../assetes/order.png';
import recycle from '../assetes/recycle.png';
import './Detail.css';
import like from '../assetes/like.png';
function Detail() {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [liked, setLiked] = useState(false);
  const {id} = useLocation().state;
const [data,setData]=useState([]);
const navigate=useNavigate();

const sizeOptions = ['S', 'M', 'L', 'XL'];
const colorOptions = ['Red', 'Blue', 'Green', 'Yellow'];


const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };


  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }}
 
const handleBuyNow = () => {
  let item ={
    id:data.id,
    name:data.title,
    price: data.price,
    image: data.images,
    quantity: quantity,
    Size :selectedSize,
    Color:selectedColor,
    description:data.description,
    category:data.category,
    }
    navigate ('/checkout',{state:{item}})
  
    };

      const handleLikeToggle = () => {
        setLiked(!liked);
      };

useEffect(()=>{
  axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
  
  .then(res=>{   
    setData(res.data) 
   
})
  .catch(err=>
    console.log(err)
  )
  },[id]);
   
  const handleDelete = () => {
    navigate("/")
  }

  return (<>
  <div className='preview-btn'>
 
  </div>
    <div className='detail-image'>
      <img className='movie-image' src={data.images} alt='movie poster'/>
        <div className='description-heading'>
        <h1 className='movie-title'>{data.title}</h1>
        <p className='movie-data'>${data.price}</p>
        <p className='movie-description'>{data.description}</p>
        <hr/>
        <div className='buttons'>
        <h3 className='colors'>Colours:</h3>
        {colorOptions.map((color, index) => (
          <button className='color-btn'
            key={index}
            onClick={() => handleColorChange(color)}
            style={{ marginRight: '10px',padding:'5px',color:'white',fontWeight:'bold',fontSize:'14px',cursor:'pointer',backgroundColor: color.toLowerCase() }}
          >
            {color}
          </button>
        ))}

        
      </div>
      

        <div className='btns'>
        <h3 className='size'>Select Size:</h3>
        {sizeOptions.map((size, index) => (
          <button className='size-btn'  
            key={index}
            onClick={() => handleSizeChange(size)}
            style={{ marginRight: '10px' }}
          >
            {size}
          </button>
        ))}
        <div className='color'>

          
        </div>
        
      </div>
      
      
      <div className='add-to-cart'>
        <h3 className='quantity'>Quantity:</h3>
        <button className='quantity-btn' style={{ marginRight: '10px' }}
         onClick={decreaseQuantity}>-</button>
        <span className='quantity-text' style={{ margin: '0 10px' }}>{quantity}</span>
        <button className='quantity-btn' onClick={increaseQuantity}>+</button>
      </div>
      <div className='buy-btn'>
      <button className='buy-now-btn' style={{marginTop:'10px'}}
       onClick={handleBuyNow}>Buy Now</button>
       <span className='like-btn'>
      {liked ? (
          <img className='heart-filled'
            src={heart}
            alt="Liked"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={handleLikeToggle}
          />
        ) : (
          <img className='heart-empty'
            src={like}
            alt="Not Liked"
            style={{ width: '30px', height: '30px', cursor: 'pointer' }}
            onClick={handleLikeToggle}
          />
        )}
        </span>
       </div>
       <div className='fast-order'>
       <div className='fast-delivery'>
        <div className='long-delivery'>
          <img src={order} alt="order" />
          </div>
          <div className='order-text'>
            <h4 className='free-delivery'>Free Delivery</h4>
            <p className='postal'>Enter Your postal code For Delivery Available</p>
          </div>
          </div>
          
        <div className='recycle'>
        <div className='long-delivery'>
          <img src={recycle} alt="order" />
          </div>
          <div className='order-text'>
            <h4 className='free-delivery'>Return Delivery</h4>
            <p className='postal'>Free 30 Days Delivery Return. <a href=''>Details</a></p>
          </div>

        
        </div>
        </div>
       
        </div>


    
      </div>
      </>
  )
}

export default Detail