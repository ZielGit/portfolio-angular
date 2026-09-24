export interface CertificateModel {
  readonly id: string;
  readonly name: string;
  readonly issuingOrganization: string;
  readonly issueDate: Date;
  readonly expirationDate?: Date | null;
  readonly credentialUrl?: string;
  readonly skills: string[];
  readonly featured: boolean;
  readonly instructionLanguage: string;
}
