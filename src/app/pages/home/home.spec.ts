import { registerLocaleData } from '@angular/common';
import localeEsPe from '@angular/common/locales/es-PE';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { AnalyticsApi } from '../../services/analytics-api/analytics-api';
import { Home } from './home';

registerLocaleData(localeEsPe, 'es-PE');

const translateServiceMock: Partial<TranslateService> = {
  instant: (key: string): string | unknown[] => {
    if (key === 'experience.title') {
      return 'Experiencia';
    }
    if (key === 'FeatureProjects.Projects') {
      return [];
    }
    if (key === 'FeatureProjects.Title') {
      return 'Proyectos Destacados';
    }
    if (key === 'FeatureProjects.Label') {
      return 'Proyecto Destacado';
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

const analyticsApiMock: Partial<AnalyticsApi> = {
  sendAnalyticPageView: vi.fn(),
  sendAnalyticEvent: vi.fn(),
};

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        { provide: TranslateService, useValue: translateServiceMock },
        { provide: AnalyticsApi, useValue: analyticsApiMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
