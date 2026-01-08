import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsApi } from 'src/app/services/analytics-api/analytics-api';

@Component({
  selector: 'app-banner-section',
  imports: [TranslatePipe],
  templateUrl: './banner-section.html',
  styleUrl: './banner-section.scss',
})
export class BannerSection {
  analyticsApi = inject(AnalyticsApi);
}
