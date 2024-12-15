import React from 'react';
import { useOrders } from '../../../hooks/useOrders';
import OrderTableHeader from './OrderTableHeader';
import OrderTableRow from './OrderTableRow';
import OrderFilters from './OrderFilters';
import { OrderStatus } from '../../../types/order';
import toast from 'react-hot-toast';

const OrderList = () => {
  const {
    orders,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    updateOrderStatus,
  } = useOrders();

  const handleStatusUpdate = async (orderId: string, status: OrderStatus) => {
    try {
      updateOrderStatus(orderId, status);
      toast.success('Order status updated successfully');
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Orders</h2>

      <OrderFilters
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <OrderTableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <OrderTableRow
                key={order.id}
                order={order}
                onStatusUpdate={handleStatusUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;