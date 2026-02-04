export interface ProfessionalSummaryModel {
  readonly summaryKey: string;
  readonly yearsOfExperience: number;
  readonly mainSkills: readonly string[];
  readonly level?: 'Junior' | 'Mid-level' | 'Senior' | 'Lead' | 'Principal';
}
