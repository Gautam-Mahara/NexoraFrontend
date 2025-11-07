import React from "react";
import ProductCard from "./components/ProductCard";

export default function ProductGrid({ products = [], onAdd }) {
  if (!products.length) {
    return (
      <div className="grid grid-empty">
        <div className="empty">No products yet — try refreshing.</div>
      </div>
    );
  }

  return (
    <div className="grid">
      {products.map((p) => (
        <ProductCard key={p._id ?? p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
