import { Product, ProductFormData } from '../../types/product';
import { productApi } from '../api/products';

export const productService = {
  getAll: async (): Promise<Product[]> => {
    return await productApi.getAll();
  },

  create: async (data: ProductFormData): Promise<Product> => {
    return await productApi.create(data);
  },

  update: async (id: string, data: ProductFormData): Promise<Product> => {
    return await productApi.update(id, data);
  },

  delete: async (id: string): Promise<void> => {
    await productApi.delete(id);
  },

  updateStock: async (id: string, quantity: number): Promise<Product> => {
    const product = await productApi.getById(id);
    return await productApi.update(id, { ...product, stock: quantity });
  }
};