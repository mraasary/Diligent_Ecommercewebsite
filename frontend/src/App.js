import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import { CartProvider } from './store/cart';

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="header">
          <Link to="/"><h1>Shop Demo</h1></Link>
          <Link to="/cart" className="cart-link">Cart</Link>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<div>Cart page (client-side only)</div>} />
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}
