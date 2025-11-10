import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(r => r.json())
      .then(d => setProducts(d))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="product-list">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
          <Link to={`/products/${p.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
