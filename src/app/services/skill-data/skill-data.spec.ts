import { TestBed } from '@angular/core/testing';

import { SkillData } from './skill-data';

describe('SkillData', () => {
  let service: SkillData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
