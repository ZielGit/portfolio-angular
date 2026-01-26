import { TestBed } from '@angular/core/testing';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE, LANGUAGE_CONFIGS } from '../../models/language-model';
import { LanguageStore } from './language-store';

class TranslateServiceMock {
  addLangs = vi.fn();
  setDefaultLang = vi.fn();
  use = vi.fn();
}

class LocationMock {
  private _path = '';

  path() {
    return this._path;
  }

  go(path: string) {
    this._path = path;
  }

  setPath(path: string) {
    this._path = path;
  }
}

class RouterMock {
  navigateByUrl = vi.fn();
}

describe('LanguageStore', () => {
  let service: LanguageStore;
  let translate: TranslateServiceMock;
  let location: LocationMock;
  let router: RouterMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LanguageStore,
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: Location, useClass: LocationMock },
        { provide: Router, useClass: RouterMock },
      ],
    });

    service = TestBed.inject(LanguageStore);
    translate = TestBed.inject(TranslateService) as unknown as TranslateServiceMock;
    location = TestBed.inject(Location) as unknown as LocationMock;
    router = TestBed.inject(Router) as unknown as RouterMock;

    localStorage.clear();
    document.documentElement.lang = '';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with default language', () => {
    expect(service.language()).toBe(DEFAULT_LANGUAGE);
  });

  /* -------------------------------------------------------------------------- */
  /*                               initLanguage                                 */
  /* -------------------------------------------------------------------------- */

  it('should use language from URL if valid', () => {
    location.setPath('/es-PE/projects');

    service.initLanguage();

    expect(service.language()).toBe('es-PE');
    expect(translate.use).toHaveBeenCalledWith('es-PE');
    expect(document.documentElement.lang).toBe('es-PE');
  });

  it('should detect language and rewrite URL when URL has no language', () => {
    location.setPath('/');

    service.initLanguage();

    expect(service.language()).toBeDefined();
    expect(location.path()).toMatch(/^\/(es-PE|en-US)/);
  });

  it('should detect language from localStorage first', () => {
    localStorage.setItem('language', 'en-US');
    location.setPath('/');

    service.initLanguage();

    expect(service.language()).toBe('en-US');
    expect(translate.use).toHaveBeenCalledWith('en-US');
  });

  /* -------------------------------------------------------------------------- */
  /*                              changeLanguage                                 */
  /* -------------------------------------------------------------------------- */

  it('should change language and navigate to new URL', () => {
    location.setPath('/es-PE/projects');

    service.changeLanguage('en-US');

    expect(service.language()).toBe('en-US');
    expect(router.navigateByUrl).toHaveBeenCalledWith('/en-US/projects');
    expect(localStorage.getItem('language')).toBe('en-US');
    expect(document.documentElement.lang).toBe('en-US');
  });

  it('should not change language if invalid language is provided', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const invalidLang = 'xx' as unknown as Parameters<LanguageStore['changeLanguage']>[0];
    service.changeLanguage(invalidLang);

    expect(spy).toHaveBeenCalled();
    expect(router.navigateByUrl).not.toHaveBeenCalled();

    spy.mockRestore();
  });

  /* -------------------------------------------------------------------------- */
  /*                            getters y helpers                                */
  /* -------------------------------------------------------------------------- */

  it('should return current language config', () => {
    service['language'].set('es-PE');

    const config = service.getCurrentLanguageConfig();

    expect(config).toEqual(LANGUAGE_CONFIGS['es-PE']);
  });

  it('should return available languages', () => {
    const languages = service.getAvailableLanguages();

    expect(languages.length).toBeGreaterThan(0);
  });

  it('should detect different language correctly', () => {
    service['language'].set('es-PE');

    expect(service.isDifferentLanguage('en-US')).toBe(true);
    expect(service.isDifferentLanguage('es-PE')).toBe(false);
  });
});
