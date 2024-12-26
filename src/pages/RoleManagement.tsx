import React from 'react';
import { Shield, Users, Lock } from 'lucide-react';

interface Role {
  id: number;
  name: string;
  description: string;
  permissions: string[];
  userCount: number;
}

const RoleManagement: React.FC = () => {
  const roles: Role[] = [
    {
      id: 1,
      name: 'Admin',
      description: 'Full system access with all permissions',
      permissions: ['Create', 'Read', 'Update', 'Delete', 'Manage Users', 'Manage Roles'],
      userCount: 3,
    },
    {
      id: 2,
      name: 'Manager',
      description: 'Team and project management capabilities',
      permissions: ['Create', 'Read', 'Update', 'Manage Team', 'View Reports'],
      userCount: 8,
    },
    {
      id: 3,
      name: 'User',
      description: 'Basic system access with limited permissions',
      permissions: ['Read', 'Create Tasks', 'Update Tasks'],
      userCount: 24,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Role Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Create Role
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {roles.map((role) => (
          <div key={role.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">{role.name}</h2>
                  <p className="text-sm text-gray-500">{role.description}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="text-blue-600 hover:text-blue-800">Edit</button>
                <button className="text-red-600 hover:text-red-800">Delete</button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">
                  {role.userCount} users with this role
                </span>
              </div>
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">
                  {role.permissions.length} permissions
                </span>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Permissions</h3>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleManagement;