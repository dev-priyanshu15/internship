import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../services/api/auth';
import toast from 'react-hot-toast';

export const useAdminAuth = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = () => {
      const user = authApi.getCurrentUser();
      if (!user || user.role !== 'admin') {
        navigate('/login');
        return;
      }
      setIsAdmin(true);
      setLoading(false);
    };

    checkAdminStatus();
  }, [navigate]);

  const adminLogout = async () => {
    try {
      await authApi.logout();
      navigate('/login');
      toast.success('Admin logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return { isAdmin, loading, adminLogout };
};