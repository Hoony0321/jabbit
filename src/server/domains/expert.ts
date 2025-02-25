export interface Experience {
  status: string;
  description: string;
}

export interface Activity {
  type: string;
  year: string;
  description: string;
}

export interface Expert {
  id: string;
  name: string;
  certificates: string[];
  specialties: string[];
  experiences: Experience[];
  activities: Activity[];
  isVerified: boolean;
  profileImageUrl?: string;
  yearsOfExperience: number;
}
