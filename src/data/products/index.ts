import { sarees } from './sarees';
import { girlswear } from './girlswear';
import { boyswear } from './boyswear';
import { Product } from '../../types/product';

export const allProducts: Product[] = [
  ...sarees,
  ...girlswear,
  ...boyswear
];

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getFeaturedProducts = (limit: number = 8): Product[] => {
  return allProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const getNewArrivals = (limit: number = 4): Product[] => {
  return allProducts
    .sort((a, b) => new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime())
    .slice(0, limit);
};