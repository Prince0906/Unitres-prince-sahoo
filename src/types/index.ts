export type Role = 'user' | 'manager' | 'admin';

export interface User {
  id: number;
  username: string;
  email: string;
  role: Role;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon: string;
  roles: Role[];
}