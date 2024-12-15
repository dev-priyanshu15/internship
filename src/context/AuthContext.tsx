import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/user';
import { authService } from '../services/auth/authService';
import { authStorage } from '../services/auth/authStorage';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize admin user
    authStorage.initializeAdmin();
    
    // Load current user
    const loadUser = () => {
      const currentUser = authService.getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };

    loadUser();

    // Listen for storage events to sync across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'user') {
        loadUser();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const user = await authService.login(email, password);
      setUser(user);
      toast.success('Login successful');
    } catch (error) {
      toast.error('Invalid email or password');
      throw error;
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      // Clear any other app state here
      localStorage.removeItem('cart');
      toast.success('Logged out successfully');
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
    } catch (error) {
      toast.error('Registration failed');
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      logout,
      register,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};