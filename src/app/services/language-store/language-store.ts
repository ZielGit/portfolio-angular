import { Location } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  AppLanguage,
  AVAILABLE_LANGUAGES,
  BROWSER_LANGUAGE_MAP,
  DEFAULT_LANGUAGE,
  LANGUAGE_CONFIGS,
} from '../../models/language-model';

@Injectable({
  providedIn: 'root',
})
export class LanguageStore {
  translateService = inject(TranslateService);
  private location = inject(Location);
  private router = inject(Router);

  // language: AppLanguage = DEFAULT_LANGUAGE;
  readonly language = signal<AppLanguage>(DEFAULT_LANGUAGE);

  initLanguage(): void {
    this.translateService.addLangs(AVAILABLE_LANGUAGES as unknown as string[]);

    // Obtener el idioma de la URL actual si existe
    const currentPath = this.location.path();
    const urlSegments = currentPath.split('/').filter(segment => segment);
    const urlLanguage = urlSegments[0];

    let language: AppLanguage;

    // Verificar si el primer segmento de la URL es un idioma válido
    if (this.isValidLanguage(urlLanguage)) {
      language = urlLanguage;
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

  changeLanguage(language: AppLanguage): void {
    if (!this.isValidLanguage(language)) {
      console.error(`❌ Idioma no válido: ${language}`);
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

  getCurrentLanguageConfig() {
    return LANGUAGE_CONFIGS[this.language()];
  }

  getAvailableLanguages() {
    return Object.values(LANGUAGE_CONFIGS);
  }

  isDifferentLanguage(language: AppLanguage): boolean {
    return this.language() !== language;
  }

  /**
   * Establece el idioma en todos los sistemas necesarios
   * @private
   */
  private setLanguage(newLanguage: AppLanguage): void {
    // 1. Establecer en ngx-translate
    this.translateService.setDefaultLang(newLanguage);
    this.translateService.use(newLanguage);

    // 2. Guardar en localStorage
    localStorage.setItem('language', newLanguage);

    // 3. Actualizar propiedad del servicio
    this.language.set(newLanguage);

    // 4. Actualizar atributo lang del HTML
    document.documentElement.lang = newLanguage;

    console.log(`✅ Idioma cambiado a: ${newLanguage} (${LANGUAGE_CONFIGS[newLanguage].label})`);
  }

  /**
   * Type guard para validar si una string es un idioma válido
   * @private
   */
  private isValidLanguage(lang: string): lang is AppLanguage {
    return (AVAILABLE_LANGUAGES as readonly string[]).includes(lang);
  }

  private detectLanguage(): AppLanguage {
    // 1. Intentar desde localStorage
    const savedLang = localStorage.getItem('language');
    if (savedLang && this.isValidLanguage(savedLang)) {
      console.log(`📦 Idioma detectado desde localStorage: ${savedLang}`);
      return savedLang;
    }

    // 2. Detectar del navegador
    const browserLang = this.detectBrowserLanguage();
    console.log(`🌐 Idioma detectado desde navegador: ${browserLang}`);
    return browserLang;
  }

  private detectBrowserLanguage(): AppLanguage {
    // Obtener idiomas del navegador
    const browserLangs = [
      navigator.language,
      ...(navigator.languages || []),
      (navigator as Navigator & { userLanguage?: string }).userLanguage,
    ].filter(Boolean) as string[];

    console.log('🔍 Idiomas del navegador:', browserLangs);

    // Intentar encontrar coincidencia exacta o parcial
    for (const browserLang of browserLangs) {
      const normalized = browserLang.toLowerCase();

      // Buscar coincidencia exacta (ej: 'es-PE')
      if (BROWSER_LANGUAGE_MAP[browserLang]) {
        return BROWSER_LANGUAGE_MAP[browserLang];
      }

      // Buscar coincidencia normalizada (ej: 'es-pe' → 'es-PE')
      const exactMatch = Object.keys(BROWSER_LANGUAGE_MAP).find(key => key.toLowerCase() === normalized);
      if (exactMatch) {
        return BROWSER_LANGUAGE_MAP[exactMatch];
      }

      // Buscar por código de idioma base (ej: 'es' de 'es-CL')
      const baseCode = normalized.split('-')[0];
      if (BROWSER_LANGUAGE_MAP[baseCode]) {
        return BROWSER_LANGUAGE_MAP[baseCode];
      }
    }

    // Si no hay coincidencias, usar idioma por defecto
    console.log(`⚠️ No se encontró coincidencia, usando idioma por defecto: ${DEFAULT_LANGUAGE}`);
    return DEFAULT_LANGUAGE;
  }
}
