'use client';

import React from 'react';
import { useUserContext } from '@/context/UserContext';
import UserCard from '../components/UserCard';
import dynamic from 'next/dynamic';

/**
 * UsersPage Component
 *
 * This component displays a list of users and their presence status.
 * It uses the `useUserContext` hook to access the user data from the `UserContext`.
 * The component is dynamically imported and rendered client-side only.
 */
const UsersPage = () => {
  const { users } = useUserContext();

  return (
    <div className="max-w-2xl mx-auto pt-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        User Presence List
      </h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

// Ensure the component is rendered client-side only
export default dynamic(() => Promise.resolve(UsersPage), { ssr: false });
