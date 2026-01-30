import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';
import { computed, EventEmitter, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { ExperienceData } from '../../../../services/experience-data/experience-data';
import { LanguageStore } from '../../../../services/language-store/language-store';
import { ExperienceSection } from './experience-section';

registerLocaleData(localeEsPe, 'es-PE');

const translateServiceMock: Partial<TranslateService> = {
  instant: (key: string): string | unknown[] => {
    if (key === 'experience.title') {
      return 'Experiencia';
    }
    return key;
  },
  get: (key: string): Observable<string | unknown[]> => {
    const value = translateServiceMock.instant?.(key) ?? key;
    return of(value);
  },
  use: vi.fn().mockReturnValue(of('es-PE')),
  setDefaultLang: vi.fn(),
  addLangs: vi.fn(),
  currentLang: 'es-PE',
  onLangChange: new EventEmitter(),
  onTranslationChange: new EventEmitter(),
  onDefaultLangChange: new EventEmitter(),
};

const languageStoreMock: Partial<LanguageStore> = {
  language: signal('es-PE'),
};

const testExperiences = [
  {
    id: 'test-1',
    company: 'Test Company',
    positionKey: 'test.position',
    place: 'Test Place',
    startDate: new Date(2020, 0),
    endDate: new Date(2021, 0),
    functionKeys: ['test.function'],
  },
] as const;

const experienceDataMock: Partial<ExperienceData> = {
  experiences: computed(() => testExperiences),
};

describe('ExperienceSection', () => {
  let component: ExperienceSection;
  let fixture: ComponentFixture<ExperienceSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceSection],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: LanguageStore, useValue: languageStoreMock },
        { provide: ExperienceData, useValue: experienceDataMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
