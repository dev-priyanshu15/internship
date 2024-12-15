import { useState, useCallback, useMemo, useEffect } from 'react';
import { Product, ProductFormData } from '../types/product';
import { productService } from '../services/admin/productService';
import toast from 'react-hot-toast';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      const data = await productService.getAll();
      setProducts(data);
      setError(null);
    } catch (error) {
      setError('Failed to load products');
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const addProduct = useCallback(async (productData: ProductFormData) => {
    try {
      const newProduct = await productService.create(productData);
      setProducts(prev => [...prev, newProduct]);
      toast.success('Product added successfully');
      return newProduct;
    } catch (error) {
      toast.error('Failed to add product');
      throw error;
    }
  }, []);

  const updateProduct = useCallback(async (id: string, productData: ProductFormData) => {
    try {
      const updatedProduct = await productService.update(id, productData);
      setProducts(prev =>
        prev.map(product =>
          product.id === id ? updatedProduct : product
        )
      );
      toast.success('Product updated successfully');
      return updatedProduct;
    } catch (error) {
      toast.error('Failed to update product');
      throw error;
    }
  }, []);

  const deleteProduct = useCallback(async (id: string) => {
    try {
      await productService.delete(id);
      setProducts(prev => prev.filter(product => product.id !== id));
      toast.success('Product deleted successfully');
    } catch (error) {
      toast.error('Failed to delete product');
      throw error;
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return {
    products: filteredProducts,
    searchTerm,
    setSearchTerm,
    addProduct,
    updateProduct,
    deleteProduct,
    loading,
    error,
    refreshProducts: loadProducts
  };
};

export default useProducts;