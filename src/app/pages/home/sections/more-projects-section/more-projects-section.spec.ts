import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideTranslateService } from '@ngx-translate/core';
import { MoreProjectsSection } from './more-projects-section';

describe('MoreProjectsSection', () => {
  let component: MoreProjectsSection;
  let fixture: ComponentFixture<MoreProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreProjectsSection],
      providers: [
        provideTranslateService({
          defaultLanguage: 'es-PE',
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreProjectsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
