import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return auth.currentUser ? children : <Navigate to="/login-secret" />;
};
