import { computed, Injectable, signal } from '@angular/core';
import { SKILL_CATEGORY_CONFIGS, SkillCategory, SkillGroup, SkillModel } from '../../models/skill-model';

@Injectable({
  providedIn: 'root',
})
export class SkillData {
  private readonly skillsData = signal<readonly SkillModel[]>([
    { name: 'PHP', category: 'programming-language', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'C#', category: 'programming-language', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'Python', category: 'programming-language', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'Java', category: 'programming-language', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'JavaScript', category: 'programming-language', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'TypeScript', category: 'programming-language', levelKey: 'skills.level.advanced', yearsOfExperience: 5 },
    { name: 'SQL', category: 'programming-language', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'jQuery', category: 'frontend', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'Angular', category: 'frontend', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'Vue.js', category: 'frontend', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'React.js', category: 'frontend', levelKey: 'skills.level.beginner', yearsOfExperience: 2 },
    { name: 'HTML5', category: 'frontend', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'CSS3', category: 'frontend', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'Bootstrap', category: 'frontend', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'Tailwind CSS', category: 'frontend', levelKey: 'skills.level.advanced', yearsOfExperience: 5 },
    { name: 'Material UI', category: 'frontend', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'Laravel', category: 'backend', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: '.NET', category: 'backend', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'Django', category: 'backend', levelKey: 'skills.level.intermediate', yearsOfExperience: 4 },
    { name: 'FastAPI', category: 'backend', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'Flask', category: 'backend', levelKey: 'skills.level.beginner', yearsOfExperience: 2 },
    { name: 'Node.js', category: 'backend', levelKey: 'skills.level.advanced', yearsOfExperience: 5 },
    { name: 'Spring', category: 'backend', levelKey: 'skills.level.beginner', yearsOfExperience: 1 },
    { name: 'MySQL', category: 'database', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'SQL Server', category: 'database', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'PostgreSQL', category: 'database', levelKey: 'skills.level.expert', yearsOfExperience: 5 },
    { name: 'Oracle SQL', category: 'database', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'MongoDB', category: 'database', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'Firebase', category: 'database', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'Redis', category: 'database', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'AWS', category: 'cloud', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'Azure', category: 'cloud', levelKey: 'skills.level.beginner', yearsOfExperience: 2 },
    { name: 'Google Cloud', category: 'cloud', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'Digital Ocean', category: 'cloud', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'Docker', category: 'devops', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'GitHub Actions', category: 'devops', levelKey: 'skills.level.expert', yearsOfExperience: 5 },
    { name: 'GitLab CI/CD', category: 'devops', levelKey: 'skills.level.beginner', yearsOfExperience: 2 },
    { name: 'Linux', category: 'devops', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'Clean Architecture', category: 'architecture', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    {
      name: 'Hexagonal Architecture',
      category: 'architecture',
      levelKey: 'skills.level.advanced',
      yearsOfExperience: 4,
    },
    { name: 'Microservices', category: 'architecture', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'SOLID', category: 'architecture', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'DDD', category: 'architecture', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'PHPUnit', category: 'testing', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'Jest', category: 'testing', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'Vitest', category: 'testing', levelKey: 'skills.level.intermediate', yearsOfExperience: 3 },
    { name: 'Pytest', category: 'testing', levelKey: 'skills.level.beginner', yearsOfExperience: 2 },
    { name: 'xUnit', category: 'testing', levelKey: 'skills.level.beginner', yearsOfExperience: 2 },
    { name: 'Jira', category: 'tool', levelKey: 'skills.level.expert', yearsOfExperience: 5 },
    { name: 'Git', category: 'tool', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'GitHub', category: 'tool', levelKey: 'skills.level.expert', yearsOfExperience: 6 },
    { name: 'GitLab', category: 'tool', levelKey: 'skills.level.advanced', yearsOfExperience: 4 },
    { name: 'Postman', category: 'tool', levelKey: 'skills.level.expert', yearsOfExperience: 5 },
  ]);

  private readonly categoryOrder: readonly SkillCategory[] = [
    'programming-language',
    'frontend',
    'backend',
    'database',
    'cloud',
    'devops',
    'architecture',
    'testing',
    'tool',
    'methodology',
    'spoken-language',
  ];

  readonly skills = computed(() => this.skillsData());

  readonly skillGroups = computed(() => this.groupByCategory(this.skillsData()));

  private groupByCategory(skills: readonly SkillModel[]): readonly SkillGroup[] {
    return this.categoryOrder
      .map(category => ({
        category,
        labelKey: SKILL_CATEGORY_CONFIGS[category].labelKey,
        skills: skills.filter(skill => skill.category === category),
      }))
      .filter(group => group.skills.length > 0);
  }
}
