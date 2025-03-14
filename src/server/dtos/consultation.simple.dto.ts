import { Consultation } from '@/src/server/domains/consultation';

export class ConsultationSimpleDto {
  id: string;
  userId: string;
  expertId: string;
  expertName: string;
  title: string;
  field: string;
  status: string;
  createdAt: string;

  constructor(consultation: Consultation) {
    this.id = consultation.id;
    this.userId = consultation.userId;
    this.expertId = consultation.expertId;
    this.expertName = consultation.expertName;
    this.title = consultation.title;
    this.field = consultation.field;
    this.status = consultation.status;
    this.createdAt = consultation.createdAt;
  }
}
