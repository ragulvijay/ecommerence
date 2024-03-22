import React from 'react'
import boombox from '../assetes/boombox.png';
import '../MusicCategories/Music.css'

const Music = () => {
    const date = new Date();
    const showTime = date.getHours()
    const showDay=date.getDay()
    const showMinute=date.getMinutes()
    const showSecond=date.getSeconds()
  return (
    <div>
        <section id='category-section'>
            <div className='categoty-music'>
            <div className='music-container'>
                <h5 className='category-text'>Category</h5>
                <h1 className='experience'>Enhance Your<br/> Music Experience</h1>
                <div className='timing-day'>
                    <div className='day'>{showDay}<br/>Days</div>
                    <div className='hour'>{showTime}<br/>Hours</div>
                    <div className='minute'>{showMinute}<br/>minute</div>
                    <div className='second'>{showSecond}<br/>second</div>
                </div>
                <div className='buy'>
                    <button className='buy-now'>Buy Now</button>
                    
                </div>

            </div>
            <div className='boombox'>
                
                <img className='boombox-image' src={boombox} alt="" />
            </div>
            </div>
        </section>
      
    </div>
  )
}

export default Music
