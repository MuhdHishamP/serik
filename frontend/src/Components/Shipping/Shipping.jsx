import React, { useContext } from "react";
import "./Shipping.css";
import { ShopContext } from "../../Context/ShopContext";
import logo from "../../Assets/logo.png";

export const Shipping = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  /* global Razorpay */
  const handleRazorPay = () => {
    const options = {
      key: "rzp_test_tpPg5W0HbmQJe2",
      amount: getTotalCartAmount() * 100,
      currency: "KZT",
      name: "SERIK",
      image: logo,
      handler: function (response) {
        alert(
          "Payment Successful with Payment ID " + response.razorpay_payment_id
        );
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div className="shipping_container">
      <div className="page_container">
      <div className="inputfields" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <h1>SHIPPING & PAYMENT</h1>
          <input type="text" placeholder="Enter your Email" />
          <input type="text" placeholder="Enter your Phone Number" />
          <input type="text" placeholder="Enter your Address" />
          <input type="text" placeholder="Enter your City" />
          <input type="text" placeholder="Enter your Pincode" />
          <input type="text" placeholder="Enter your Country" />
          <button className="paymentbutton" onClick={handleRazorPay}>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};
