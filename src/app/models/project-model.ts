export type ProjectVisibility = 'public' | 'private';

export interface Project {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly technologies: readonly string[];
  readonly images: readonly string[];
  readonly demoUrl?: string;
  readonly githubUrl?: string;
  readonly visibility: ProjectVisibility;
  readonly featured?: boolean;
  readonly startDate?: Date;
  readonly endDate?: Date | null;
}

export interface ProjectSortOptions {
  readonly sortBy?: 'startDate' | 'endDate';
  readonly order?: 'asc' | 'desc';
}

export type ProjectSortField = 'startDate' | 'endDate';
