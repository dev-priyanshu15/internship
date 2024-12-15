import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Order, OrderStatus } from '../../../types/order';

interface OrderTableRowProps {
  order: Order;
  onStatusUpdate: (orderId: string, status: OrderStatus) => void;
}

const OrderTableRow: React.FC<OrderTableRowProps> = ({
  order,
  onStatusUpdate,
}) => {
  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800',
    delivered: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        #{order.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{order.customerName}</div>
        <div className="text-sm text-gray-500">
          {order.shippingAddress.city}
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">
          {order.items.map((item) => (
            <div key={item.id} className="mb-1">
              {item.quantity}x {item.productName}
            </div>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ₹{order.total.toLocaleString('en-IN')}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="relative">
          <select
            value={order.status}
            onChange={(e) =>
              onStatusUpdate(order.id, e.target.value as OrderStatus)
            }
            className={`${
              statusColors[order.status]
            } text-sm rounded-full px-3 py-1 font-semibold`}
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <ChevronDown className="absolute right-2 top-2 h-4 w-4" />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(order.createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
};
export default OrderTableRow;
