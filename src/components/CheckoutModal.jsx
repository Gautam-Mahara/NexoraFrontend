import React, { useState } from "react";
import "../styles.css";

export default function CheckoutModal({ cart, onClose, onConfirm }) {
  const [address, setAddress] = useState("");
  const [step, setStep] = useState("summary"); // summary → success

  const handleConfirm = () => {
    if (!address.trim()) return alert("Please enter your address!");
    setStep("success");
    onConfirm(); // triggers checkout logic from App
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-modal">
        {step === "summary" ? (
          <>
            <h2 className="checkout-title">🧾 Order Summary</h2>
            <div className="checkout-items">
              {cart.items.map((item) => (
                <div key={item._id} className="checkout-item">
                  <div className="left">
                    <span className="name">{item.product.name}</span>
                    <span className="qty">x{item.qty}</span>
                  </div>
                  <div className="price">₹{item.product.price * item.qty}</div>
                </div>
              ))}
            </div>

            <div className="checkout-total">
              <span>Total</span>
              <span>₹{cart.total}</span>
            </div>

            <div className="address-section">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your full delivery address"
              />
            </div>

            <div className="checkout-actions">
              <button className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
              <button className="confirm-btn" onClick={handleConfirm}>
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <div className="success-screen">
            <h2>🎉 Order Placed Successfully!</h2>
            <p>Thank you for shopping with us ❤️</p>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
