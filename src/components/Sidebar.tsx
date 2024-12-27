import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { logout } from '../store/slices/authSlice';
import * as Icons from 'lucide-react';

const Sidebar: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.menu);
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const filteredItems = items.filter(item => item.roles.includes(user?.role || 'user'));

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <div className="w-64 bg-white border-r border-neutral-200 h-screen flex-shrink-0 overflow-y-auto flex flex-col">
      <div className="p-6 border-b border-neutral-200">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-primary-50 rounded-lg">
            <Icons.Layout className="h-6 w-6 text-primary-600" />
          </div>
          <h1 className="text-xl font-semibold text-neutral-800">Dashboard</h1>
        </div>
      </div>

      <nav className="p-4 flex-1">
        <div className="space-y-1">
          {filteredItems.map((item) => {
            const IconComponent = (Icons as any)[item.icon];
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`
                }
              >
                {IconComponent && (
                  <IconComponent
                    size={18}
                    className={`mr-3 flex-shrink-0`}
                  />
                )}
                <span>{item.title}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-neutral-200">
        <div className="space-y-4">
          <button
            onClick={handleProfileClick}
            className="w-full flex items-center px-4 py-3 rounded-lg bg-neutral-50 hover:bg-neutral-100 transition-colors"
          >
            <img
              src={`https://ui-avatars.com/api/?name=${user?.username}&background=0D8ABC&color=fff`}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3 text-left">
              <p className="text-sm font-medium text-neutral-900">{user?.username}</p>
              <p className="text-xs text-neutral-500 capitalize">{user?.role}</p>
            </div>
          </button>
          
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Icons.LogOut size={18} className="mr-3" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;