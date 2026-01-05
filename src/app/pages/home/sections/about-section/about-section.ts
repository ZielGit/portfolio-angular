import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsApi } from 'src/app/services/analytics-api/analytics-api';

@Component({
  selector: 'app-about-section',
  imports: [TranslatePipe],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  analyticsApi = inject(AnalyticsApi);
}
