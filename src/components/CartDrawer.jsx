import React from "react";

export default function CartDrawer({ cart, onClose, onCheckout, onRemove }) {
  return (
    <div className="cart-overlay" onClick={onClose}>
      <div
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="drawer-header">
          <h2>Your Cart 🧺</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        {cart.items.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="drawer-items">
              {cart.items.map((item) => (
                <div key={item._id} className="drawer-item">
                  <span>
                    {item.product.name} (x{item.qty})
                  </span>
                  <span>₹{item.product.price * item.qty}</span>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="drawer-total">
              <strong>Total:</strong> ₹{cart.total}
            </div>
            <button className="checkout-btn" onClick={onCheckout}>
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
