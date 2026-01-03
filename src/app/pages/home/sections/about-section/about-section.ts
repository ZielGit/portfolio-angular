import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about-section',
  imports: [TranslatePipe],
  templateUrl: './about-section.html',
  styleUrl: './about-section.scss',
})
export class AboutSection {
  analyticsService = inject(AnalyticsService);
}
