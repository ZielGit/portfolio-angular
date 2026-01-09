import { Component, inject } from '@angular/core';
import { AnalyticsApi } from 'src/app/services/analytics-api/analytics-api';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  analyticsApi = inject(AnalyticsApi);
}
