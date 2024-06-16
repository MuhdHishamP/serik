import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Assets/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";
import { BaseApi } from "../../Context/ShopContext";


export const CartItems = () => {
  const { all_products, carditem, RemoveFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate("/shipping");
  };
  return (
    <div className="cartitems">
      <div className="cartitem_format_main">
        <p></p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (carditem[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems_format cartitem_format_main">
              <img
                src={BaseApi+e.image}
                className="carticon_producticon"
                alt={e.name}
              />
              <p>{e.name}</p>
              <p>{e.new_price}</p>
              <button className="cartitem_quantitiy">{carditem[e.id]}</button>
              <p>₸ {e.new_price * carditem[e.id]}</p>
              <img
                className="cartitems_remove_icon"
                src={remove_icon}
                onClick={() => {
                  RemoveFromCart(e.id);
                }}
                alt="Remove from cart"
              />
            </div>
          );
        }
        return null; // Return null if the condition is not met
      })}
      <div className="cartitem_down">
        <h1>Cart Total</h1>
        <div>
          <div className="cartitems_total_item">
            <p>Subtotal</p>
            <p>₸ {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cartitems_total_item">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>

          <div className="cartitems_total_item">
            <h3>Total</h3>
            <p>₸ {getTotalCartAmount()}</p>
          </div>
        </div>
        <button className="proceed_checkout" onClick={handleProceedToCheckout}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};
