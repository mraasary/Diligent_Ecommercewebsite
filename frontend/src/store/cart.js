import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }){
  const [items, setItems] = useState([]);

  function add(product, qty){
    setItems(prev => {
      const idx = prev.findIndex(i => i.id === product.id);
      if (idx === -1) return [...prev, { ...product, qty }];
      const copy = [...prev];
      copy[idx].qty += qty;
      return copy;
    });
  }

  function remove(id){
    setItems(prev => prev.filter(x => x.id !== id));
  }

  function clear(){ setItems([]); }

  return (
    <CartContext.Provider value={{ items, add, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  return useContext(CartContext);
}
