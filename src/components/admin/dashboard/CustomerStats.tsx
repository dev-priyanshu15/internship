import React from 'react';
import { BarChart3 } from 'lucide-react';

const CustomerStats = () => {
  const stats = {
    totalCustomers: 2456,
    newCustomers: 156,
    activeCustomers: 1890,
    repeatCustomers: 876
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Customer Statistics</h2>
        <BarChart3 className="h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-purple-50 rounded-lg">
          <p className="text-sm text-purple-600 mb-1">Total Customers</p>
          <p className="text-2xl font-semibold text-purple-900">{stats.totalCustomers}</p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600 mb-1">New Customers</p>
          <p className="text-2xl font-semibold text-green-900">{stats.newCustomers}</p>
        </div>
        <div className="p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-600 mb-1">Active Customers</p>
          <p className="text-2xl font-semibold text-blue-900">{stats.activeCustomers}</p>
        </div>
        <div className="p-4 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-600 mb-1">Repeat Customers</p>
          <p className="text-2xl font-semibold text-yellow-900">{stats.repeatCustomers}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;