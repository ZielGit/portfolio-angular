import { TestBed } from '@angular/core/testing';

import { CvGenerator } from './cv-generator';

describe('CvGenerator', () => {
  let service: CvGenerator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CvGenerator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
