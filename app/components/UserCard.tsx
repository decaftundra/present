'use client';
import React from 'react';
import { User } from '@/types/user';

interface UserCardProps {
  user: User;
}


/**
 * UserCard Component
 *
 * This component displays a user's name and presence status.
 * It uses Tailwind CSS for styling.
 */
const UserCard = ({ user }: UserCardProps) => {
  return (
    <li
      key={user.id}
      className="p-4 bg-gray-800 rounded-lg shadow-lg flex justify-between items-center"
    >
      <span className="text-lg font-medium">{user.name}</span>
      <span
        className={`text-lg font-semibold ${
          user.isPresent ? 'text-green-400' : 'text-red-400'
        }`}
      >
        {user.isPresent ? 'Present' : 'Absent'}
      </span>
    </li>
  );
};

export default UserCard;
