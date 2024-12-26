import React from 'react';
import { HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

const Help: React.FC = () => {
  const helpTopics = [
    {
      title: 'Getting Started',
      description: 'Learn the basics of using the dashboard',
      icon: <Book className="h-6 w-6" />,
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions and answers',
      icon: <HelpCircle className="h-6 w-6" />,
    },
    {
      title: 'Contact Support',
      description: '24/7 support team at your service',
      icon: <MessageCircle className="h-6 w-6" />,
    },
    {
      title: 'Schedule a Call',
      description: 'Book a call with our support team',
      icon: <Phone className="h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Help Center</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contact Support
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {helpTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="p-3 bg-blue-100 rounded-lg text-blue-600">
                  {topic.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{topic.title}</h3>
                <p className="mt-1 text-gray-500">{topic.description}</p>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6 mt-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Popular Articles</h2>
        <div className="space-y-4">
          {[
            'How to create a new project',
            'Managing team members',
            'Setting up notifications',
            'Security best practices',
          ].map((article, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-gray-700 hover:text-blue-600"
            >
              <Book className="h-4 w-4" />
              <a href="#" className="text-sm">
                {article}
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Need more help?</h2>
            <p className="mt-1 text-sm text-gray-500">
              Our support team is available 24/7 to assist you.
            </p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;