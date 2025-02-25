import { Expert } from '../domains/expert';

import { Activity, Experience } from '../domains/expert';

export class ExpertDto {
  id: string;
  name: string;
  certificates: string[];
  specialties: string[];
  experiences: Experience[];
  activities: Activity[];
  isVerified: boolean;
  profileImageUrl?: string;
  yearsOfExperience: number;

  constructor(expert: Expert) {
    this.id = expert.id;
    this.name = expert.name;
    this.certificates = expert.certificates;
    this.specialties = expert.specialties;
    this.experiences = expert.experiences;
    this.activities = expert.activities;
    this.isVerified = expert.isVerified;
    this.profileImageUrl = expert.profileImageUrl;
    this.yearsOfExperience = expert.yearsOfExperience;
  }
}
