import React, { useState } from 'react'
import './UserEdit.css'
import { Await, useNavigate } from 'react-router-dom'

const UserEdit = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address,setAddress] = useState("");
  const [password, setPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate inputs
    if (password !== newPassword) {
      alert("New password and confirm new password do not match.");
      return;
    }
    saveProfile({
      firstName,
      lastName,
      email,
      password,
      newPassword,
    });
  
  const saveProfile = async (profileData) => {
    try {
      let user = await fetch('https://api.escuelajs.co/api/v1/products', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
          },
          body:JSON.stringify(profileData)
          })


        .then(res => res.json())
        .then(
          data => { console.log(data)}


        )
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ status: 200, message: 'Profile updated successfully' });
        }, 1000); 
      });
  

      if (response.status === 200) {
        console.log(response.message);
      } else {
        console.error(response.message); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }};
  
    const navigate=useNavigate()
    
  return (

    <div className='user-edit-text'>
        {/* <div className='order-edit'>
            <div  className='manage-edit'>
                <h5 className='account-edit'>Manage my account</h5>
                <div>
                    <li><a href='#'>my profile</a></li>
                    <li><a href='#'>Address Block</a> </li>
                    <li><a href='#'>my payment option</a></li>
                
                    </div>
            </div>
            <div  className='my-order'>
                <h5 className='account-text'>My Order</h5>
                <div>
                    <li><a href='#'>my returns</a></li>
                    <li><a href='#'>My cancellation</a> </li>
                    
                    </div>
            </div>
            <h5 className='account-text'>My WhishList</h5>
        </div> */}
      <div className='edit-profile'><h4 className='user-edit'>Edit your profile</h4>
      <form onSubmit={handleSubmit}>
        <div className='name'>

        <div className='first-name'>
      <h5 className='text-format'>
        First Name:</h5>
        <input className='name-order'
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        </div>
      <div className='last-name'>
      <h5 className='text-format'>
        Last Name:</h5>
        <input  className='name-order'
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        </div>
        </div>
      <br/>
      <div className='email-addres'>
          <div className='email-text'>
      <h5 className='text-format'>
        Email:</h5>
        <input className='email-order'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className='address-text'>
          <h5 className='text-format'>
        Address:</h5>
        <input className='email-order'
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        </div>
        </div>
        <br/>
     <div className='password-text'>
      <h5 className='user-format'>
        Password:</h5>
        <input className='password-order'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br/>
      <div className='new-password'>
        <h5 className='user-format'>
        New Password:</h5>
        <input className='password-order'
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <br/>
      <div className='confirm-password'>
        <h5 className='user-format'>
        Confirm New Password:</h5>
        <input className='password-order'
          type="password"
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />
      </div>
      <br/>
      <button className='cancel-btn'  type='cancel'>Cancel</button>
      <button  className='save-changes' onClick={()=>navigate("/")}  type="submit">Save Changes</button>
    </form>

      </div>
    </div>
  )
}

export default UserEdit
