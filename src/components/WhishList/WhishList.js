import React,{useState} from 'react';
import { useLikes } from '../LikesContext';
import '../WhishList/WhishList.css';
import remove from '../assetes/remove.png';
import { useNavigate} from 'react-router-dom';


const WishlistPage = () => {
  const { likedItems,item,removeItem } = useLikes();
  const navigate=useNavigate();
  const handleRemoveItem = (id) => {
    removeItem(id);
  };

  


  return (
    <div>
       <div className='wishlist-cards'>
       
<div className='wishlist-container'>

  
    <h2 className='wishlist-heading'>Wishlist({likedItems.length})</h2>

    <button className='wishlist-btn' onClick={()=>navigate("/")}>Move to Back</button>
</div>
<div className='wishlist-items'>
  {likedItems?.map((item)=>(

    <div className='wishlist-item' key={item}>
      <img className='wishlist-btn' src={remove} alt="" data-id={item.id}  onClick={() => handleRemoveItem(item)}/>
      <img className='wishlist-image' src={item?.images} alt="wish-image" />
      <h3 className='wishlist-title'>{item?.title}</h3>
      <p className='wishlist-price'>${item?.price}</p>

    </div>
    ))}
</div>
</div> 



      {/* <h1>Wishlist</h1>
      <ul>
        {likedItems?.map((item) => (
          
          <li key={item?.id}>
            <span ><img src={item?.images}/></span><br/>
            <button ><img onClick={() => handleRemoveItem(item)} src={remove}/></button><br/>
            <span>{item?.price}</span><br/><br/>
            <span>{item?.title}</span><br/><br/>
            

          </li>
          
         
        ))}
       
      </ul> */}
    </div>
  );
};

export default WishlistPage;
