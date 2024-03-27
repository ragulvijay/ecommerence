import React,{useEffect, useRef, useState,useContext} from 'react';
import axios from 'axios';
import './Product.css';
import {useNavigate} from 'react-router-dom';
import card from '../assetes/card.png';
import eye from '../assetes/eye.png';
import WhishList from '../WhishList/WhishList';
import { useLikes } from '../LikesContext';


const Products = ({ addItemToCart,id,name,title,price  }) => {
  const sliderRef = useRef(null);

  const { likedItems, toggleLike } = useLikes();
  const isLiked = likedItems.includes(id);
  console.log(likedItems)
  

  
    const [product,setProduct]=useState([]);
    const date = new Date();
    const showTime = date.getHours()
    const showDay=date.getDay()
    const showMinute=date.getMinutes()
    const showSecond=date.getSeconds()
    const navigate=useNavigate()
    const [wishlist, setWishlist] = useState([]);

    
    

    
 
    useEffect(()=>{
        axios.get(" https://api.escuelajs.co/api/v1/products")
        .then(res=>{
          setProduct(res.data) 
          
      })
        .catch(err=>
          console.log(err)
        )
        },[]);

        const goToNext = () => {
          sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
        };
      
        const goToPrevious = () => {
          sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
        };


       const addWishlist = (item) => {
        setWishlist([...wishlist, item]);
        console.log(wishlist)
      }
      const removeWishlist = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
      }
      

    const handleChange = (id) => {
      navigate(`about/${id}`, { state: { id: id } });
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
    <div className='products' ref={sliderRef}>
        {product.map((item,index)=>(
            
        
          <div className='add-btn'>
            <div className='product'  key={index}>
              {name}
                <img className='product-image' onClick={()=>handleChange(item?.id)} src={item?.images} alt="" />
                <span className='like-icon'><img className='like-wishlist' style={{color:isLiked ? 'red' : 'white'}} src={card} onClick={()=> toggleLike(item.id)}  alt='heart' /></span>
                <span className='eye-icon'><img className='eye-wishlit' src={eye}/></span>
                 <button className='view-product-detail' onClick={()=>addItemToCart(item)}  >Add to Cart</button>
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
