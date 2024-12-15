import React from 'react';
import { Package, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentOrders = () => {
  const orders = [
    {
      id: '1',
      customer: 'Priya Sharma',
      items: 3,
      total: 5999,
      status: 'processing'
    },
    {
      id: '2',
      customer: 'Rahul Kumar',
      items: 2,
      total: 3499,
      status: 'pending'
    },
    {
      id: '3',
      customer: 'Anita Patel',
      items: 1,
      total: 2499,
      status: 'shipped'
    }
  ];

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
        <Link
          to="/admin/orders"
          className="text-sm text-purple-600 hover:text-purple-700 flex items-center"
        >
          View All
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Package className="h-8 w-8 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">Order #{order.id}</p>
                <p className="text-sm text-gray-500">{order.customer}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">₹{order.total}</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;