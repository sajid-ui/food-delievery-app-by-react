import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCart} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-left">
<p className="title">Delievery Information</p>
            <div className="multi-forms">
        <input type="text" placeholder='First Name' />
        <input type="text"  placeholder='Last Name'/>
      </div>

      <input type="email"  placeholder='Email Adress'/>
      <input type="text"  placeholder='street'/>

      <div className="multi-forms">
        <input type="text" placeholder='City' />
        <input type="text"  placeholder='State'/>
      </div>
      <div className="multi-forms">
        <input type="text" placeholder='Zip Code' />
        <input type="text"  placeholder='Country'/>
      </div>
      <input type="text" placeholder='Phone'/>
</div>
      <div className="place-right">
      <div className="cart-total">
         <h2>Cart Totals</h2>
         <div>
         <div className="cart-total-details">
            <p>Sub total</p>
            <p>${getTotalCart()}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
          <p>Delievery Fee</p>
          <p>${getTotalCart() === 0 ?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCart() ===0?0:getTotalCart() + 2}</b>
          </div>
         
          </div>
          <button >PROCEED TO PAYMENT</button>
         </div>
         
        </div>
        
    </form>
  )
}

export default PlaceOrder