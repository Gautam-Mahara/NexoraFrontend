import React from "react";

export default function ProductGrid({ products, onAdd }) {
  console.log(products);
  
  return (
    <div className="product-section">
      <h2 className="section-title">🛒 Products</h2>
      <div className="grid">
        {products && products.length > 0 ? (
          products.map((p) => (
            <div key={p._id} className="card">
              <div className="card-media">
                <img
                  src={p.image}
                  alt={p.name}
                  className="card-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x200?text=No+Image";
                  }}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <div className="card-meta">
                  <span className="price">₹{p.price}</span>
                </div>
                <div className="card-foot">
                  <button
                    className="btn-add"
                    onClick={() => onAdd(p._id)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">No products found 🛍️</div>
        )}
      </div>
    </div>
  );
}
