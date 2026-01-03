import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
  animations: [
    trigger('archiveAnimation', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(100%)' }),
          stagger(15, [animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))]),
        ]),
      ]),
    ]),
  ],
})
export class Project implements AfterViewInit {
  public state = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.state = true;
    }, 1);
  }
}
