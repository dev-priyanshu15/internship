import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../types/user';
import { authService } from '../services/auth/authService';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const user = await authService.login(email, password);
      setUser(user);
      toast.success('Login successful');
      
      // Redirect based on user role
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      toast.error('Invalid email or password');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error('Logout failed');
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const user = await authService.register(name, email, password);
      setUser(user);
      toast.success('Registration successful');
      navigate('/');
    } catch (error) {
      toast.error('Registration failed');
      throw error;
    }
  };

  return {
    user,
    loading,
    login,
    logout,
    register,
    isAdmin: user?.role === 'admin'
  };
};

export default useAuth;