import React from 'react'
import './UserEdit.css'
import { useNavigate } from 'react-router-dom'

const UserEdit = () => {
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
        <div className='user-info'>
            
            <div className='name-edit'>
            <div className='first-name'>
            <h6 className='first-text'>First Name</h6>
            <input className='edit-contact' type='text' placeholder='Md' />
            </div>
            <div className='last-name'>
            <h6 className='last-text'>Last Name</h6>
            <input className='edit-contact' type='text' placeholder='Ali' />
            </div>
            </div>
            <div className='email-edit'>
                <div className='edit-email'>
                <h6 className='email-text'>Email</h6>
                <input className='edit-contact'  type='email' placeholder='ragul@gmail.com' />
                </div>  
                <div className='address'>
                <h6 className='address-text'>Address</h6>
                <input className='edit-contact' type='address' placeholder='address' />
                </div>  

                         
                         </div>
                         <div className='password-change'>
                            <h5 className='password-text'>Change Password</h5>
                            <input className='password-change' type='text' placeholder='current password'/><br/>
                            <input className='password-change' type='text' placeholder='new password'/><br/>
                            <input className='password-change' type='text' placeholder='confirm new password password'/>
                         </div>
                         <div className='cancel-btn'>
                            <button className='cancel-profile' onClick={()=>navigate("/")}>Cancel</button>
                            <button className='save-profile'>Save Changes</button>
                        
                         </div>
        </div>
      </div>
    </div>
  )
}

export default UserEdit
