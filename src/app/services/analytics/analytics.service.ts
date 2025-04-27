import { Injectable, inject } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private $gaService = inject(GoogleAnalyticsService);

  sendAnalyticEvent(action: string, category: string, label){
    this.$gaService.event(action, category, label)
  }

  sendAnalyticPageView(path: string, title: string){
    this.$gaService.pageView(path, title)
  }
}
