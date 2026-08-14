import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProjectData } from '../../../../services/project-data/project-data';

@Component({
  selector: 'app-featured-projects-section',
  imports: [CarouselModule, TranslatePipe],
  templateUrl: './featured-projects-section.html',
  styleUrl: './featured-projects-section.scss',
})
export class FeaturedProjectsSection {
  private readonly projectData = inject(ProjectData);

  readonly featuredProjects = this.projectData.featuredProjects;

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
}
