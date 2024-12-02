'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Navbar Component
 *
 * This component displays the navigation links for the application.
 * It uses the `usePathname` hook to get the current pathname.
 */
const Navbar = () => {
  const pathname = usePathname();

  /**
   * linkClasses Function
   *
   * This function returns the appropriate CSS classes for a link based on the current path.
   */
  const linkClasses = (path: string) =>
    `hover:text-blue-400 transition-colors ${
      pathname === path ? 'text-blue-400 font-bold' : 'text-gray-100'
    }`;

  return (
    <nav className="bg-gray-800 p-4 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
      <Link href="/users" className={linkClasses('/users')}>
        User List
      </Link>
      <Link href="/toggle-presence" className={linkClasses('/toggle-presence')}>
        Toggle Presence
      </Link>
    </nav>
  );
};

export default Navbar;
