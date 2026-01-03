import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-projects-section',
  imports: [TranslatePipe],
  templateUrl: './more-projects-section.html',
  styleUrl: './more-projects-section.scss',
})
export class MoreProjectsSection implements OnInit {
  private router = inject(Router);
  analyticsService = inject(AnalyticsService);

  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  redirect(route: string, event) {
    const id = event.target.id;
    if (id == 'demoLink' || id == 'ghLink') {
      return;
    }
    window.open(route, '_blank');
  }
}
