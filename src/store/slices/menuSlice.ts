import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuItem, Role } from '../../types';
import { 
  LayoutDashboard, 
  UserCircle, 
  ClipboardList, 
  Bell, 
  HelpCircle,
  Users,
  FileBarChart,
  Settings,
  Shield
} from 'lucide-react';

const menuItems: MenuItem[] = [
  // User Menu Items
  {
    id: 'dashboard',
    title: 'Dashboard',
    path: '/dashboard',
    icon: 'LayoutDashboard',
    roles: ['user', 'manager', 'admin'],
  },
  {
    id: 'profile',
    title: 'Profile',
    path: '/profile',
    icon: 'UserCircle',
    roles: ['user', 'manager', 'admin'],
  },
  {
    id: 'tasks',
    title: 'My Tasks',
    path: '/tasks',
    icon: 'ClipboardList',
    roles: ['user'],
  },
  // Manager Menu Items
  {
    id: 'team',
    title: 'Team Management',
    path: '/team',
    icon: 'Users',
    roles: ['manager', 'admin'],
  },
  {
    id: 'projects',
    title: 'Project Overview',
    path: '/projects',
    icon: 'FileBarChart',
    roles: ['manager', 'admin'],
  },
  // Admin Menu Items
  {
    id: 'user-management',
    title: 'User Management',
    path: '/user-management',
    icon: 'Users',
    roles: ['admin'],
  },
  {
    id: 'role-management',
    title: 'Role Management',
    path: '/role-management',
    icon: 'Shield',
    roles: ['admin'],
  },
  {
    id: 'settings',
    title: 'System Settings',
    path: '/settings',
    icon: 'Settings',
    roles: ['admin'],
  },
  // Common Menu Items
  {
    id: 'notifications',
    title: 'Notifications',
    path: '/notifications',
    icon: 'Bell',
    roles: ['user', 'manager', 'admin'],
  },
  {
    id: 'help',
    title: 'Help',
    path: '/help',
    icon: 'HelpCircle',
    roles: ['user', 'manager', 'admin'],
  },
];

interface MenuState {
  items: MenuItem[];
  currentRole: Role | null;
}

const initialState: MenuState = {
  items: menuItems,
  currentRole: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setCurrentRole: (state, action: PayloadAction<Role>) => {
      state.currentRole = action.payload;
    },
  },
});

export const { setCurrentRole } = menuSlice.actions;
export default menuSlice.reducer;