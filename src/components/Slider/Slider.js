import React,{useState,useEffect,useRef} from 'react'
import axios from 'axios';
import './Slider.css'




const Slider = () => {
  const sliderRef = useRef(null);
    const[data,setData]=useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
   

    useEffect(()=>{
        axios.get(" https://api.escuelajs.co/api/v1/products")
        .then(res=>{
          setData(res.data) 
          
      })
        .catch(err=>
          console.log(err)
        )
        },[]);
        

        const goToNext = () => {
          sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
          if (currentIndex === data.length - 1) return;
          setCurrentIndex ((prevIndex )=>  prevIndex+1);
          console.log(currentIndex)

        };
      
        const goToPrevious = () => {
          sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
          if (currentIndex === 0) return; 
          console.log(currentIndex)
          setCurrentIndex ((prevIndex )=>  prevIndex-1);
          console.log(currentIndex)
        };
          
        


return (
   <>
   <div className="slider" ref={sliderRef}>
    <div className='img-container'>
    <div className='leftArrowStyles' onClick={goToPrevious} >
          ❰
        </div>
        <div className='rightArrowStyles' onClick={goToNext} >
          ❱
        </div>

    </div>
    <div className="slider-container"   >
        {data.map((item, index) => (
          <div className={`slider-item ${index === currentIndex ? 'active' : ''}`}  key={index} style={{ backgroundImage: `url(${item.images[0]})` }}
          > </div> 
        ))}

        </div>
        

      <div className='slider-content'>
        </div>


      </div>
      



   
   </>
)}
export default Slider