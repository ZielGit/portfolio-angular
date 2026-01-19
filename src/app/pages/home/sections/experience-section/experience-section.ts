import { Component, computed, inject, signal } from '@angular/core';
import {
  NgbNav,
  NgbNavContent,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from '@ngx-translate/core';
import { ExperienceModel } from '../../../../models/experience-model';
import { CapitalizePipe } from '../../../../pipes/capitalize/capitalize-pipe';
import { LocalizedDatePipe } from '../../../../pipes/localized-date/localized-date-pipe';
import { ExperienceData } from '../../../../services/experience-data/experience-data';

@Component({
  selector: 'app-experience-section',
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet,
    TranslatePipe,
    LocalizedDatePipe,
    CapitalizePipe,
  ],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSection {
  private readonly experienceData = inject(ExperienceData);

  readonly activeTabIndex = signal<number>(0);
  readonly experiences = this.experienceData.experiences;
  readonly totalExperiences = computed(() => this.experiences().length);

  selectTab(index: number): void {
    if (index >= 0 && index < this.totalExperiences()) {
      this.activeTabIndex.set(index);
    }
  }

  trackByExperienceId(_index: number, experience: ExperienceModel): string {
    return experience.id;
  }
}
