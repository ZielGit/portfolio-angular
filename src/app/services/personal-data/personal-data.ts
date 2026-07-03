import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AboutMe } from '../../models/about-me-model';
import { PersonalInfoModel } from '../../models/personal-info-model';
import { ProfessionalSummaryModel } from '../../models/professional-summary-model';
import { SocialLinksModel, SocialPlatform } from '../../models/social-links-model';

@Injectable({
  providedIn: 'root',
})
export class PersonalData {
  private translateService = inject(TranslateService);

  private readonly basicInfo = signal<PersonalInfoModel>({
    firstName: 'Frans J.',
    lastName: 'Vilcahuamán Rojas',
    fullName: 'Frans J. Vilcahuamán Rojas',
    title: 'title',
    email: 'frans_421_12@hotmail.com',
    phone: '+51 989 606 114',
    location: 'Lima, Perú',
  });

  private readonly socialLinks = signal<SocialLinksModel>({
    linkedin: 'https://www.linkedin.com/in/frans-vilcahuaman/',
    github: 'https://github.com/ZielGit',
    portfolio: 'https://zielgit.github.io/portfolio-angular/',
  });

  private readonly professionalSummary = signal<ProfessionalSummaryModel>({
    summaryKey: 'professionalSummary.summary',
    yearsOfExperience: 6,
    mainSkills: ['Laravel', 'Angular', 'MySQL', 'AWS'],
    level: 'Senior',
  });

  private readonly aboutMe = signal<AboutMe>({
    paragraphKeys: ['aboutMe.paragraphs.0', 'aboutMe.paragraphs.1', 'aboutMe.paragraphs.2', 'aboutMe.paragraphs.3'],
    roles: ['aboutMe.roles.developer', 'aboutMe.roles.devops', 'aboutMe.roles.qa'],
    profileImage: '/images/me.jpg',
    profileImageAlt: 'Frans Vilcahuamán',
  });

  // Computed properties públicos
  readonly basic = computed(() => this.basicInfo());
  readonly social = computed(() => this.socialLinks());
  readonly summary = computed(() => this.professionalSummary());
  readonly about = computed(() => this.aboutMe());
  readonly mailtoLink = computed(() => `mailto:${this.basic().email}`);
  readonly telLink = computed(() => `tel:${this.basic().phone.replace(/\s/g, '')}`);
  readonly yearsOfExperience = computed(() => this.summary().yearsOfExperience);

  readonly translatedSummary = computed(() => {
    const summaryKey = this.summary().summaryKey;
    const level = this.summary().level;
    const years = this.summary().yearsOfExperience;
    const mainSkills = this.formatMainSkills();

    return this.translateService.instant(summaryKey, {
      level,
      years,
      mainSkills,
    });
  });

  formatMainSkills(): string {
    const mainSkills = this.summary().mainSkills;

    if (mainSkills.length === 0) return '';
    if (mainSkills.length === 1) return mainSkills[0];

    const separator = this.translateService.instant('professionalSummary.mainSkillsSeparator');
    const lastSeparator = this.translateService.instant('professionalSummary.mainSkillsLastSeparator');

    const allButLast = mainSkills.slice(0, -1).join(separator);
    const last = mainSkills[mainSkills.length - 1];

    return `${allButLast}${lastSeparator}${last}`;
  }

  formatRoles(): string {
    const roles = this.about().roles.map(key => this.translateService.instant(key));

    if (roles.length === 0) return '';
    if (roles.length === 1) return roles[0];

    const separator = this.translateService.instant('aboutMe.rolesSeparator');
    const lastSeparator = this.translateService.instant('aboutMe.rolesLastSeparator');

    const allButLast = roles.slice(0, -1).join(separator);
    const last = roles[roles.length - 1];

    return `${allButLast}${lastSeparator}${last}`;
  }

  // Métodos públicos
  getSocialLink(platform: SocialPlatform): string | undefined {
    return this.social()[platform];
  }

  getCompleteInfo() {
    return {
      ...this.basic(),
      social: this.social(),
      summary: this.translatedSummary(),
    };
  }
}
