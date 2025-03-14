export interface Consultation {
  id: string;
  userId: string;
  expertId: string;
  expertName: string;
  title: string;
  field: string;
  mainProposals: string[];
  additionalProposals: string[];
  status: string;
  createdAt: string;
}
