import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { JobsComponent } from './jobs/jobs.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { MoreProyectsComponent } from './more-proyects/more-proyects.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [BannerComponent, AboutComponent, JobsComponent, ProyectsComponent, MoreProyectsComponent, ContactComponent]
})
export class HomeComponent implements OnInit {
  private analyticsService = inject(AnalyticsService);

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio")
  }
}
