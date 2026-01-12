import { Location } from '@angular/common';
import { inject, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  translateService = inject(TranslateService);
  private location = inject(Location);
  private router = inject(Router);
  private injector = inject(Injector);

  language: 'es' | 'en' | 'pt_BR' = 'es';

  private readonly validLanguages = ['en', 'es', 'pt_BR'] as const;

  // Map de idiomas a locales de Angular
  private readonly languageToLocale: Record<'es' | 'en' | 'pt_BR', string> = {
    es: 'es',
    en: 'en',
    pt_BR: 'pt-BR',
  };

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
      // Si no hay idioma en la URL, detectar del navegador o localStorage
      language = this.detectLanguage();

      // Construir nueva ruta con idioma
      const restOfPath = urlSegments.join('/');
      const newPath = restOfPath ? `/${language}/${restOfPath}` : `/${language}`;
      this.location.go(newPath);
    }

    this.setLanguage(language);
  }

  changeLanguage(language: 'es' | 'en' | 'pt_BR') {
    if (!this.isValidLanguage(language)) {
      console.error(`Idioma no válido: ${language}`);
      return;
    }

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

    // Establecer el idioma y guardar
    this.setLanguage(language);

    // Navegar a la nueva ruta
    this.router.navigateByUrl(newPath);
  }

  /**
   * Establece el idioma en todos los sistemas necesarios
   */
  private setLanguage(language: 'es' | 'en' | 'pt_BR') {
    // 1. Establecer en ngx-translate
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);

    // 2. Guardar en localStorage
    localStorage.setItem('language', language);

    // 3. Actualizar propiedad del servicio
    this.language = language;

    // 4. IMPORTANTE: Forzar recarga para que LOCALE_ID se actualice
    // En una SPA, necesitamos recargar la página para que el LOCALE_ID cambie
    // O usar una solución más avanzada con componentes dinámicos

    console.log(`✅ Idioma cambiado a: ${language}`);
  }

  private isValidLanguage(lang: string): lang is 'es' | 'en' | 'pt_BR' {
    return (this.validLanguages as readonly string[]).includes(lang);
  }

  private detectLanguage(): 'es' | 'en' | 'pt_BR' {
    // Primero intentar desde localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang && this.isValidLanguage(savedLang)) {
      return savedLang as 'es' | 'en' | 'pt_BR';
    }

    // Si no, detectar del navegador
    return this.detectBrowserLanguage();
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

  getCurrentLocale(): string {
    return this.languageToLocale[this.language];
  }
}
