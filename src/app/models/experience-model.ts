export interface ExperienceModel {
  readonly id: string;
  readonly company: string;
  readonly positionKey: string;
  readonly place: string;
  readonly startDate: Date;
  readonly endDate: Date | null;
  readonly functionKeys: readonly string[];
}

export interface ExperienceSortOptions {
  readonly sortBy?: 'startDate' | 'endDate';
  readonly order?: 'asc' | 'desc';
}

export type SortField = 'startDate' | 'endDate';
