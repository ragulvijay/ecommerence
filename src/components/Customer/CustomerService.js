import React from 'react'
import privacy from '../assetes/privacy.png';
import delivery from '../assetes/delivery.png';
import service from '../assetes/service.png';
import '../Customer/Customer.css'

const CustomerService = () => {
  return (
    <div>
      <section id='customer-section'>
        <div className='customer-container'>       
        <div className='delivery-container'>
        <div className='delivery-center'>
            <img className='service-image' src={delivery} alt='delivery'/>
            <div className='delivery-heading'>
                <h3 className='free-delivery'>FREE AND FAST DELIVERY</h3>
                <p>free delivery for all orders over $140</p>
                </div>
            </div>

        
        </div>

        <div className='call-center'>
        <div className='delivery-center'>
            <img className='service-image' src={service} alt='delivery'/>
            <div className='delivery-heading'>
                <h3 className='free-delivery'>24/7 CUSTOMER SERVICE</h3>
                <p>friendly 24/7 customer support</p>
                </div>
            </div>

        </div>

        <div className='privacy-center'>
        <div className='delivery-center'>
            <img className='service-image' src={privacy} alt='delivery'/>
            <div className='delivery-heading'>
                <h3 className='free-delivery'>MONEY BACK GUARANTEE</h3>
                <p>we ruturn money within 30days</p>
                </div>
            </div>

        </div>
        </div>
      </section>
    </div>
  )
}

export default CustomerService;
