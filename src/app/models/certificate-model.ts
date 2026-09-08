export interface CertificateModel {
  id: string;
  name: string;
  issuingOrganization: string;
  issueDate: Date;
  expirationDate?: Date | null;
  credentialUrl?: string;
  skills: string[];
  featured: boolean;
  instructionLanguage: string;
}
