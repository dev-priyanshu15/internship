import { User } from '../../types/user';
import { storage } from '../../utils/storage';
import { STORAGE_KEYS, ADMIN_USER } from '../../utils/constants';

export const authStorage = {
  initializeAdmin: () => {
    const users = storage.get(STORAGE_KEYS.USERS) || [];
    if (!users.some((user: User) => user.role === 'admin')) {
      users.push(ADMIN_USER);
      storage.set(STORAGE_KEYS.USERS, users);
    }
  },

  getUsers: () => {
    return storage.get(STORAGE_KEYS.USERS) || [];
  },

  saveUser: (user: User) => {
    const users = authStorage.getUsers();
    users.push(user);
    storage.set(STORAGE_KEYS.USERS, users);
  },

  getCurrentUser: () => {
    return storage.get(STORAGE_KEYS.USER);
  },

  setCurrentUser: (user: User) => {
    storage.set(STORAGE_KEYS.USER, user);
  },

  clearCurrentUser: () => {
    storage.remove(STORAGE_KEYS.USER);
  }
};