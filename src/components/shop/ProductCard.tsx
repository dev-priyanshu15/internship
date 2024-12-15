import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => onQuickView(product)}
              className="bg-white text-purple-600 p-2 rounded-full hover:bg-purple-50"
              title="Quick View"
            >
              <Eye className="h-5 w-5" />
            </button>
            <Link
              to={`/product/${product.id}`}
              className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700"
              title="Add to Cart"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
        <p className="text-purple-600 font-medium">₹{product.price.toLocaleString('en-IN')}</p>
      </div>
    </div>
  );
};

export default ProductCard;