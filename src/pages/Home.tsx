import React from 'react';
import ProductCard from '../components/ProductCard';

const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    description: "Advanced smartwatch with health monitoring features",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    category: "Electronics"
  },
  {
    id: 3,
    name: "Leather Laptop Bag",
    price: 79.99,
    description: "Stylish and durable leather laptop bag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800",
    category: "Accessories"
  }
];

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}