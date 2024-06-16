import React from 'react'
import './Offer.css'
import exclusive_image from '../../Assets/exclusive_image.png'
export const Offer = () => {
  return (
    <div className='offers'>
        <div className="offers_left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Sellers Products</p>
            <div className=''>
            <button>Check Now</button>
            </div>
            
        </div>
        <div className='offers_right'>
            <img src={exclusive_image} alt='offer'/>
        </div>

    </div>
  )
}
