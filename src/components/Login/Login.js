import React, { useEffect, useState } from 'react';
import Image from '../assetes/Image.png';
import '../Login/Login.css';
import {useNavigate} from 'react-router-dom';
import Home from '../Home';


const Login = () => {
  const[email,setEmail] = useState("")
  const [password,setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);
  const local=localStorage.getItem("signup");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const [show,setShow]=useState(false)
  
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect =()=>{
    
   
  if(localEmail){
    setIsLoggedIn(true)
  
  }}

  const handleSignIn=(e)=>{
    e.preventDefault()
    if(email === localEmail && password === localPassword){
      localStorage.setItem("email", email)
      
      alert("successfully logged In")
      setIsLoggedIn(true)
      navigate("/")
    }
    else{
      alert("pleae check your email and password")
    }
  }

  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     const response = await fetch('https://fakestoreapi.com/auth/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({  username: "mor_2314",
  //       password: "83r5^_"}),
  //     });
      
  //     const data = await response.json();

  //     if (response.ok) {
  //       console.log('Login successful');
  //       setIsLoggedIn(true);
        
  //     } else {
  //       setError(data.message); 
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setError('An error occurred while processing your request. Please try again later.');
  //   }
  // };

  // if (isLoggedIn) {
  //   return navigate("/");
  // }

  return (
    <div>
     {isLoggedIn? navigate("/"):     
      <div className='card'>
        <div className='card-image'>
          <img className='login-pic' src={Image} alt="Login" />
          
        </div>
        <div className='card-content'>
      <h1 className='heading'>Log In to Exclusive</h1>
      <p className='para'>Enter your credentials below</p>
      <form onSubmit={handleSignIn}>
        <div className='username'>
          <input className='username'
            type="email"
            name="email"
            value={email}
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className='pass-vis'>
          
          <input 
            type="password"
            name="password"
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button  className='submit-btn' type="submit">Login</button>
        <span className='forgot'>Forgot Password?</span>
      </form>
      </div>
      </div>}
    </div>
  );
};

export default Login;
