
import React,{useState} from 'react';
import './Admin.css';
import admin from './admin.png';


function Admin() {
  
  const [title,setTitle] = useState("");
  const [price,setPrice] = useState("");
  const [description,setDescription] = useState("");
  const [imgUrl,setImgUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data,setData] = useState("");
  
     

 

  
  
  const handleclick = (event) => {
    debugger

    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('file', imgUrl);

    fetch('https://example.com/api/products', {
      method: 'POST',
      

      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, price, description, imgUrl })
    })
    .then((response) => {
      setData(response)
  })
    .then(response => {
      
      
      if (!response.ok) {
        return response.json();
      } 
      else {
        throw new Error('Failed to create product');
      }
    })
    .then(data => {
      setData(data);
      setSuccessMessage('Product created successfully');
      setErrorMessage('');
    })

    

    .catch(error => {
      console.error(error);
      
    })};

  return (
    <div className="admin">
      <div className='img-container'>
        <img className='admin-img-admin' src={admin} alt="admin" />
        </div>
      <form >
        <div className='admin-user'>
        
        <h1>Create User</h1>
        <div className='admin-title'>
        <label htmlFor='title'>Title :</label>
        <input
        id='title'
          type="text"
          value={title}
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        </div>
        <div className='admin-price'>

        
        <label htmlFor='price'>Price : </label>
        <input
        id='price'
          type="text"
          value={price}
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        </div>
        <div className='admin-description'>
        
        <label htmlFor="description">Description :</label>
          <textarea
            id="description"
            name="description"
            typeof='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          </div>
          <div className='admin-image'>
          
          <label className='image-url'>Image URL:</label>
        <input className='img-url' type="text" name="imgUrl" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} required />
          </div>

        <button onClick={handleclick} className='create-btn' type="submit">Create</button>

        <div className="message">{successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}</div>
        </div>
      </form>
    </div>
  );
}

export default Admin;



// import React,{useState} from 'react';
// import './Admin.css';
// import admin from './admin.png';
// import {  toast } from 'react-toastify';

// const Admin = () => {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [message, setMessage] = useState("");

  // const createFile = async (e,file,name,price,description) => {

  //   e.preventDefault();
    
  //   try {
  //     // Create a new FormData object and append the file to it
      // const formData = new FormData();
      // formData.append('name', name);
      // formData.append('price', price);
      // formData.append('description', description);
      // formData.append('file', file);
  
  //     // Send a POST request to the API endpoint for creating a new file
  //     const response = await fetch('https://api.escuelajs.co/api/v1/products/', {
  //       method: 'POST',
  //       body: formData,
  //     });
  
  //     // Check if the request was successful
  //     if (response.ok) {
  //       const data = await response.json();
  //       toast('File created successfully:', data);
  //       return data;
  //     } else {
  //       throw new Error('Failed to create file');
  //     }
  //   } catch (error) {
  //     console.error('Error creating file:', error);
  //   }
  // };

 
//   return (
    // <div className="admin">
    //   <div className='img-container'>
    //     <img className='admin-img-admin' src={admin} alt="admin" />
    //     </div>
    //   <form onSubmit={createFile}>
    //     <div className='admin-user'>
        
    //     <h1>Create User</h1>
    //     <div className='admin-title'>
    //     <label htmlFor='title'>Title :</label>
    //     <input
    //     id='title'
    //       type="text"
    //       value={name}
    //       placeholder="title"
    //       onChange={(e) => setName(e.target.value)}
    //       required
    //     />
    //     </div>
    //     <div className='admin-price'>

        
    //     <label htmlFor='price'>Price : </label>
    //     <input
    //     id='price'
    //       type="text"
    //       value={price}
    //       placeholder="price"
    //       onChange={(e) => setPrice(e.target.value)}
    //       required
    //     />
    //     </div>
    //     <div className='admin-description'>
        
    //     <label htmlFor="description">Description :</label>
    //       <textarea
    //         id="description"
    //         name="description"
    //         typeof='description'
    //         value={description}
    //         onChange={(e) => setDescription(e.target.value)}
    //         required
    //       ></textarea>
    //       </div>
    //       <div className='admin-image'>
          
    //       <label htmlFor="image">Image :</label> 
    //       <input
    //         type="file"
    //         id="image"
    //         value={image}
    //         name="image"
    //         accept="image/*"
    //         onChange={(e) => setImage(e.target.value)}
    //         required
    //       />
    //       </div>

    //     <button className='create-btn' type="submit">Create</button>

    //     <div className="message">{message ? <p>{message}</p> : null}</div>
    //     </div>
    //   </form>
    // </div>
//   );
// }


// export default Admin
