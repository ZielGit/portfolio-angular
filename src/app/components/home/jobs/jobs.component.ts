import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  imports: [NgbNav, NgbNavItem, NgbNavItemRole, NgbNavLink, NgbNavLinkBase, NgbNavContent, NgbNavOutlet, TranslateModule]
})
export class JobsComponent implements OnInit {
  analyticsService = inject(AnalyticsService);

  active = 0

  ngOnInit(): void { }
}
