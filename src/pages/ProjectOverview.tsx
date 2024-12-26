import React from 'react';
import { BarChart, Clock, CheckCircle, Users } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  description: string;
  progress: number;
  status: 'active' | 'completed' | 'on-hold';
  teamSize: number;
  deadline: string;
}

const ProjectOverview: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Building a modern e-commerce platform with React and Node.js',
      progress: 75,
      status: 'active',
      teamSize: 8,
      deadline: '2024-06-30',
    },
    {
      id: 2,
      name: 'Mobile App Development',
      description: 'Creating a cross-platform mobile app using React Native',
      progress: 45,
      status: 'active',
      teamSize: 6,
      deadline: '2024-08-15',
    },
    {
      id: 3,
      name: 'CRM System',
      description: 'Implementing a customer relationship management system',
      progress: 100,
      status: 'completed',
      teamSize: 5,
      deadline: '2024-03-01',
    },
  ];

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-500 bg-green-50';
      case 'completed':
        return 'text-blue-500 bg-blue-50';
      case 'on-hold':
        return 'text-yellow-500 bg-yellow-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Project Overview</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          New Project
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div className="mb-4 lg:mb-0">
                <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
                <button className="text-blue-600 hover:text-blue-800">View Details</button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <BarChart className="text-blue-500 mr-2" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Progress</p>
                  <p className="font-medium">{project.progress}%</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="text-green-500 mr-2" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Team Size</p>
                  <p className="font-medium">{project.teamSize} members</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="text-yellow-500 mr-2" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Deadline</p>
                  <p className="font-medium">{project.deadline}</p>
                </div>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-purple-500 mr-2" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Tasks</p>
                  <p className="font-medium">23/30</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectOverview;