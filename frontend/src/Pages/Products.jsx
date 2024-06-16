import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
// import './Products.css'; // Assuming you have a CSS file for styling

export const Products = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  // Ensure all_products is defined and is an array
  const products = Array.isArray(all_products) ? all_products : [];

  // Find the product based on the productId from the URL
  const product = products.find(e => e.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-page">
      <ProductDisplay product={product} />
    </div>
  );
};

export default Products;
