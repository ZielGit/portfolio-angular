import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Project as ProjectModel } from '../../models/project-model';
import { ProjectData } from '../../services/project-data/project-data';

@Component({
  selector: 'app-project',
  imports: [TranslatePipe],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project implements AfterViewInit {
  private readonly projectData = inject(ProjectData);

  readonly projects = this.projectData.projects;

  readonly state = signal(false);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state.set(true);
    }, 1);
  }

  redirect(project: ProjectModel): void {
    if (!project.demoUrl) {
      return;
    }
    window.open(project.demoUrl, '_blank');
  }
}
