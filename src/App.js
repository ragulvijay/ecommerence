import React from 'react';
import './App.css';
import Header from './components/Header/Header';

import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Signup from './components/Signup/Signup';

import { CartProvider } from '../src/components/CartContext';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Result from './components/Product/Result';
import Detail from './components/Product/Detail';
import AddCart from './components/Cart/AddCart';
import UserEdit from './components/User/UserEdit';
import WhishList from './components/WhishList/WhishList';
import Admin from './Admin';
import RequireAuth from './components/RequireAuth';
import AdminRoute from './components/AdminRoute';
import CheckOut from './components/Checkout/CheckOut';
import WishList from './components/Product/WishList';
import { LikesProvider } from '../src/components/LikesContext';


function App() {
  return (
    <CartProvider>
    <LikesProvider>  
    <div className="App">
      <BrowserRouter>
      <Header/>     
        <Routes> 
            
          <Route element={<RequireAuth />}>
          </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/wish' element={<WishList/>}/>
          <Route path='/result' element={<Result/>} />
          <Route path='about/:id' element={<Detail />} />
          <Route path='/cart' element={<AddCart/>} />
          <Route path='/edit' element={<UserEdit/>} />
          <Route path='/whishlist' element={<WhishList/>} />
          <Route path='/checkout' element={<CheckOut/>} />      
          
          </Routes>
          <Footer/>
          </BrowserRouter>
      
    </div>
    </LikesProvider>
    </CartProvider>
  );
}

export default App;
