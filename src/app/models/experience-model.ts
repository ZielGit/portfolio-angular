export interface ExperienceModel {
  id: string;
  company: string;
  positionKey: string;
  place: string;
  startDate: Date;
  endDate: Date | null;
  functionKeys: readonly string[];
}
