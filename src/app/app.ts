import { Component, OnInit, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';
import { LanguageStore } from './services/language-store/language-store';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);
  private languageStore = inject(LanguageStore);

  ngOnInit(): void {
    this.languageStore.initLanguage();
    this.title.setTitle('Frans Vilcahuamán | Full Stack Developer');
    this.meta.addTags([
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
