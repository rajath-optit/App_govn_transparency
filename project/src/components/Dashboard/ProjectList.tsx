import React from 'react';
import { ThumbsUp, AlertCircle } from 'lucide-react';
import { Project } from '../../types';

interface ProjectListProps {
  projects: Project[];
  onVote: (projectId: string) => void;
  onQuestion: (projectId: string) => void;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, onVote, onQuestion }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Current Projects</h3>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{project.title}</h4>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Budget: ${project.budget.toLocaleString()}</span>
                  <span className={`text-sm px-2 py-1 rounded-full ${
                    project.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onVote(project.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Vote for this project"
                >
                  <ThumbsUp className="w-5 h-5 text-blue-600" />
                </button>
                <button
                  onClick={() => onQuestion(project.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Question this project"
                >
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};