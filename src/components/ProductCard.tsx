import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product);
    toast.success(isWishlisted ? 'Removed from wishlist!' : 'Added to wishlist!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={handleToggleWishlist}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}