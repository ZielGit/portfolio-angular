import { TestBed } from '@angular/core/testing';

import { provideTranslateService } from '@ngx-translate/core';
import { PersonalData } from './personal-data';

describe('PersonalData', () => {
  let service: PersonalData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideTranslateService({
          defaultLanguage: 'es-PE',
        }),
      ],
    });
    service = TestBed.inject(PersonalData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
