import React from 'react';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Calendar,
  MessageSquare,
  Settings,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard', path: '/admin' },
    { icon: <ShoppingBag className="h-5 w-5" />, label: 'Products', path: '/admin/products' },
    { icon: <Users className="h-5 w-5" />, label: 'Customers', path: '/admin/customers' },
    { icon: <Calendar className="h-5 w-5" />, label: 'Calendar', path: '/admin/calendar' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Complaints', path: '/admin/complaints' }
  ];

  return (
    <div className="h-screen w-64 bg-gray-900 text-white fixed left-0 top-0">
      <div className="p-4">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-0 w-full p-4">
        <div className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </div>
        <div className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white cursor-pointer">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;