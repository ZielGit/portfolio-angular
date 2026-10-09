import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CertificateData } from '../../services/certificate-data/certificate-data';

@Component({
  selector: 'app-certificate',
  imports: [DatePipe],
  templateUrl: './certificate.html',
  styleUrl: './certificate.scss',
})
export class Certificate {
  private readonly certificateData = inject(CertificateData);

  readonly certificates = this.certificateData.certificates;
}
