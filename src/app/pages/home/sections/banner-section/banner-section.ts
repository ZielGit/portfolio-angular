import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsApi } from 'src/app/services/analytics-api/analytics-api';

@Component({
  selector: 'app-banner-section',
  imports: [TranslatePipe],
  templateUrl: './banner-section.html',
  styleUrl: './banner-section.scss',
  animations: [
    trigger('bannerTrigger', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          stagger(50, [animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))]),
        ]),
      ]),
    ]),
  ],
})
export class BannerSection {
  analyticsApi = inject(AnalyticsApi);
}
