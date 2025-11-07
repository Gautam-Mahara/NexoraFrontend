import React, { useEffect, useState } from "react";
import {
  getProducts,
  getCart,
  addToCart,
  removeFromCart,
  checkout,
} from "./api";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import "./styles.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [receipt, setReceipt] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🔹 Load products and cart data
  const loadData = async () => {
    try {
      setLoading(true);
      const prods = await getProducts();
      setProducts(prods || []);
      const c = await getCart();
      setCart(c || { items: [], total: 0 });
    } catch (err) {
      console.error("Error loading data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // 🔹 Add product to cart
  const handleAdd = async (id) => {
    try {
      await addToCart(id, 1);
      const c = await getCart();
      setCart(c);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  // 🔹 Remove product from cart
  const handleRemove = async (id) => {
    try {
      await removeFromCart(id);
      const c = await getCart();
      setCart(c);
    } catch (err) {
      console.error("Error removing from cart:", err);
    }
  };

  // 🔹 Checkout
  const handleCheckout = async () => {
    try {
      const res = await checkout();
      if (res?.receipt) {
        setReceipt(res.receipt);
      }
      setShowCheckout(true);
      setShowCart(false);
      setCart({ items: [], total: 0 });
    } catch (err) {
      console.error("Checkout error:", err);
    }
  };

  return (
    <>
      {/* 🔹 Navbar */}
      <Navbar onCartClick={() => setShowCart(true)} />

      {/* 🔹 Products Section */}
      <div className="container">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading products...</p>
        ) : (
          <ProductGrid products={products} onAdd={handleAdd} />
        )}
      </div>

      {/* 🔹 Cart Drawer */}
      {showCart && (
        <CartDrawer
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemove={handleRemove}
          onCheckout={() => {
            setShowCheckout(true);
            setShowCart(false);
          }}
        />
      )}

      {/* 🔹 Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          cart={receipt || cart}
          onClose={() => {
            setShowCheckout(false);
            setReceipt(null);
          }}
          onConfirm={handleCheckout}
        />
      )}
    </>
  );
}

export default App;
