import React from 'react'

import QR from '../assetes/QR.jpeg';
import GooglePlay from '../assetes/GooglePlay.png';
import AppStore from '../assetes/AppStore.png';
import Facebook from '../assetes/Facebook.png';
import Twitter from '../assetes/Twitter.png';
import Instagram from '../assetes/Instagram.png';
import Linkedin from '../assetes/Linkedin.png';
import './Footer.css'


function Footer() {
  return (
    <>
    <footer>
        <div className='footer-content'>
           <div className='subscribe'>
            <div className='title'>
                <h3  className='exclusive'>Exclusive</h3>
                <li> <a href='#'>subscribe</a></li>
                <li><a href='#'>Get 10% off your first purchase</a></li>
                </div>
                <div className='form'>
                    <input className='input'  type="text" placeholder='Enter your email'/>
                    
                </div>

           </div>
           <div className='support'>
            <div className='title'>
                <h3>Support</h3>
                <li><a href='#'>111,Bijoy sarani,Dhaka<br/> DH1515 ,Bangadesh</a></li>
                <li><a href='#'>exclusive@gmail.com</a></li>
                <li><a href='#'>My Account</a></li>
                <li><a href='#'>88080-88888-85989</a></li>
            </div>

           </div>
           <div className='account'>
            <div className='title'>
                <h3 className='account-name'>Account</h3>
                <li><a href=''>My Account</a></li>
                <li><a href=''>Register / Login</a></li>
                <li><a href=''>My Wishlist</a></li>
                <li><a href=''>My Cart</a></li>
                <li><a href=''>Shop</a></li>
            </div>

            

            </div>
            <div className='Quick-link'>
                <div className='title'>
                <h3 className='privacy'>Privacy Policy</h3>
                <li><a href='#'>Terms Of Use</a></li><br/>
                <li><a className='faq' href='#'>FAQ</a></li><br/>
                <li><a className='contact' href='#'>Contact</a></li>
                <li><a href='#'>Terms & Conditions</a></li>
                </div>


           
                

            </div>
            <div className='download-app'>
                <h3>Download App</h3>
                <li><a href=''>save $3 with App New User Only</a></li>
                <div className='app-store'>
                    <img className='qr-code' src={QR} alt=''/>
                    <div className='plat-store'>
                    <a className='playstore' href=''><img className='googleplay' src={GooglePlay} alt=''/></a>
                        <br/>
                        <a href="market://details?id=com.example.your.package" ><img className='appstore' src={AppStore} alt=''/></a>
                    </div>   
                </div>
                <div className='social'>
                <a href=''><img src={Facebook} alt=''/></a>
                <a href=''><img src={Twitter} alt=''/></a>
                <a href=''><img src={Instagram} alt=''/></a>
                <a href=''><img src={Linkedin} alt=''/></a>


                </div>
            </div>
                
        </div>
        <section id='footer-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <p className='copyright'>
                        &copy; {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    
    </section>
    </footer>





    
    
    </>
  )
}

export default Footer