export interface Proposal {
  title: string;
  description: string;
}

export interface Consultation {
  id: string;
  userId: string;
  expertId: string;
  expertName: string;
  title: string;
  field: string;
  mainProposals: Proposal[];
  additionalProposals: Proposal[];
  status: string;
  createdAt: string;
}
