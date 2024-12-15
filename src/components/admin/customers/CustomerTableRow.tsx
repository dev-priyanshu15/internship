import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { Customer } from '../../../types/customer';

interface CustomerTableRowProps {
  customer: Customer;
  onStatusUpdate: (customerId: string, status: 'active' | 'inactive') => void;
}

const CustomerTableRow: React.FC<CustomerTableRowProps> = ({
  customer,
  onStatusUpdate,
}) => {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
  };

  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">{customer.name}</div>
        <div className="text-sm text-gray-500">{customer.address.city}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Mail className="h-4 w-4 mr-2" />
          {customer.email}
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <Phone className="h-4 w-4 mr-2" />
          {customer.phone}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {customer.totalOrders}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ₹{customer.totalSpent.toLocaleString('en-IN')}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <select
          value={customer.status}
          onChange={(e) =>
            onStatusUpdate(customer.id, e.target.value as 'active' | 'inactive')
          }
          className={`${
            statusColors[customer.status]
          } text-sm rounded-full px-3 py-1 font-semibold`}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {new Date(customer.createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
};
export default CustomerTableRow;
