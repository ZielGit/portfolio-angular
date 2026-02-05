import { TestBed } from '@angular/core/testing';

import { provideTranslateService } from '@ngx-translate/core';
import { CvGenerator } from './cv-generator';

describe('CvGenerator', () => {
  let service: CvGenerator;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideTranslateService({
          defaultLanguage: 'es-PE',
        }),
      ],
    });
    service = TestBed.inject(CvGenerator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
