import React from 'react'
import AddtoCart from './Product/AddtoCart';
import ImageSlider from './Categories/ImageSlider';
import Slider from './Slider/Slider';
import Products from './Product/Products';
import CustomerService from './Customer/CustomerService';
import Music from './MusicCategories/Music';
import NewArrival from './NewArrival/NewArrival';


function Home() {
  return (
    <div>
        <section id='Slider-section'>
            <Slider/>
        
        </section>
        <section id='Product-section-item'>
            <Products/>
        </section>
        <section id='Category-section'>
            <ImageSlider/>
        </section>
        <section id='Music-section'>
            <Music/>
        </section>
        <section id='New-arrival-section'>
            <NewArrival/>
        </section>
        <section id='Customer-section'>
            <CustomerService/>
        </section>

    </div>
  )
}

export default Home