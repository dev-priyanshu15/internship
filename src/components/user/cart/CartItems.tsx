import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../../context/CartContext';

const CartItems = () => {
  const { items, updateQuantity, removeItem } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
          <img
            src={item.image}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            <p className="text-purple-600 font-medium">₹{item.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="w-8 text-center">{item.quantity}</span>
            <button 
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <button 
            onClick={() => removeItem(item.id)}
            className="p-2 hover:bg-red-50 rounded text-red-500"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;