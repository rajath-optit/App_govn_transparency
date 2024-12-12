export interface Scholarship {
  id: string;
  userId: string;
  programName: string;
  status: 'pending' | 'approved' | 'rejected';
  amount: number;
  startDate: string;
  endDate: string;
  documents: Document[];
  academicProgress: AcademicProgress[];
}

export interface AcademicProgress {
  semester: string;
  gpa: number;
  credits: number;
  status: 'good' | 'warning' | 'probation';
}

export interface Document {
  id: string;
  type: string;
  url: string;
  uploadDate: string;
  status: 'pending' | 'verified' | 'rejected';
}