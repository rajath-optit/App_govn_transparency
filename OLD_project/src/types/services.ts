export interface Program {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  benefits: string[];
  eligibilityCriteria: string[];
}

export interface EligibilityResult {
  eligible: boolean;
  requirements?: string[];
  missingDocuments?: string[];
  nextSteps?: string[];
}

export interface ServiceApplication {
  id: string;
  programId: string;
  userId: string;
  status: 'pending' | 'approved' | 'rejected';
  submissionDate: string;
  documents: string[];
}