export interface EducationModel {
  readonly id: string;
  readonly institution: string;
  readonly degreeKey: string;
  readonly fieldOfStudyKey: string;
  readonly place: string;
  readonly startDate: Date;
  readonly endDate: Date | null;
}
