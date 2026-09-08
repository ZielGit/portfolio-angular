import { TestBed } from '@angular/core/testing';

import { CertificateData } from './certificate-data';

describe('CertificateData', () => {
  let service: CertificateData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificateData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
