import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  animations: [
    trigger('animateFooter', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(100%)' }),
          stagger(50, [animate('250ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))]),
        ]),
      ]),
    ]),
  ],
})
export class Footer implements OnInit {
  analyticsService = inject(AnalyticsService);

  ngOnInit(): void {}
}
