import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Download, Upload, MessageSquare } from 'lucide-react';

export const QuickActions = () => {
  const actions = [
    {
      icon: FileText,
      label: 'New Application',
      description: 'Start a new benefit application',
      path: '/benefits/new',
    },
    {
      icon: Upload,
      label: 'Upload Documents',
      description: 'Submit required documentation',
      path: '/documents/upload',
    },
    {
      icon: MessageSquare,
      label: 'Contact Support',
      description: 'Get help with your applications',
      path: '/chat',
    },
    {
      icon: Download,
      label: 'Download Forms',
      description: 'Access important forms',
      path: '/documents',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
        <div className="mt-6 grid grid-cols-1 gap-4">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.label}
                to={action.path}
                className="group relative rounded-lg p-4 flex items-center space-x-4 border border-gray-200 hover:border-blue-500"
              >
                <div className="flex-shrink-0">
                  <Icon className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{action.label}</p>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
