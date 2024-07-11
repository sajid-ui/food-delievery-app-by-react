import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
<img src={assets.logo} alt=""></img>
<p>The website for Laird Superfood is clean and simple. The design uses a lot of white space, which makes the site easy to navigate. The menu is easy to find and the products are clearly laid out. The overall design is modern and stylish.</p>
<div className="footer-social-icons">
    <img src={assets.facebook_icon} alt=""></img>
    <img src={assets.twitter_icon} alt=""></img>
    <img src={assets.linkedin_icon} alt=""></img>


</div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
               <li>Home</li>
               <li>About us</li>
               <li>Delievery</li>
               <li>privacy policy</li>
               </ul>
               

            </div>
            <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>6305690167</li>
    <li>mohammadsajidpasha117@gmail.com</li>
</ul>
            </div>
           
        </div>


<hr />
<p className="footer-copyright">Copyright 2024 Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer