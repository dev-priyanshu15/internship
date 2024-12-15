import { useState, useCallback, useMemo } from 'react';
import { Order, OrderStatus } from '../types/order';
import { useAuth } from './useAuth';

export const useOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<OrderStatus | 'all'>('all');

  const updateOrderStatus = useCallback((orderId: string, status: OrderStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId
          ? { ...order, status, updatedAt: new Date().toISOString() }
          : order
      )
    );
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      // For regular users, only show their orders
      if (!user?.isAdmin && order.userId !== user?.id) {
        return false;
      }

      const matchesSearch = 
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [orders, searchTerm, statusFilter, user]);

  return {
    orders: filteredOrders,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    updateOrderStatus
  };
};