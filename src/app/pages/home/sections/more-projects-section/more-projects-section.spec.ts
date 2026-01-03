import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProjectsSection } from './more-projects-section';

describe('MoreProjectsSection', () => {
  let component: MoreProjectsSection;
  let fixture: ComponentFixture<MoreProjectsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreProjectsSection],
    }).compileComponents();

    fixture = TestBed.createComponent(MoreProjectsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
