import { computed } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { provideTranslateService, TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { PersonalData } from './personal-data';

describe('PersonalData', () => {
  let service: PersonalData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideTranslateService({
          defaultLanguage: 'es-PE',
        }),
      ],
    });
    service = TestBed.inject(PersonalData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('PersonalData reactivity to translation loading', () => {
  it('re-evaluates a computed built on formatRoles() once ngx-translate finishes loading', () => {
    const onLangChange = new Subject<unknown>();
    let loaded = false;
    const translations: Record<string, string> = {
      'aboutMe.roles.developer': 'Desarrollador',
      'aboutMe.roles.devops': 'Ingeniero DevOps',
      'aboutMe.roles.qa': 'Automatizador QA',
      'aboutMe.rolesSeparator': ', ',
      'aboutMe.rolesLastSeparator': ' y ',
    };
    const fakeTranslateService = {
      onLangChange: onLangChange.asObservable(),
      instant: (key: string) => (loaded ? (translations[key] ?? key) : key),
    };

    TestBed.configureTestingModule({
      providers: [{ provide: TranslateService, useValue: fakeTranslateService }],
    });

    const service = TestBed.inject(PersonalData);
    const rolesComputed = TestBed.runInInjectionContext(() => computed(() => service.formatRoles()));

    // Antes de que ngx-translate cargue el idioma, instant() devuelve las claves crudas
    expect(rolesComputed()).toContain('aboutMe.rolesSeparator');

    // ngx-translate termina de cargar el idioma (evento que antes no invalidaba el computed)
    loaded = true;
    onLangChange.next({ lang: 'es-PE', translations: {} });

    expect(rolesComputed()).toBe(
      "<span class='underline'>Desarrollador</span>, <span class='underline'>Ingeniero DevOps</span> y <span class='underline'>Automatizador QA</span>"
    );
  });
});
