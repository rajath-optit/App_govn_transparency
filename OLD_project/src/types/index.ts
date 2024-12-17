export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'admin' | 'moderator';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: 'proposed' | 'ongoing' | 'completed';
  location: string;
  department: string;
  votes: number;
  documents: Document[];
  impact: string;
}

export interface Document {
  id: string;
  title: string;
  url: string;
  type: 'pdf' | 'doc' | 'image';
  uploadDate: string;
}

export interface DepartmentMetrics {
  id: string;
  name: string;
  budget: number;
  spent: number;
  projectCount: number;
  efficiency: number;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  department: string;
  replies: number;
  views: number;
}
