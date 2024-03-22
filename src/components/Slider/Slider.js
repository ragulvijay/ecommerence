import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './Slider.css'




const Slider = () => {
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
        const goToPrevious = () => {
            const isFirstSlide = currentIndex === 0;
            const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
          };
          const goToNext = () => {
            const isLastSlide = currentIndex === data.length - 1;
            const newIndex = isLastSlide ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
          };


return (
   <>
   <div className="slider">
    <div className='img-container'>
    <div className='leftArrowStyles' onClick={goToPrevious} >
          ❰
        </div>
        <div className='rightArrowStyles' onClick={goToNext} >
          ❱
        </div>

    </div>
    <div className="slider-container">
        {data.map((item, index) => (
          <div className={`slider-item ${index === currentIndex ? 'active' : ''}`} key={index} style={{ backgroundImage: `url(${item.images[0]})` }}
          >
                  </div>


        ))}

        </div>
        

      <div className='slider-content'>
        </div>


      </div>
      



   
   </>
)}
export default Slider