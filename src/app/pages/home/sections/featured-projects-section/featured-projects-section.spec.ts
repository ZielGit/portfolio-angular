import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { FeaturedProjectsSection } from './featured-projects-section';

const translateServiceMock: Partial<TranslateService> = {
  instant: (key: string): string | unknown[] => {
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

describe('FeaturedProjectsSection', () => {
  let component: FeaturedProjectsSection;
  let fixture: ComponentFixture<FeaturedProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedProjectsSection],
      providers: [{ provide: TranslateService, useValue: translateServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedProjectsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
