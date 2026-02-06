import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsApi } from '../../../../services/analytics-api/analytics-api';
import { PersonalData } from '../../../../services/personal-data/personal-data';

@Component({
  selector: 'app-banner-section',
  imports: [TranslatePipe],
  templateUrl: './banner-section.html',
  styleUrl: './banner-section.scss',
})
export class BannerSection {
  analyticsApi = inject(AnalyticsApi);
  private personalData = inject(PersonalData);

  readonly fullName = computed(() => this.personalData.basic().fullName);
  readonly title = computed(() => this.personalData.basic().title);
  readonly summaryKey = computed(() => this.personalData.summary().summaryKey);
  readonly summaryParams = computed(() => ({
    level: this.personalData.summary().level,
    years: this.personalData.summary().yearsOfExperience,
    mainSkills: this.personalData.formatMainSkills(),
  }));
}
