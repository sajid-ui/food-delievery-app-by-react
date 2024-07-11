import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {

const {cartItems,food_list,removeFromCart,getTotalCart} = useContext(StoreContext);

const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index) => {
          if(cartItems[item._id] > 0)
            {
              return (
                <div>
                <div className='cart-items-title cart-title-items'>
                  <img src={item.image} alt=""></img>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cross' onClick={() => removeFromCart(item._id)}>x</p>
                </div>
              <hr />
                </div>
              )
            }
        }
        )}
      </div>
      <div className="cart-bottom">
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
          <p>Total</p>
          <p>${getTotalCart() ===0?0:getTotalCart() + 2}</p>
          </div>
         </div>
         <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promo-code">
          <div>
            <p>If you have promo code enter it here</p>
            <div className="promo-input">
<input type="text" placeholder="enter code here"></input>
<button>submit</button>
            </div>
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Cart