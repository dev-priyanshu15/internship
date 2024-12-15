import { useState, useCallback, useMemo } from 'react';
import { Customer } from '../types/customer';

// Mock data - replace with API calls in production
const initialCustomers: Customer[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    phone: '+91 98765 43210',
    totalOrders: 5,
    totalSpent: 25999,
    lastOrderDate: '2024-03-15',
    createdAt: '2023-12-01',
    status: 'active',
    address: {
      street: '123 Main St',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001'
    }
  }
];

export const useCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');

  const updateCustomerStatus = useCallback((customerId: string, status: 'active' | 'inactive') => {
    setCustomers(prev =>
      prev.map(customer =>
        customer.id === customerId
          ? { ...customer, status }
          : customer
      )
    );
  }, []);

  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => {
      const matchesSearch = 
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm);
      const matchesStatus = statusFilter === 'all' || customer.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [customers, searchTerm, statusFilter]);

  return {
    customers: filteredCustomers,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    updateCustomerStatus
  };
};