import React from 'react';
import { DashboardStats } from './DashboardStats';
import { RecentActivity } from './RecentActivity';
import { QuickActions } from './QuickActions';
import { SpendingChart } from '../../components/Dashboard/SpendingChart';
import { ProjectList } from '../../components/Dashboard/ProjectList';

const Dashboard = () => {
  const spendingData = [
    { year: '2020', amount: 2400 },
    { year: '2021', amount: 2800 },
    { year: '2022', amount: 3200 },
    { year: '2023', amount: 3600 },
    { year: '2024', amount: 4000 },
  ];

  const projects = [
    {
      id: '1',
      title: 'Infrastructure Development',
      description: 'City-wide road and bridge maintenance project',
      budget: 1500000,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'ongoing',
      location: 'Downtown',
      department: 'Public Works',
      votes: 245,
      documents: [],
      impact: 'High',
    },
    {
      id: '2',
      title: 'Public Health Initiative',
      description: 'Community healthcare and wellness programs',
      budget: 800000,
      startDate: '2024-03-01',
      endDate: '2024-08-31',
      status: 'proposed',
      location: 'Citywide',
      department: 'Health',
      votes: 189,
      documents: [],
      impact: 'Medium',
    },
  ];

  const handleVote = (projectId: string) => {
    console.log('Voted for project:', projectId);
  };

  const handleQuestion = (projectId: string) => {
    console.log('Question about project:', projectId);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SpendingChart data={spendingData} />
        <ProjectList 
          projects={projects}
          onVote={handleVote}
          onQuestion={handleQuestion}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;