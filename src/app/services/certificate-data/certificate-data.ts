import { computed, Injectable, signal } from '@angular/core';
import { CertificateModel } from '../../models/certificate-model';
import rawCertificates from './certificate-data.json';

type RawCertificate = Omit<CertificateModel, 'issueDate' | 'expirationDate'> & {
  issueDate: [number, number];
  expirationDate: [number, number] | null;
};

@Injectable({
  providedIn: 'root',
})
export class CertificateData {
  private readonly certificatesData = signal<readonly CertificateModel[]>(
    (rawCertificates as RawCertificate[]).map(this.mapRawCertificate)
  );

  readonly certificates = this.certificatesData;

  readonly featuredCertificates = computed(() => this.certificatesData().filter(cert => cert.featured));

  private mapRawCertificate(raw: RawCertificate): CertificateModel {
    return {
      ...raw,
      issueDate: new Date(raw.issueDate[0], raw.issueDate[1] - 1),
      expirationDate: raw.expirationDate
        ? new Date(raw.expirationDate[0], raw.expirationDate[1] - 1)
        : raw.expirationDate,
    };
  }
}
