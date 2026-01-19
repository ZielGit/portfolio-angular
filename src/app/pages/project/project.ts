import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project implements AfterViewInit {
  public state = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = true;
    }, 1);
  }
}
