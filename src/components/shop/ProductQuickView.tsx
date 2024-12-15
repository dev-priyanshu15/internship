import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';
import toast from 'react-hot-toast';

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
}

const ProductQuickView: React.FC<ProductQuickViewProps> = ({ product, onClose }) => {
  const handleAddToCart = () => {
    // Implement add to cart logic
    toast.success('Added to cart successfully!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4">
        <div className="flex justify-end p-2">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-3xl font-bold text-purple-600 mb-6">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Availability
                </label>
                <p className="text-green-600">In Stock ({product.stock} items)</p>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 flex items-center justify-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;