import React from 'react';
import AdminNavbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import CustomerList from '../../components/admin/customers/CustomerList';

const CustomersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <CustomerList />
      </div>
    </div>
  );
};

export default CustomersPage;