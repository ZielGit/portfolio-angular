import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [TranslateModule]
})
export class ContactComponent implements OnInit {
  analyticsService = inject(AnalyticsService);

  ngOnInit(): void { }
}
