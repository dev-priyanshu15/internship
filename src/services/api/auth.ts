import axios from 'axios';
import { User } from '../../types/user';

const API_URL = '/api/users';

export const authApi = {
  login: async (email: string, password: string): Promise<User> => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      const user = response.data;
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },

  register: async (name: string, email: string, password: string): Promise<User> => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      const user = response.data;
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAdmin: (): boolean => {
    const user = authApi.getCurrentUser();
    return user?.role === 'admin';
  }
};