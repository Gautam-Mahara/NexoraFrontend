import React from "react";

export default function ProductCard({ product, onAdd }) {
  // Product shape: { _id, id, title/name, price, image, rating: { rate, count } }
  const name = product.title ?? product.name;
  const price = product.price ?? 0;
  const rating = product.rating?.rate ?? null;

  return (
    <article className="card" aria-label={`${name} — ₹${price}`}>
      <div className="card-media">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          className="card-image"
        />
      </div>

      <div className="card-body">
        <h3 className="card-title" title={name}>{name}</h3>

        <div className="card-meta">
          <div className="price">₹{price.toFixed(0)}</div>
          {rating !== null && (
            <div className="rating" aria-hidden>
              <span className="star">★</span>
              <span>{rating}</span>
            </div>
          )}
        </div>

        <p className="card-foot">
          <button
            className="btn-add"
            onClick={() => onAdd(product._id ?? product.id)}
            aria-label={`Add ${name} to cart`}
          >
            Add to cart
          </button>
        </p>
      </div>
    </article>
  );
}
