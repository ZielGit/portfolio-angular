import { Component, OnInit, inject } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { AboutSection } from './sections/about-section/about-section';
import { BannerSection } from './sections/banner-section/banner-section';
import { ContactSection } from './sections/contact-section/contact-section';
import { ExperienceSection } from './sections/experience-section/experience-section';
import { FeaturedProjectsSection } from './sections/featured-projects-section/featured-projects-section';
import { MoreProjectsSection } from './sections/more-projects-section/more-projects-section';

@Component({
  selector: 'app-home',
  imports: [
    AboutSection,
    BannerSection,
    ContactSection,
    FeaturedProjectsSection,
    ExperienceSection,
    MoreProjectsSection,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private analyticsService = inject(AnalyticsService);

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView('/inicio', 'Se entro a inicio');
  }
}
