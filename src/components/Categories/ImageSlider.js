import React,{useState,useEffect} from 'react'

import '../Categories/ImageSlider.css';
import axios from 'axios';


const ImageSlider = () => {
  const [image,setImage] = useState([]);
  useEffect(()=>{
    axios.get(" https://api.escuelajs.co/api/v1/products")
    .then(res=>{
      setImage(res.data) 
     
  })
    .catch(err=>
      console.log(err)
    )
    },[]);


    
  

  let box = document.querySelector(".slides-image")



        
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
    <div className="slider-page">
        <div className='category'>
            <h2>Browse By category</h2>
        <div className='arrow-img'>
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
      </div>
      </div>
      <div className="slides-image">
        {image.map((item, index) => (
          <div key={index} className="slide-image">
            <img  src={item.category.image} alt="image" className="slide-text" />
            <h2 className='slide-category-name'>{item.category.name}</h2>


        </div>
            
            
          
          
        ))}
      </div>
    </div>
  );
};

export default ImageSlider
