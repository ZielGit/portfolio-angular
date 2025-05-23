import { Component, OnInit, inject } from '@angular/core';

import { trigger, style, animate, transition, stagger, query } from "@angular/animations";
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('bannerTrigger', [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateX(-50px)" }),
          stagger(50, [
            animate("250ms cubic-bezier(0.35, 0, 0.25, 1)", style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ],
  imports: [TranslateModule]
})
export class BannerComponent implements OnInit {
  analyticsService = inject(AnalyticsService);

  ngOnInit(): void { }
}
