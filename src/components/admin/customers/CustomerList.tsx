import React from 'react';
import { useCustomers } from '../../../hooks/useCustomers';
import CustomerTableHeader from './CustomerTableHeader';
import CustomerTableRow from './CustomerTableRow';
import CustomerFilters from './CustomerFilters';
import toast from 'react-hot-toast';

const CustomerList = () => {
  const {
    customers,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    updateCustomerStatus,
  } = useCustomers();

  const handleStatusUpdate = async (
    customerId: string,
    status: 'active' | 'inactive'
  ) => {
    try {
      updateCustomerStatus(customerId, status);
      toast.success('Customer status updated successfully');
    } catch (error) {
      toast.error('Failed to update customer status');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Customers</h2>

      <CustomerFilters
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <CustomerTableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {customers.map((customer) => (
              <CustomerTableRow
                key={customer.id}
                customer={customer}
                onStatusUpdate={handleStatusUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomerList;
