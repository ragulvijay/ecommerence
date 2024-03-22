import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import remove from "../assetes/remove.png" ;
import eye from '../assetes/eye.png';
import './WhishList.css';
import { useNavigate } from 'react-router-dom';

const WhishList = () => {
    const[wishlist,setWishlist]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(" https://api.escuelajs.co/api/v1/products")
        .then(res=>{
          setWishlist(res.data) 
          console.log(res.data)
      })
        .catch(err=>
          console.log(err)
        )

        },[]);
        const handleDelete=(id)=>{
          setWishlist(wishlist.filter(item=>item.id!==id))
        }
       
  return (<>
    <div className='wishlist-cards'>

        <div className='wishlist-container'>
            <h2 className='wishlist-heading'>Wishlist({wishlist.length})</h2>
            
            <button className='wishlist-btn' onClick={()=>navigate("/")}>Move to Back</button>
        </div>
        <div className='wishlist-items'>
          {wishlist.map((item, index)=>(
            
            <div className='wishlist-item' key={index}>
              <img className='wishlist-btn' src={remove} alt="" data-id={item.id}  onClick={()=>handleDelete(item.id)}/>
              <img className='wishlist-image' src={item.images} alt="wish-image" />
              <h3 className='wishlist-title'>{item.title}</h3>
              <p className='wishlist-price'>${item.price}</p>
              
            </div>
            ))}
        </div>





        <div className='eye-container'>
            <h2 className='wishlist-heading'>Just For You({wishlist.length})</h2>
            
            <button className='wishlist-btn' onClick={()=>navigate("/")}>See All</button>
        </div>
        <div className='wishlist-items'>
          {wishlist.map((item, index)=>(
            
            <div className='wishlist-item' key={index}>
              <img className='eye-btn' src={eye} alt="" data-id={item.id} />
              <img className='wishlist-image' src={item.images} alt="eye-image" />
              <h3 className='wishlist-title'>{item.title}</h3>
              <p className='wishlist-price'>${item.price}</p>
              
            </div>
            ))}
        </div>
{/*     



    <div className='products-text'>
        {wishlist.map((item,index)=>(
          <div className='add-btn-btn'>
            <div className='product-text' key={index}>
                <div className='delete-img-text '  data-id={item.id}>
                    
            <img className='delete-btn' onClick={handleDelete} src={key} alt="" />
            </div>
                <img className='product-image-page'  src={item.images[0]} alt="" />
                <div className='product-name-price'>
                <h3 className='product-title'>{item.title}</h3>  
                </div>
            </div>
            <button className='add-btn-btn' >Add to Cart</button>
                       </div>
        ))}
    </div> */}
      
    </div>
    </>
  )
}

export default WhishList
