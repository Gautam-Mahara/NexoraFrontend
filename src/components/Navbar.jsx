import React from "react";
import { ShoppingCart, User } from "lucide-react";

export default function Navbar({ onCartClick, onSearchChange, searchQuery }) {
  return (
    <header className="navbar">
      <div className="nav-left">
        <h1 className="logo">
          <span className="brand-blue">Vibe</span>
          <span className="brand-black">Commerce</span>
        </h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search for Products, Brands, and More"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <div className="nav-right">
        <div className="user">
          <User size={20} className="icon" />
          <span>Gautam</span>
        </div>
        <div className="cart-icon" onClick={onCartClick}>
          <ShoppingCart size={20} className="icon" />
          <span className="cart-text">Cart</span>
        </div>
      </div>
    </header>
  );
}
