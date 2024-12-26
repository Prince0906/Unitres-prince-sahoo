import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Layout from './components/Layout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import TeamManagement from './pages/TeamManagement';
import ProjectOverview from './pages/ProjectOverview';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import SystemSettings from './pages/SystemSettings';
import Notifications from './pages/Notifications';
import Help from './pages/Help';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      
      <Route path="/" element={<PrivateRoute element={<Layout />} />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="team" element={<TeamManagement />} />
        <Route path="projects" element={<ProjectOverview />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="role-management" element={<RoleManagement />} />
        <Route path="settings" element={<SystemSettings />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  );
}

export default App;