import { Location } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  translateService = inject(TranslateService);
  private location = inject(Location);
  private router = inject(Router);

  language: 'es' | 'en' | 'pt_BR';

  private readonly validLanguages = ['en', 'es', 'pt_BR'] as const;

  initLanguage() {
    this.translateService.addLangs(['en', 'es', 'pt_BR']);

    // Obtener el idioma de la URL actual si existe
    const currentPath = this.location.path();
    const urlSegments = currentPath.split('/').filter(segment => segment);
    const urlLanguage = urlSegments[0];

    // Verificar si el primer segmento es un idioma válido
    let language: 'es' | 'en' | 'pt_BR';
    if (this.isValidLanguage(urlLanguage)) {
      language = urlLanguage as 'es' | 'en' | 'pt_BR';
    } else {
      // Si no hay idioma en la URL, detectar del navegador
      language = this.detectBrowserLanguage();

      // Construir nueva ruta con idioma
      const restOfPath = urlSegments.join('/');
      const newPath = restOfPath ? `/${language}/${restOfPath}` : `/${language}`;
      this.location.go(newPath);
    }

    this.translateService.setDefaultLang(language);
    this.language = language;
  }

  changeLanguage(language: 'es' | 'en' | 'pt_BR') {
    if (!this.isValidLanguage(language)) {
      console.error(`Idioma no válido: ${language}`);
      return;
    }

    this.translateService.setDefaultLang(language);

    // Obtener la ruta actual sin el idioma
    const currentPath = this.location.path();
    const urlSegments = currentPath.split('/').filter(segment => segment);

    // Remover el idioma actual (primer segmento)
    if (this.isValidLanguage(urlSegments[0])) {
      urlSegments.shift();
    }

    // Construir nueva ruta con el nuevo idioma
    const restOfPath = urlSegments.join('/');
    const newPath = restOfPath ? `/${language}/${restOfPath}` : `/${language}`;

    // Navegar a la nueva ruta
    this.router.navigateByUrl(newPath);
    this.language = language;
  }

  private isValidLanguage(lang: string): lang is 'es' | 'en' | 'pt_BR' {
    return (this.validLanguages as readonly string[]).includes(lang);
  }

  private detectBrowserLanguage(): 'es' | 'en' | 'pt_BR' {
    const browserLang = navigator.language || (navigator as Navigator & { userLanguage?: string }).userLanguage || 'en';
    const langCode = browserLang.toLowerCase();

    if (langCode.includes('es')) {
      return 'es';
    }

    if (langCode.includes('pt-br') || langCode.includes('pt_br') || langCode === 'pt') {
      return 'pt_BR';
    }

    return 'en';
  }
}
