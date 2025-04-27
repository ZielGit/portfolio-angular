import { Component, OnInit, inject } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from "src/app/services/language/language.service";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/general/header/header.component';
import { FooterComponent } from './components/general/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit{
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private languageService = inject(LanguageService);

  ngOnInit(): void{
    this.languageService.initLanguage()
    this.titleService.setTitle( "Frans Vilcahuamán | Full Stack Developer" );
    this.metaService.addTags([
      {name: 'keywords', content: 'Frontend, backend, software, developer'},
      {name: 'description', content: 'Con 5 años de experiencia desarrollando sistemas para hacer de la web un lugar mejor. En mi trabajo me gusta liderar, proponer y ejecutar ideas, escribir y refactorizar código limpio, reutilizable y escalable.'},
    ]);
    AOS.init(); 
  }
}
