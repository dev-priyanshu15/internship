import React from 'react';
import { Package, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useOrders } from '../../../hooks/useOrders';

const OrderHistory = () => {
  const { user } = useAuth();
  const { orders } = useOrders();

  // Filter orders for the current user
  const userOrders = orders.filter(order => order.userId === user?.id);

  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      processing: 'bg-blue-100 text-blue-800',
      shipped: 'bg-purple-100 text-purple-800',
      delivered: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  if (userOrders.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6 mt-6 text-center">
        <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">No Orders Yet</h2>
        <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
        <Link
          to="/shop"
          className="inline-flex items-center text-purple-600 hover:text-purple-700"
        >
          Start Shopping
          <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Order History</h2>

      <div className="space-y-4">
        {userOrders.map((order) => (
          <div key={order.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <Package className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-medium text-gray-900">Order #{order.id}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </span>
            </div>

            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.productName}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-purple-600">₹{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="text-lg font-medium text-gray-900">₹{order.total}</p>
              </div>
              <Link
                to={`/order/${order.id}`}
                className="flex items-center text-purple-600 hover:text-purple-700"
              >
                View Details
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;