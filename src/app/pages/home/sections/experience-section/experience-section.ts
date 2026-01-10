import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
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
import { ExperienceData } from 'src/app/services/experience-data/experience-data';

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
    DatePipe,
    TranslatePipe,
  ],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
})
export class ExperienceSection {
  private experienceData = inject(ExperienceData);

  active = 0;
  experiences = this.experienceData.getExperiences({
    sortBy: 'endDate',
    order: 'desc',
  });
}
