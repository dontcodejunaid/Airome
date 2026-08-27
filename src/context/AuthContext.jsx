import React, { createContext, useContext, useState, useEffect } from 'react';
import { storageService } from '../services/storageService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = storageService.getCurrentUser();
    setCurrentUser(user);
    setLoading(false);
  }, []);

  const login = (identifier, password) => {
    const user = storageService.loginUser(identifier, password);
    setCurrentUser(user);
    return user;
  };

  const register = (userData) => {
    const user = storageService.registerUser(userData);
    setCurrentUser(user);
    return user;
  };

  const logout = () => {
    storageService.logout();
    setCurrentUser(null);
  };

  const resetPassword = (email, newPassword) => {
    return storageService.resetPassword(email, newPassword);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout, resetPassword, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
