import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  GraduationCap, 
  Gift, 
  MessageSquare, 
  FileText, 
  CreditCard,
  User
} from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/scholarships', label: 'Scholarships', icon: GraduationCap },
    { path: '/benefits', label: 'Benefits', icon: Gift },
    { path: '/chat', label: 'Support Chat', icon: MessageSquare },
    { path: '/documents', label: 'Documents', icon: FileText },
    { path: '/payments', label: 'Payments', icon: CreditCard },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};