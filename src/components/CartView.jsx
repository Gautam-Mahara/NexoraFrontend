import React from "react";

export default function CartView({ cart, onRemove, onCheckout }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <span role="img" aria-label="basket">🧺</span> Your Cart
      </h2>

      {cart.items.length === 0 ? (
        <p className="text-gray-500 text-sm">No items added yet.</p>
      ) : (
        <>
          {cart.items.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center mb-3 border-b pb-2"
            >
              <div>
                <span className="font-medium text-gray-700">
                  {item.product.name} <span className="text-gray-500">(x{item.qty})</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">₹{item.product.price * item.qty}</span>
                <button
                  onClick={() => onRemove(item._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4 text-right">
            <p className="text-lg font-semibold">Total: ₹{cart.total}</p>
            <button
              className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={onCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
