import { User } from '../../types/user';
import { authStorage } from './authStorage';

export const authService = {
  login: async (email: string, password: string): Promise<User> => {
    const users = authStorage.getUsers();
    const user = users.find((u: any) => 
      u.email === email && u.password === password
    );
    
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const { password: _, ...userWithoutPassword } = user;
    authStorage.setCurrentUser(userWithoutPassword);
    return userWithoutPassword;
  },

  register: async (name: string, email: string, password: string): Promise<User> => {
    const users = authStorage.getUsers();
    
    if (users.some((u: any) => u.email === email)) {
      throw new Error('Email already exists');
    }

    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      password,
      role: 'user' as const
    };

    authStorage.saveUser(newUser);
    
    const { password: _, ...userWithoutPassword } = newUser;
    authStorage.setCurrentUser(userWithoutPassword);
    return userWithoutPassword;
  },

  logout: async (): Promise<void> => {
    authStorage.clearCurrentUser();
  },

  getCurrentUser: (): User | null => {
    return authStorage.getCurrentUser();
  },

  isAdmin: (): boolean => {
    const user = authStorage.getCurrentUser();
    return user?.role === 'admin';
  }
};