import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const AdminSidebar = () => {
  const router = useRouter();
  
  const isActive = (path) => router.pathname === path;

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#C8c8c8] border-r-2 border-black p-4">
      <div className="text-2xl font-serif font-bold mb-8 pt-16">
        Admin Panel
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link 
              href="/admin/dashboard"
              className={`block p-2 rounded-xl font-serif ${
                isActive('/admin/dashboard') 
                  ? 'bg-black text-white' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link 
              href="/admin/whiskies"
              className={`block p-2 rounded-xl font-serif ${
                isActive('/admin/whiskies') 
                  ? 'bg-black text-white' 
                  : 'hover:bg-gray-200'
              }`}
            >
              Manage Whiskies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;