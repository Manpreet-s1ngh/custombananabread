import React, { useState } from "react";
import { useSelectedOptions } from "./SelectedOptionsContext";
import "../css/SummaryDisplay.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const TAX_RATE = 0.08; // Example tax rate of 8%

const SummaryDisplay = () => {
  const navigate = useNavigate();
  const { selectedOptions } = useSelectedOptions();

  console.log("In printing Section");
  console.log(selectedOptions);

  // Calculate final product price based on selected options
  const calculateFinalProductPrice = () => {
    // Sum prices for radio options
    const radioPrices = Object.values(selectedOptions.radio).reduce(
      (acc, { price }) => acc + price,
      0
    );

    // Sum prices for checkbox options
    const checkboxPrices = selectedOptions.checkboxes.reduce(
      (acc, { price }) => acc + price,
      0
    );

    return radioPrices + checkboxPrices;
  };

  const initialPrice = calculateFinalProductPrice();
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);

  // Handle quantity change
  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change)); // Prevent zero or negative quantities
  };

  // Handle discount code validation
  const applyDiscount = () => {
    const discountMap = {
      Manpreet: 10,
      Kristin: 15,
      Group11: 20,
    };

    const discount = discountMap[discountCode] || 0;

    if (discount === 0) {
      toast.error("Invalid discount code");
    } else {
      setDiscountPercentage(discount);
      toast.success(`Discount applied: ${discount}%`);
    }
  };

  // Calculate total price with tax and discount
  const calculateTotal = () => {
    const subtotal = initialPrice * quantity;
    const discountAmount = (subtotal * discountPercentage) / 100;
    const discountedSubtotal = subtotal - discountAmount;
    const tax = discountedSubtotal * TAX_RATE;
    const total = discountedSubtotal + tax;
    return {
      subtotal,
      discountAmount,
      tax,
      total,
    };
  };

  const { subtotal, discountAmount, tax, total } = calculateTotal();

  const handlePayment = () => {
    navigate("/paymentpage", { state: { totalAmount: total } });
  };

  return (
    <div>
      <Navbar />
      <div className="summary-page">
        <div className="summary-display">
          <h2>Review Your Order</h2>
          <h3>Here is the price breakdown of your order:</h3>
          <div>
            <h4>Categories and Options:</h4>
            <ul className="list">
              {Object.entries(selectedOptions.radio).map(
                ([category, { option, price }]) => (
                  <li key={category} className="row">
                    <div className="item">
                      <strong>{category}</strong>: {option}
                    </div>
                    <div className="price">$ {price.toFixed(2)}</div>
                  </li>
                )
              )}
              {selectedOptions.checkboxes.map(
                ({ category, option, price }, index) => (
                  <li key={index} className="row">
                    <div className="item">
                      <strong>{category}</strong>: {option}
                    </div>
                    <div className="price">$ {price.toFixed(2)}</div>
                  </li>
                )
              )}
            </ul>
          </div>
          <br />
          <div className="product-details">
            <h4>Product Price:</h4>
            <div className="product-price">${initialPrice.toFixed(2)}</div>
            <div className="quantity-controls">
              <h3> Quantity</h3>
              <div className="qn">
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="quantity-button"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="discount-section">
            <h4>Apply Discount Code:</h4>
            <input
              type="text"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
              placeholder="Enter discount code"
            />
            <button className="apply-discount-button" onClick={applyDiscount}>
              Apply
            </button>
          </div>

          <div className="summary-total">
            <div className="row2">
              Subtotal:
              <div className="price"> ${subtotal.toFixed(2)} </div>
            </div>
            {discountAmount > 0 && (
              <div className="row2">
                Discount ({discountPercentage}%):
                <div className="price"> -${discountAmount.toFixed(2)}</div>
              </div>
            )}
            <div className="row2">
              Tax (8%): <div className="price"> ${tax.toFixed(2)}</div>
            </div>

            <br />
            <div className="row2 total-amount">
              Total: <div className="price"> ${total.toFixed(2)}</div>
            </div>
          </div>

          <button className="paybtn" onClick={handlePayment}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryDisplay;
