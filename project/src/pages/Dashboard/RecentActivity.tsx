import React from 'react';
import { format } from 'date-fns';

export const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'application',
      status: 'submitted',
      description: 'Scholarship application submitted',
      date: new Date(2024, 2, 15),
    },
    {
      id: 2,
      type: 'benefit',
      status: 'approved',
      description: 'Tax benefit approved',
      date: new Date(2024, 2, 14),
    },
    // Add more activities as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            {activities.map((activity, activityIdx) => (
              <li key={activity.id}>
                <div className="relative pb-8">
                  {activityIdx !== activities.length - 1 ? (
                    <span
                      className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                      aria-hidden="true"
                    />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div>
                      <span className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center ring-8 ring-white">
                        {/* Icon based on activity type */}
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                      <div>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                      </div>
                      <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        {format(activity.date, 'MMM d, yyyy')}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};