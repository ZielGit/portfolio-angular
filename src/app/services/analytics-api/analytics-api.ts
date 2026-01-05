import { inject, Injectable } from '@angular/core';
import { GoogleAnalyticsService } from '@hakimio/ngx-google-analytics';

@Injectable({
  providedIn: 'root',
})
export class AnalyticsApi {
  private gaService = inject(GoogleAnalyticsService);

  sendAnalyticEvent(action: string, category: string, label) {
    this.gaService.event(action, { category, label });
  }

  sendAnalyticPageView(path: string, title: string) {
    this.gaService.pageView(path, { title });
  }
}
