import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { ProjectData } from '@/types/projects';

interface ProjectStatusProps {
  projects: ProjectData[];
}

export const ProjectStatus: React.FC<ProjectStatusProps> = ({ projects }) => {
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const completionRate = (completedProjects / projects.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Project Status Overview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-32 h-32 mx-auto">
          <CircularProgressbar
            value={completionRate}
            text={`${completionRate.toFixed(0)}%`}
            styles={buildStyles({
              pathColor: '#2563eb',
              textColor: '#1f2937',
              trailColor: '#e5e7eb',
            })}
          />
        </div>
        <div className="space-y-4">
          {['ongoing', 'completed', 'planned'].map(status => (
            <div key={status} className="flex justify-between items-center">
              <span className="capitalize text-gray-600">{status}</span>
              <span className="font-semibold">
                {projects.filter(p => p.status === status).length}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};