export interface Benefit {
  id: string;
  userId: string;
  type: 'tax' | 'business' | 'social';
  status: 'pending' | 'approved' | 'rejected';
  amount: number;
  claimDate: string;
  documents: Document[];
  category: string;
}

export interface Eligibility {
  benefitType: string;
  isEligible: boolean;
  requirements: string[];
  missingDocuments: string[];
}
