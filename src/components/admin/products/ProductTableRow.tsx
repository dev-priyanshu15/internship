import React from 'react';
import { Edit, Trash2 } from 'lucide-react';
import { Product } from '../../../types/product';

interface ProductTableRowProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

const ProductTableRow: React.FC<ProductTableRowProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img
            src={product.image}
            alt={product.name}
            className="h-10 w-10 rounded-md object-cover"
          />
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{product.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
          {product.category}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        ₹{product.price.toLocaleString('en-IN')}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {product.stock}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          onClick={() => onEdit(product)}
          className="text-indigo-600 hover:text-indigo-900 mr-4"
          aria-label={`Edit ${product.name}`}
        >
          <Edit className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="text-red-600 hover:text-red-900"
          aria-label={`Delete ${product.name}`}
        >
          <Trash2 className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
};

export default ProductTableRow;