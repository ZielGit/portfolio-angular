import { TestBed } from '@angular/core/testing';

import { EducationData } from './education-data';

describe('EducationData', () => {
  let service: EducationData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
