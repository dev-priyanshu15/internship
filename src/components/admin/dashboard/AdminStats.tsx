import React from 'react';
import { DollarSign, ShoppingBag, Users, TrendingUp, Package, AlertTriangle } from 'lucide-react';

const AdminStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {/* Revenue Stats */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-green-100 rounded-lg">
            <DollarSign className="h-6 w-6 text-green-600" />
          </div>
          <span className="text-sm font-medium text-green-600">+12.5%</span>
        </div>
        <h3 className="text-gray-500 text-sm">Total Revenue</h3>
        <p className="text-2xl font-semibold mt-1">₹1,23,456</p>
        <div className="mt-4 text-sm text-gray-600">
          <span className="text-green-600">↑ 8.2%</span> from last month
        </div>
      </div>

      {/* Orders Stats */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <ShoppingBag className="h-6 w-6 text-purple-600" />
          </div>
          <div className="flex space-x-2">
            <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
              5 Pending
            </span>
          </div>
        </div>
        <h3 className="text-gray-500 text-sm">Total Orders</h3>
        <p className="text-2xl font-semibold mt-1">856</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
          <div className="text-center p-1 bg-gray-50 rounded">
            <p className="font-medium">234</p>
            <p className="text-gray-500">New</p>
          </div>
          <div className="text-center p-1 bg-gray-50 rounded">
            <p className="font-medium">542</p>
            <p className="text-gray-500">Delivered</p>
          </div>
          <div className="text-center p-1 bg-gray-50 rounded">
            <p className="font-medium">80</p>
            <p className="text-gray-500">Returns</p>
          </div>
        </div>
      </div>

      {/* Inventory Alert */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 bg-red-100 rounded-lg">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <span className="text-sm font-medium text-red-600">Low Stock Alert</span>
        </div>
        <h3 className="text-gray-500 text-sm">Inventory Status</h3>
        <p className="text-2xl font-semibold mt-1">12 Items</p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Traditional Silk Saree</span>
            <span className="text-red-600">2 left</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Wedding Lehenga</span>
            <span className="text-red-600">3 left</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;