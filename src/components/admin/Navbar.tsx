import React from 'react';
import { Bell, User } from 'lucide-react';

const AdminNavbar = () => {
  return (
    <nav className="bg-white shadow-md h-16 fixed w-full z-50 pl-64">
      <div className="h-full px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;