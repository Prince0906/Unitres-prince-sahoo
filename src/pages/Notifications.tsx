import React from 'react';
import { Bell, Mail, MessageSquare, AlertCircle } from 'lucide-react';

interface Notification {
  id: number;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const Notifications: React.FC = () => {
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'info',
      title: 'New Project Assignment',
      message: 'You have been assigned to the E-commerce Platform project',
      time: '2 hours ago',
      read: false,
    },
    {
      id: 2,
      type: 'success',
      title: 'Task Completed',
      message: 'Frontend development phase has been completed successfully',
      time: '5 hours ago',
      read: true,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Meeting Reminder',
      message: 'Team meeting starts in 30 minutes',
      time: '30 minutes ago',
      read: false,
    },
    {
      id: 4,
      type: 'error',
      title: 'Build Failed',
      message: 'Latest deployment failed due to test errors',
      time: '1 hour ago',
      read: false,
    }
  ];

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'info':
        return <MessageSquare className="text-blue-500" size={20} />;
      case 'success':
        return <Bell className="text-green-500" size={20} />;
      case 'warning':
        return <AlertCircle className="text-yellow-500" size={20} />;
      case 'error':
        return <AlertCircle className="text-red-500" size={20} />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Notifications</h1>
        <button className="text-blue-600 hover:text-blue-800">Mark all as read</button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </p>
                    <p className="text-sm text-gray-500">{notification.time}</p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{notification.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;