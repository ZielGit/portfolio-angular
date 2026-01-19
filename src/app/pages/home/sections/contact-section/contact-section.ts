import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsApi } from '../../../../services/analytics-api/analytics-api';

@Component({
  selector: 'app-contact-section',
  imports: [TranslatePipe],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
})
export class ContactSection {
  analyticsApi = inject(AnalyticsApi);
}
