
import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu,setmenu] = useState("home");
  const {getTotalCart} = useContext(StoreContext);
  return (
    <div className='navbar'>
    <Link to ='/cart'><img src={assets.logo} alt=""  className="logo"></img></Link>
    <ul className="navbar-menu">
      <Link to='/' onClick ={()=> setmenu("home")} className={menu ==="home"?"active":""}>home</Link>
      <a href="#explore-menu" onClick ={()=> setmenu("menu")} className={menu ==="menu"?"active":""}>menu</a>
      <a href="#app-download" onClick ={()=> setmenu("mobile App")} className={menu ==="mobile App"?"active":""}>mobile App</a>
      <a href="#footer" onClick ={()=> setmenu("Contact us")} className={menu ==="Contact us"?"active":""}>Contact us</a>
    </ul>
    <div className="navbar-right">
      <img src={assets.search_icon} alt=""></img>
      <div className="navbar-search-icon">
       <Link to='/cart'><img src={assets.basket_icon} alt=""></img></Link> 
        <div className={getTotalCart() === 0 ?"":"dot"}></div>
      </div>
      <button onClick = {() => setShowLogin(true)}>Sign in</button>
    </div>
      </div>
  )
}



export default Navbar