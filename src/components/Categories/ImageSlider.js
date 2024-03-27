import React,{useState,useEffect, useRef} from 'react'

import '../Categories/ImageSlider.css';
import axios from 'axios';


const ImageSlider = () => {
  const sliderRef = useRef(null);
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


    const goToPrevious = ()=>{
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
    const goToNext = ()=>{
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
        
  
  
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
