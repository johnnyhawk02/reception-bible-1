import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = ({ setSidebarOpen }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', description: 'Overview & quick access' },
    { path: '/index', label: 'Index', description: 'Complete reference guide' },
    { path: '/opening-procedure', label: 'Opening Procedure', description: 'Daily opening checklist' },
    { path: '/dos-and-donts', label: "Do's & Don'ts", description: 'Essential guidelines' },
    { path: '/memberships', label: 'Memberships', description: 'Member management' },
    { path: '/fitness-classes', label: 'Fitness Classes', description: 'Class booking procedures' },
    { path: '/class-descriptions', label: 'Class Descriptions', description: 'Detailed class information' },
    { path: '/library', label: 'Library', description: 'Printing payment procedures' },
    { path: '/aiming-high', label: 'Aiming High', description: 'Activity payment procedures' },
    { path: '/till-checks', label: 'Till Checks', description: 'Cash handling procedures' },
    { path: '/end-of-day', label: 'End of Day', description: 'Closing procedures' },
    { path: '/faqs', label: 'FAQs', description: 'Common questions' }
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <Link to="/" className="flex items-center" onClick={() => setSidebarOpen && setSidebarOpen(false)}>
          <div>
            <h1 className="font-semibold text-gray-900">Reception Bible</h1>
            <p className="text-xs text-gray-500">Meadows Leisure Centre</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen && setSidebarOpen(false)}
              className={`block w-full px-3 py-2 text-sm ${
                location.pathname === item.path
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="font-medium">{item.label}</div>
              <div className={`text-xs ${
                location.pathname === item.path ? 'text-gray-600' : 'text-gray-500'
              }`}>
                {item.description}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="p-3">
          <div className="text-xs font-medium text-gray-900 mb-2">Emergency Contacts</div>
          <div className="space-y-1 text-xs text-gray-600">
            <div className="flex justify-between">
              <span>Emergency:</span>
              <span className="font-medium text-gray-900">999</span>
            </div>
            <div className="flex justify-between">
              <span>Main:</span>
              <span className="font-medium text-gray-900">0151 288 6727</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;