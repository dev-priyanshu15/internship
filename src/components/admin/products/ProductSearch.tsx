import React from 'react';
import { Search } from 'lucide-react';

interface ProductSearchProps {
  searchTerm: string;
  onSearch: (value: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ searchTerm, onSearch }) => {
  return (
    <div className="mb-6 relative">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
    </div>
  );
};

export default ProductSearch;