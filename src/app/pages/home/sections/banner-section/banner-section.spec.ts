import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideTranslateService } from '@ngx-translate/core';
import { BannerSection } from './banner-section';

describe('BannerSection', () => {
  let component: BannerSection;
  let fixture: ComponentFixture<BannerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerSection],
      providers: [
        provideTranslateService({
          defaultLanguage: 'es-PE',
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BannerSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
