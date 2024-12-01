'use client';

import React, { useState } from 'react';
import { useUserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';

const TogglePresencePage = () => {
  const { users, toggleUserPresence } = useUserContext();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const router = useRouter();

  // Function to toggle a user's presence
  const handleToggle = () => {
    if (selectedUserId !== null) {
      toggleUserPresence(selectedUserId);
      router.push('/users');
    }
  };

  return (
    <div className="max-w-md mx-auto pt-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Toggle User Presence
      </h1>
      <select
        className="w-full p-3 mb-4 bg-gray-800 text-gray-100 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setSelectedUserId(Number(e.target.value))}
        defaultValue=""
      >
        <option value="" disabled>
          Select a user
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button
        onClick={handleToggle}
        className="w-full bg-blue-600 text-gray-100 p-3 rounded-lg hover:bg-blue-500 transition-all"
      >
        Toggle Presence
      </button>
    </div>
  );
};

export default TogglePresencePage;
