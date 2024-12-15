import React from 'react';
import { TrendingUp, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TopProducts = () => {
  const products = [
    {
      id: '1',
      name: 'Traditional Silk Saree',
      sales: 125,
      revenue: 749875,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c'
    },
    {
      id: '2',
      name: 'Designer Party Wear',
      sales: 98,
      revenue: 343000,
      image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974'
    },
    {
      id: '3',
      name: 'Boys Formal Suit',
      sales: 87,
      revenue: 304213,
      image: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
        <Link
          to="/admin/products"
          className="text-sm text-purple-600 hover:text-purple-700 flex items-center"
        >
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900">{product.name}</h3>
              <div className="flex items-center mt-1">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-sm text-gray-500">{product.sales} sales</span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">₹{product.revenue.toLocaleString('en-IN')}</p>
              <p className="text-sm text-gray-500">Revenue</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;