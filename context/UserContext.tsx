'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types/user';
import { userData } from './userData';

// Define the shape of the context
interface UserContextType {
  users: User[];
  toggleUserPresence: (id: number) => void;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the provider
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>(userData);

  // Function to toggle a user's presence
  const toggleUserPresence = (id: number) => {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === id ? { ...user, isPresent: !user.isPresent } : user
      )
    );
  };

  return (
    <UserContext.Provider value={{ users, toggleUserPresence }}>
      {children}
    </UserContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
