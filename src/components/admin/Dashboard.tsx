import React from 'react';
import { Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';

const statsCards = [
  {
    title: 'Total Sales',
    value: '₹1,23,456',
    icon: <DollarSign className="h-6 w-6 text-green-600" />,
    change: '+12.5%',
    changeColor: 'text-green-600'
  },
  {
    title: 'Total Orders',
    value: '856',
    icon: <ShoppingBag className="h-6 w-6 text-blue-600" />,
    change: '+8.2%',
    changeColor: 'text-green-600'
  },
  {
    title: 'Total Customers',
    value: '2,456',
    icon: <Users className="h-6 w-6 text-purple-600" />,
    change: '+15.3%',
    changeColor: 'text-green-600'
  },
  {
    title: 'Growth Rate',
    value: '24.5%',
    icon: <TrendingUp className="h-6 w-6 text-orange-600" />,
    change: '+4.1%',
    changeColor: 'text-green-600'
  }
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">
                {card.icon}
              </div>
              <span className={`text-sm font-medium ${card.changeColor}`}>
                {card.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm">{card.title}</h3>
            <p className="text-2xl font-semibold mt-1">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Add more dashboard components like charts, recent orders, etc. */}
    </div>
  );
};

export default Dashboard;