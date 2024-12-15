import React from 'react';
import { Search } from 'lucide-react';

interface CustomerFiltersProps {
  searchTerm: string;
  onSearch: (value: string) => void;
  statusFilter: 'all' | 'active' | 'inactive';
  onStatusChange: (status: 'all' | 'active' | 'inactive') => void;
}

const CustomerFilters: React.FC<CustomerFiltersProps> = ({
  searchTerm,
  onSearch,
  statusFilter,
  onStatusChange,
}) => {
  return (
    <div className="mb-6 flex space-x-4">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search customers..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <select
        value={statusFilter}
        onChange={(e) =>
          onStatusChange(e.target.value as 'all' | 'active' | 'inactive')
        }
        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};
export default CustomerFilters;
