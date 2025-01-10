import React from 'react';
import { useRouter } from 'next/router';

const AdminHeader = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear admin token/session
    localStorage.removeItem('adminToken');
    // Redirect to login page
    router.push('/admin/login');
  };

  return (
    <header className="fixed top-0 right-0 left-24 h-16 bg-[#C8c8c8] border-b-2 border-black z-10">
      <div className="flex justify-between items-center h-full px-8">
        <div className="flex items-center gap-4">
          <span className="font-serif">Admin</span>
          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded-xl font-serif text-sm hover:bg-gray-800 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;