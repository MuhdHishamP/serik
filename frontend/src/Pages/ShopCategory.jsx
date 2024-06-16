import React, { useContext } from 'react';
import './ShopCategory.css';
import dropdown_icon from '../Assets/dropdown_icon.png';
import { ShopContext } from '../Context/ShopContext';
import Product from '../Components/Product/Product';

export const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  const filteredProducts = all_products.filter((product) => product.category === props.category);

  return (
    <div className='shop_category'>
      <img  className="shop_caterogy_banner" src={props.banner} alt='banner'/>
     {/* <div className="shopcategory_sortbanner">
     <div className="shopcategory_indexsort">
        <p>
          <span>Shwing 102</span> out of 36 products
        </p>
      </div>
      <div className="shopcateogry_sort">
        Sort by <img src={dropdown_icon} alt='nothing' />
      </div>
     </div> */}

  
      <div className="products">
        {filteredProducts.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};