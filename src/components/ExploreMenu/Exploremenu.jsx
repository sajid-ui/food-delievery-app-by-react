import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const Exploremenu = ({category,setCategory}) => {
  return (
<div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring array of dishes. Our mission is to satisfy your cravings and elevate your dining experience.One delicious meal at a time.</p>
        <div className="explore-list">
          {menu_list.map((item,index) => {
            return (
              <div onClick={() => setCategory(prev => prev === item.value?"All":item.menu_name)} key={index} className='explore-list-item'>
                <img className={category === item.menu_name?"active":""} src={item.menu_image} alt=""></img>
                <p>{item.menu_name}</p>
              </div>
            )
          })}
      
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu