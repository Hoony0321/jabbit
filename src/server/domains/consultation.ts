export interface Proposal {
  title: string;
  description: string;
}

export interface Mission {
  title: string;
  contents: string[];
  methods: string[];
}

export interface Profits {
  today: string;
  weekly: string;
  monthly: string;
  yearly: string;
}

export interface ProfitInfo {
  title: string;
  contents: string[];
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
  profits: Profits;
  profitInfo: ProfitInfo;
  weeklyMissions: Mission[];
}
