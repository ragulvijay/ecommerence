import React from 'react';
import { useLikes } from '../LikesContext';

const WishlistPage = () => {
  const { likedItems } = useLikes()
  

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {likedItems?.map((item) => (
          
          <li key={item?.id}>
            <span>{item?.name}</span>
            <span>{item?.price}</span>
            <span>{item?.description}</span>

          </li>
          
         
        ))}
       
      </ul>
    </div>
  );
};

export default WishlistPage;
