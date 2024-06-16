import React, { useContext, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { BaseApi } from "../../Context/ShopContext";


const Product = ({data}) => {
  const {id,name, image, new_price,old_price } = data;
  const { addToCart } = useContext(ShopContext)

  return (
    <div className="productcontainer">
      <Link to={`/product/${id}`}>
      <img src={BaseApi+image} />
      </Link>
     
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> ₸ {new_price}</p>
        <div className="old_price"> ₸ {old_price}</div>
      </div>
      <button className="addToCartBttn" 
      onClick={()=>{addToCart(id)}}
      >
        Add To Cart 
        
      </button>
    </div>
  );
};

export default Product;