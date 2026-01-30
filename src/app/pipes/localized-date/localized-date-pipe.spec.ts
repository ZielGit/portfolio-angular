import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LanguageStore } from '../../services/language-store/language-store';
import { LocalizedDatePipe } from './localized-date-pipe';

describe('LocalizedDatePipe', () => {
  let pipe: LocalizedDatePipe;
  const languageStoreMock: Partial<LanguageStore> = {
    language: signal('es-PE'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LocalizedDatePipe],
      providers: [{ provide: LanguageStore, useValue: languageStoreMock }],
    });
  });

  it('create an instance', () => {
    pipe = TestBed.runInInjectionContext(() => new LocalizedDatePipe());
    expect(pipe).toBeTruthy();
  });
});
