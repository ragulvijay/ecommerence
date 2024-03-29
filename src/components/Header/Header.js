import React,{useState} from 'react'
import Cart from '../assetes/Cart.png'
import user from '../assetes/user.png' ;
import Wishlist from '../assetes/Wishlist.png' ;
import Vector from '../assetes/Vector.png' ;
import {useNavigate} from 'react-router-dom';
import './Header.css'
import Slider from '../Slider/Slider';
import { useCart } from '../CartContext';



const  Header = ()=> {
  const { cartItems } = useCart();
    const navigate=useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    
    const handleClick = () => {
        setIsOpen(!isOpen);
      };
       
    
      const openCartPage = () => {
        const cartPageURL = "/cart";
         navigate(cartPageURL)
        

      };
     

    
   
    const handleuser=()=>{
      
      setIsOpen(false
        )
      navigate( "/edit")
    }
    
const UserDetails = () => {
    return (
      <div className='user-detail'>
        <h2>User Details</h2>
        <p>Name: vijay</p>
        <p>Email: vijay@example.com</p>
        <button onClick={handleuser}>Edit profile &rarr;</button>
      </div>
    );
  };

  return (
    <div>
        <div id='header'>
            <header>
            <div className='container'>
                <div className='header__logo'>
                    <h1>Exclusive</h1>
                </div>
                <nav className='header__nav'>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='#'>Contact</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='/signup' >Signup</a></li>
                    </ul>
                </nav>
                <div className='header__basket'>
                    <input type='text' className='search' placeholder='what are you looking for?' />
                    <span><img className='vector-img' src={Vector} alt='cart'/></span>
                    <img className='wishlist' src={Wishlist} alt='wishlist' onClick={()=>navigate("/whishlist")} />
                    
                   <img className='cart' onClick={openCartPage}  src={Cart} alt='cart' /><span>{cartItems.length}</span>
                    <img className='user' onClick={handleClick} src={user} alt='user' />
                    {isOpen && <UserDetails />}
                    


                    

                </div>

            </div>
            </header>

        </div>
        <hr/>

        
    </div>
  )
}

export default Header;