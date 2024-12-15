export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  image: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type ProductFormData = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}