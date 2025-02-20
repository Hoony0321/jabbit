import { Expert } from '@/src/server/domains/expert';

export class ExpertSimpleDto {
  id: string;
  name: string;
  isVerified: boolean;
  specialties: string[];
  profileImageUrl: string | undefined;

  constructor(expert: Expert) {
    this.id = expert.id;
    this.name = expert.name;
    this.isVerified = expert.isVerified;
    this.specialties = expert.specialties;
    this.profileImageUrl = expert.profileImageUrl;
  }
}
