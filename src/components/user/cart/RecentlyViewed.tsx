import React from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const RecentlyViewed = () => {
  const recentProducts: Product[] = [
    {
      id: '1',
      name: 'Designer Silk Saree',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c'
    },
    {
      id: '2',
      name: 'Girls Party Wear',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1621786030484-4c855eed6974'
    }
  ];

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
      <div className="grid grid-cols-2 gap-4">
        {recentProducts.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group block"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-2 text-sm font-medium text-gray-900">{product.name}</h3>
            <p className="text-sm text-purple-600">₹{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;