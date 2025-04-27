import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [TranslateModule]
})
export class AboutComponent implements OnInit {
  analyticsService = inject(AnalyticsService);

  ngOnInit(): void { }
}
