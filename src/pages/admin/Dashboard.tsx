import React from 'react';
import { Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';
import AdminNavbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import StatCard from '../../components/admin/dashboard/StatCard';
import RecentOrders from '../../components/admin/dashboard/RecentOrders';
import TopProducts from '../../components/admin/dashboard/TopProducts';
import CustomerStats from '../../components/admin/dashboard/CustomerStats';

const statsCards = [
  {
    title: 'Total Sales',
    value: '₹1,23,456',
    icon: DollarSign,
    change: '+12.5%',
    changeColor: 'text-green-600'
  },
  {
    title: 'Total Orders',
    value: '856',
    icon: ShoppingBag,
    change: '+8.2%',
    changeColor: 'text-green-600'
  },
  {
    title: 'Total Customers',
    value: '2,456',
    icon: Users,
    change: '+15.3%',
    changeColor: 'text-green-600'
  },
  {
    title: 'Growth Rate',
    value: '24.5%',
    icon: TrendingUp,
    change: '+4.1%',
    changeColor: 'text-green-600'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">Dashboard Overview</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {statsCards.map((card, index) => (
              <StatCard key={index} {...card} />
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <RecentOrders />
              <CustomerStats />
            </div>
            <div>
              <TopProducts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;