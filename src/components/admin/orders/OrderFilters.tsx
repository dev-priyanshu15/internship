import React from 'react';
import { Search } from 'lucide-react';
import { OrderStatus } from '../../../types/order';

interface OrderFiltersProps {
  searchTerm: string;
  onSearch: (value: string) => void;
  statusFilter: OrderStatus | 'all';
  onStatusChange: (status: OrderStatus | 'all') => void;
}

const OrderFilters: React.FC<OrderFiltersProps> = ({
  searchTerm,
  onSearch,
  statusFilter,
  onStatusChange,
}) => {
  return (
    <div className="mb-6 flex space-x-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value as OrderStatus | 'all')}
        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="all">All Status</option>
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
};
export default OrderFilters;
