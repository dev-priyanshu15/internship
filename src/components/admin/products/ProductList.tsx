import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import ProductForm from './ProductForm';
import ProductSearch from './ProductSearch';
import ProductTableHeader from './ProductTableHeader';
import ProductTableRow from './ProductTableRow';
import { Product } from '../../../types/product';
import useProducts from '../../../hooks/useProducts';
import toast from 'react-hot-toast';

const ProductList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const {
    products,
    searchTerm,
    setSearchTerm,
    addProduct,
    updateProduct,
    deleteProduct,
    loading,
  } = useProducts();

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsFormOpen(true);
  };

  const handleDelete = async (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(productId);
      } catch (error) {
        console.error('Delete failed:', error);
      }
    }
  };

  const handleSubmit = async (data: Omit<Product, 'id'>) => {
    try {
      if (selectedProduct) {
        await updateProduct(selectedProduct.id, data);
      } else {
        await addProduct(data);
      }
      setIsFormOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error('Operation failed:', error);
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
        <button
          onClick={() => {
            setSelectedProduct(null);
            setIsFormOpen(true);
          }}
          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      <ProductSearch searchTerm={searchTerm} onSearch={setSearchTerm} />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <ProductTableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <ProductTableRow
                key={product.id}
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      </div>

      {isFormOpen && (
        <ProductForm
          product={selectedProduct}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedProduct(null);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};
export default ProductList;