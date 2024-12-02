'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * HomePage Component
 *
 * This component serves as the home page and automatically redirects to the /users page.
 * While the redirection is happening, it displays a spinner to indicate loading.
 */
const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/users');
  }, [router]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-400"></div>
    </div>
  );
};

export default HomePage;
