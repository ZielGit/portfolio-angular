import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-featured-projects-section',
  imports: [CarouselModule, TranslatePipe],
  templateUrl: './featured-projects-section.html',
  styleUrl: './featured-projects-section.scss',
})
export class FeaturedProjectsSection {
  analyticsService = inject(AnalyticsService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
  };

  readonly imgContainer = viewChild<ElementRef>('imgContainer');

  debug() {
    this.imgContainer().nativeElement.scroll({
      top: this.imgContainer().nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
