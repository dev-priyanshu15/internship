import React from 'react';
import { Filter, Search } from 'lucide-react';

interface ProductFiltersProps {
  category: string;
  priceRange: string;
  sortBy: string;
  searchTerm: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (search: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  category,
  priceRange,
  sortBy,
  searchTerm,
  onCategoryChange,
  onPriceRangeChange,
  onSortChange,
  onSearchChange
}) => {
  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-4 w-full md:w-auto">
          <Filter className="h-5 w-5 text-gray-500" />
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Categories</option>
            <option value="sarees">Sarees</option>
            <option value="girls">Girls Wear</option>
            <option value="boys">Boys Wear</option>
          </select>

          <select
            value={priceRange}
            onChange={(e) => onPriceRangeChange(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="all">All Prices</option>
            <option value="under2000">Under ₹2000</option>
            <option value="2000-5000">₹2000 - ₹5000</option>
            <option value="above5000">Above ₹5000</option>
          </select>
        </div>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="border rounded-md px-3 py-2 w-full md:w-auto"
        >
          <option value="newest">Newest First</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductFilters;