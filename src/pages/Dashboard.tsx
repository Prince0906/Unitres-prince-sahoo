import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { BarChart, Users, CheckCircle, AlertCircle } from 'lucide-react';

const StatCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}> = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} text-white mr-4`}>
        {icon}
      </div>
      <div>
        <p className="text-gray-500 text-sm">{title}</p>
        <p className="text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome back, {user?.username}!
        </h1>
        <div className="text-sm text-gray-500">
          Role: <span className="capitalize">{user?.role}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Projects"
          value="12"
          icon={<BarChart size={24} />}
          color="bg-blue-500"
        />
        <StatCard
          title="Team Members"
          value="24"
          icon={<Users size={24} />}
          color="bg-green-500"
        />
        <StatCard
          title="Completed Tasks"
          value="48"
          icon={<CheckCircle size={24} />}
          color="bg-purple-500"
        />
        <StatCard
          title="Pending Issues"
          value="6"
          icon={<AlertCircle size={24} />}
          color="bg-yellow-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center py-2 border-b last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">New project milestone completed</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center py-2 border-b last:border-0">
                <div className="w-2 h-2 rounded-full bg-red-500 mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-800">Project Alpha Deadline</p>
                  <p className="text-xs text-gray-500">in 3 days</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;