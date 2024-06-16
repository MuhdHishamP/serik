import React from 'react'
import './Item.css'
import banner_women from '../../Assets/banner_women.png'
export const Item = () => {
  return (
    <div className='item'>
        <img src={banner_women} alt='item' />
        <p>Tshirt</p>
        <div className="item_price">
            <div className="item_price_new">
               7998
            </div>
        </div>
        <div className="item_price_old">
            7890
        </div>
        
    </div>
  )
}
