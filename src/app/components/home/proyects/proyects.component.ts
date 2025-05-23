import { Component, ElementRef, OnInit, inject, viewChild } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
  imports: [CarouselModule, TranslateModule]
})
export class ProyectsComponent implements OnInit {
  analyticsService = inject(AnalyticsService);

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 700,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  readonly imgContainer = viewChild<ElementRef>('imgContainer');

  ngOnInit(): void { }

  debug() {
    this.imgContainer().nativeElement.scroll({
      top: this.imgContainer().nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
}
