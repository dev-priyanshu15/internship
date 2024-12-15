import React from 'react';
import AdminNavbar from '../../components/admin/Navbar';
import Sidebar from '../../components/admin/Sidebar';
import ProductList from '../../components/admin/products/ProductList';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <Sidebar />
      <div className="pl-64 pt-16">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductsPage;