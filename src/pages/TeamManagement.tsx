import React from 'react';
import { Users, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  status: 'active' | 'away' | 'offline';
}

const TeamManagement: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Frontend Developer',
      email: 'john@example.com',
      phone: '+1 234-567-8901',
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Backend Developer',
      email: 'jane@example.com',
      phone: '+1 234-567-8902',
      status: 'away',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'UI Designer',
      email: 'mike@example.com',
      phone: '+1 234-567-8903',
      status: 'offline',
    },
  ];

  const getStatusColor = (status: TeamMember['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Team Management</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add Team Member
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="grid gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={`https://ui-avatars.com/api/?name=${member.name}&background=0D8ABC&color=fff`}
                      alt={member.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getStatusColor(
                        member.status
                      )}`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-6">
                  <div className="flex items-center text-gray-500">
                    <Mail size={16} className="mr-2" />
                    <span className="text-sm">{member.email}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Phone size={16} className="mr-2" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;