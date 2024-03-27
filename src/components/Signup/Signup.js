import React, { useEffect, useState } from 'react';
import google from '../assetes/google.png';
import axios from 'axios';
import Login from '../Login/Login';
import Image from '../assetes/Image.png'
import Home from '../Home';
import './Signup.css';

import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [show,setShow] = useState("")
  const [showHome,setShowHome] = useState(false)
  const local=localStorage.getItem("signup");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const navigate=useNavigate() 
  
  

  useEffect(() => {
    if(local){
      setShowHome(true) 

    }

    } )
  const handleSubmit =(e)=>{
     e.preventDefault()
     if (name&&email&&password)
     {
      localStorage.setItem("name",name )
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("signup", email)
      alert("Signup Successfully")
      navigate("/")

    
    
  }}


  
  

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post('https://fakestoreapi.com/users', {
  //       email,
  //       password,
  //       name,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //     setError(error.response.data.message);
  //   }
  // };

  return (<>
  {showHome ? <Home/> :

     
  
    <div className='conatainer-signup'>
      <div className='signup-img'>
        <img className='sign-pic' src={Image} alt="" />
      </div>
    <div>
      
      <h1 className='create-account'>Create an Account</h1>
      <p className='detail-below'>Enter your detail below</p>
      
     
      <form onSubmit={handleSubmit}>
        <div className='user-name'>
        
        <input
        className='name-text'
          type='text'
          id='name'
          value={name}
          placeholder='usernames'
          onChange={(e) => setName(e.target.value)}
          required
        /></div>
        <div className='email-text'>
        <input
        className='user-email-text'
          type='email'
          id='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div className=''>
        <input
        placeholder='Password'
        name='password'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /></div>
        <button className='sign-btn' type='submit'>Sign Up</button>
        <div>
          <img className='google-btn' 
          type ="submit"
          value="submit"
          name="submit"
          src={google} alt="" />
        </div>
        <div className='account-login'>
          <p className='login-btn'>Already have an account? <a href='/login'>Login</a></p>
        </div>
      </form>
    </div></div>}
        
        
        

  
  
  
  
  
     
   
   
    </>
  )}

export default Signup;


  
//   const [formData, setFormData] = useState({
//     email: '',
//     username: '',
//     password: '',
//     name: {
//       firstname: '',
//       lastname: ''
//     },
//     address: {
//       city: '',
//       street: '',
//       number: '',
//       zipcode: '',
//       geolocation: {
//         lat: '',
//         long: ''
//       }
//     },
//     phone: ''
//   });
//   const [apiResponse, setApiResponse] = useState(null);
//   const [error, setError] = useState('');


//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     if (name.includes('.')) {
//       const [parentName, childName] = name.split('.');
//       setFormData({
//         ...formData,
//         [parentName]: {
//           ...formData[parentName],
//           [childName]: value
//         }
//       });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };


//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('https://fakestoreapi.com/users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
        
//       });
//       console.log(response);
//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//         setApiResponse(responseData);
//         setFormData({
//           email: '',
//           username: '',
//           password: '',
//           name: { firstname: '', lastname: '' },
//           address: {
//             city: '',
//             street: '',
//             number: '',
//             zipcode: '',
//             geolocation: { lat: '', long: '' }
//           },
//           phone: ''
//         });
//         console.log( formData)
//         setError('');
//         console.log('User Created')
//         console.log(responseData);
//       } else {
//         const errorMessage = await response.text();
//         setError(errorMessage);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div>
//       <h2>Create User</h2>
//       {error && <p>{error}</p>}
//       {apiResponse && (
//         <div>
//           <p>User created successfully!</p>
//         </div>
//       )}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Username:</label>
//           <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>First Name:</label>
//           <input type="text" name="name.firstname" value={formData.name.firstname} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Last Name:</label>
//           <input type="text" name="name.lastname" value={formData.name.lastname} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>City:</label>
//           <input type="text" name="address.city" value={formData.address.city} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Street:</label>
//           <input type="text" name="address.street" value={formData.address.street} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Number:</label>
//           <input type="text" name="address.number" value={formData.address.number} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Zipcode:</label>
//           <input type="text" name="address.zipcode" value={formData.address.zipcode} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Latitude:</label>
//           <input type="text" name="address.geolocation.lat" value={formData.address.geolocation.lat} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Longitude:</label>
//           <input type="text" name="address.geolocation.long" value={formData.address.geolocation.long} onChange={handleInputChange} required />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} required />
//         </div>
//         <button type="submit">Create User</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;
