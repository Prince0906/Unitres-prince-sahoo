import React, { useState } from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  status: 'completed' | 'in-progress' | 'pending';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
}

const Tasks: React.FC = () => {
  const [tasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete project documentation',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2024-03-15',
    },
    {
      id: 2,
      title: 'Review pull requests',
      status: 'pending',
      priority: 'medium',
      dueDate: '2024-03-16',
    },
    {
      id: 3,
      title: 'Update dependencies',
      status: 'completed',
      priority: 'low',
      dueDate: '2024-03-14',
    },
  ]);

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'in-progress':
        return <Clock className="text-yellow-500" size={20} />;
      case 'pending':
        return <AlertCircle className="text-red-500" size={20} />;
    }
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 bg-red-50';
      case 'medium':
        return 'text-yellow-500 bg-yellow-50';
      case 'low':
        return 'text-green-500 bg-green-50';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">My Tasks</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Add New Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['pending', 'in-progress', 'completed'].map((status) => (
          <div key={status} className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 capitalize">{status}</h2>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{task.title}</span>
                      {getStatusIcon(task.status)}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className={`px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      <span className="text-gray-500">Due: {task.dueDate}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;