import axios from 'axios';
import { Product, ProductFormData } from '../../types/product';

const API_URL = '/api/products';

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getById: async (id: string): Promise<Product> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  create: async (data: ProductFormData): Promise<Product> => {
    const response = await axios.post(API_URL, data);
    return response.data;
  },

  update: async (id: string, data: ProductFormData): Promise<Product> => {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  },

  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
  }
};