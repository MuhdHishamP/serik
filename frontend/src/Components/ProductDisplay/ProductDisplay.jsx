import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../../Assets/star_icon.png'
import star_dull_icon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { BaseApi } from '../../Context/ShopContext'



export const ProductDisplay = (props) => {
    const {product}=props;
    const { addToCart } = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay_left">
            <div className="productdisplay_img_list">
                <img src={BaseApi+product.image} alt=''/>
                <img src={BaseApi+product.image} alt=''/>
                <img src={BaseApi+product.image} alt=''/>
                <img src={BaseApi+product.image} alt=''/>
            </div>
            <div className="productdisplay_img">
            <img className='productdisplay_main_img' src={BaseApi+product.image} alt=''/>
            </div>

        </div>
        <div className="productdisplay_right">
            <h1>{product.name}</h1>
            <div className="productdisplay_start">
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_icon} alt=''/>
            <img src={star_dull_icon} alt=''/>
            <p>(122)</p>
            </div>

            <div className='productdisplay_right_prices'>
                <div className="product_display_old_price">
                ₸ {product.old_price}
                </div>
                <div className="product_display_new_price">
                ₸ {product.new_price}
                </div>
            </div>
            <div className="product_description">
            lightweight t-shirt, Made from soft, breathable fabric, this tee features a classic round neck design that’s ideal for any casual occasion.
            </div>
            <div className="productdisplay_right_size">
                <h1>Select Size</h1>
                <div className='productdisplay_size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>

                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        


        </div>

    </div>
  )
}
