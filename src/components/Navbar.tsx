import React from 'react';
import { Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto">
        <div className="flex items-center justify-end h-16">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Bell size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;