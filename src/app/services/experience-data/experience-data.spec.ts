import { TestBed } from '@angular/core/testing';

import { ExperienceData } from './experience-data';

describe('ExperienceData', () => {
  let service: ExperienceData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
