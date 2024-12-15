import { User } from '../types/user';

// Mock API endpoints - replace with real API calls in production
export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'demo@example.com' && password === 'password') {
          const user = {
            id: '1',
            name: 'Demo User',
            email: email,
            role: 'user' as const
          };
          localStorage.setItem('user', JSON.stringify(user));
          resolve(user);
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  },

  register: async (name: string, email: string, password: string): Promise<User> => {
    // Simulate API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          id: Date.now().toString(),
          name,
          email,
          role: 'user' as const
        };
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user);
      }, 1000);
    });
  },

  logout: async (): Promise<void> => {
    localStorage.removeItem('user');
  },

  getCurrentUser: (): User | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};