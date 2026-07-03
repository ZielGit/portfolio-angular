import { Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsApi } from '../../../../services/analytics-api/analytics-api';
import { PersonalData } from '../../../../services/personal-data/personal-data';

@Component({
  selector: 'app-about-section',
  imports: [TranslatePipe],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  analyticsApi = inject(AnalyticsApi);
  private personalData = inject(PersonalData);

  readonly paragraphKeys = computed(() => this.personalData.about().paragraphKeys);
  readonly paragraphParams = computed(() => ({
    years: this.personalData.yearsOfExperience(),
    roles: this.personalData.formatRoles(),
  }));
  readonly profileImage = this.personalData.about().profileImage;
  readonly profileImageAlt = this.personalData.about().profileImageAlt;
}
