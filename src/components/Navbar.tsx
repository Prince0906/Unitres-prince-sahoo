import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleNotificationClick = () => {
    navigate('/notifications');
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-4 mx-auto">
        <div className="flex items-center justify-end h-16">
          <button 
            onClick={handleNotificationClick}
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <Bell size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;