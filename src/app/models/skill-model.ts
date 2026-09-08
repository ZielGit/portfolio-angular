export type SkillCategory =
  | 'programming-language'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'cloud'
  | 'devops'
  | 'architecture'
  | 'testing'
  | 'tool'
  | 'spoken-language'
  | 'methodology';

export interface SkillCategoryConfig {
  readonly labelKey: string;
}

export const SKILL_CATEGORY_CONFIGS: Record<SkillCategory, SkillCategoryConfig> = {
  'programming-language': { labelKey: 'technicalSkills.categories.programming-language' },
  frontend: { labelKey: 'technicalSkills.categories.frontend' },
  backend: { labelKey: 'technicalSkills.categories.backend' },
  database: { labelKey: 'technicalSkills.categories.database' },
  cloud: { labelKey: 'technicalSkills.categories.cloud' },
  devops: { labelKey: 'technicalSkills.categories.devops' },
  architecture: { labelKey: 'technicalSkills.categories.architecture' },
  testing: { labelKey: 'technicalSkills.categories.testing' },
  tool: { labelKey: 'technicalSkills.categories.tool' },
  'spoken-language': { labelKey: 'technicalSkills.categories.spoken-language' },
  methodology: { labelKey: 'technicalSkills.categories.methodology' },
};

export interface SkillModel {
  readonly name: string;
  readonly category: SkillCategory;
  readonly levelKey?: string;
  readonly yearsOfExperience?: number;
  readonly featured?: boolean;
}

export interface SkillGroup {
  readonly category: SkillCategory;
  readonly labelKey: string;
  readonly skills: readonly SkillModel[];
}

export interface SkillSet {
  readonly groups: readonly SkillGroup[];
}
