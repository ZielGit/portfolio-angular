import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { LanguageService } from 'src/app/services/language/language.service';
import { FooterComponent } from './components/general/footer/footer.component';
import { HeaderComponent } from './components/general/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private languageService = inject(LanguageService);

  ngOnInit(): void {
    this.languageService.initLanguage();
    this.titleService.setTitle('Frans Vilcahuamán | Full Stack Developer');
    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, backend, software, developer' },
      {
        name: 'description',
        content:
          'Con 5 años de experiencia desarrollando sistemas para hacer de la web un lugar mejor. En mi trabajo me gusta liderar, proponer y ejecutar ideas, escribir y refactorizar código limpio, reutilizable y escalable.',
      },
    ]);
    AOS.init();
  }
}
