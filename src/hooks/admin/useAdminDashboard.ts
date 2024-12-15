import { useState, useEffect } from 'react';
import { dashboardService } from '../../services/admin/dashboardService';
import { DashboardStats } from '../../types/admin';
import toast from 'react-hot-toast';

export const useAdminDashboard = () => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const data = await dashboardService.getStats();
      setStats(data);
    } catch (err) {
      setError('Failed to load dashboard data');
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  return { stats, loading, error, refreshData: fetchDashboardData };
};