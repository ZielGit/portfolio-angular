import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import jsPDF from 'jspdf';
import { EducationModel } from '../../models/education-model';
import { ExperienceModel } from '../../models/experience-model';
import { CapitalizePipe } from '../../pipes/capitalize/capitalize-pipe';
import { LocalizedDatePipe } from '../../pipes/localized-date/localized-date-pipe';
import { EducationData } from '../education-data/education-data';
import { ExperienceData } from '../experience-data/experience-data';
import { PersonalData } from '../personal-data/personal-data';

@Injectable({
  providedIn: 'root',
})
export class CvGenerator {
  private translateService = inject(TranslateService);
  private personalData = inject(PersonalData);
  private experienceData = inject(ExperienceData);
  private educationData = inject(EducationData);
  private localizedDatePipe = new LocalizedDatePipe();
  private capitalizePipe = new CapitalizePipe();

  readonly personal = this.personalData.getCompleteInfo();
  readonly experiences = this.experienceData.experiences;
  readonly educations = this.educationData.getEducations();

  openCVInNewTab(): void {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    let yPosition = 20;

    // --- HEADER: Nombre ---
    doc.setFontSize(20);
    doc.setFont('arial', 'bold');
    doc.text(this.personal.fullName, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 8;

    // --- Contact Info ---
    doc.setFontSize(10);
    doc.setFont('arial', 'normal');
    const contactLine = `${this.personal.location} | ${this.personal.phone} | ${this.personal.email} | ${this.personal.social.linkedin}`;
    doc.text(contactLine, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 3;
    // Línea divisoria
    doc.setLineWidth(0.4);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 10;

    // --- PROFESSIONAL SUMMARY SECTION ---
    doc.setFontSize(12);
    doc.setFont('arial', 'bold');
    const summaryTitle = this.translateService.instant('professionalSummary.title');
    doc.text(summaryTitle.toUpperCase(), margin, yPosition);
    yPosition += 1;
    // Línea divisoria
    doc.setLineWidth(0.2);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 7;

    doc.setFontSize(10);
    doc.setFont('arial', 'normal');
    const summaryKey = this.personalData.summary().summaryKey;
    const level = this.personalData.summary().level;
    const years = this.personalData.summary().yearsOfExperience;
    const mainSkills = this.personalData.formatMainSkills();
    const summaryText = this.translateService.instant(summaryKey, {
      level,
      years,
      mainSkills,
    });
    const splitSummary = doc.splitTextToSize(summaryText, pageWidth - margin * 2);
    doc.text(splitSummary, margin, yPosition);
    yPosition += splitSummary.length * 5 + 2;

    // --- EXPERIENCE SECTION ---
    doc.setFontSize(12);
    doc.setFont('arial', 'bold');
    const experienceTitle = this.translateService.instant('experience.title');
    doc.text(experienceTitle.toUpperCase(), margin, yPosition);
    yPosition += 1;
    // Línea divisoria
    doc.setLineWidth(0.2);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 7;

    this.experiences().forEach((exp: ExperienceModel) => {
      // Verificar si necesitamos nueva página
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Cargo y empresa
      doc.setFontSize(11);
      doc.setFont('arial', 'bold');
      const position = this.translateService.instant(exp.positionKey);
      doc.text(position, margin, yPosition);
      const titleWidth = doc.getTextWidth(position);
      doc.setFont('arial', 'normal');
      doc.text(` — ${exp.company}`, margin + titleWidth, yPosition);
      yPosition += 6;

      // Lugar y fecha
      doc.setFontSize(10);
      doc.setFont('arial', 'normal');
      const startDate = this.formatDate(exp.startDate);
      const endDate = this.formatDate(exp.endDate, true);
      doc.text(`${exp.place} | ${startDate} - ${endDate}`, margin, yPosition);
      yPosition += 6;

      // Funciones
      doc.setFont('arial', 'normal');
      doc.setFontSize(10);

      exp.functionKeys.forEach((func: string) => {
        const funcText = this.translateService.instant(func);

        // Dividir texto largo en múltiples líneas
        const splitDesc = doc.splitTextToSize(`• ${funcText}`, pageWidth - margin * 2 - 5);
        doc.text(splitDesc, margin + 5, yPosition);
        yPosition += splitDesc.length * 5;
      });

      yPosition += 4; // Espacio entre experiencias
    });
    yPosition += 2;

    // --- EDUCATION SECTION ---
    doc.setFontSize(12);
    doc.setFont('arial', 'bold');
    const educationTitle = this.translateService.instant('education.title');
    doc.text(educationTitle.toUpperCase(), margin, yPosition);
    yPosition += 1;

    // Línea divisoria
    doc.setLineWidth(0.2);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 7;

    this.educations.forEach((edu: EducationModel) => {
      // Verificar si necesitamos nueva página
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }

      // Institución
      doc.setFontSize(11);
      doc.setFont('arial', 'bold');
      doc.text(edu.institution, margin, yPosition);
      yPosition += 5;

      // Grado y Campo de Estudio
      doc.setFontSize(10);
      doc.setFont('arial', 'normal');
      const degree = this.translateService.instant(edu.degreeKey);
      const fieldOfStudy = this.translateService.instant(edu.fieldOfStudyKey);
      doc.text(`${degree}: ${fieldOfStudy}`, margin, yPosition);
      yPosition += 5;

      // Lugar y fecha
      doc.setFontSize(10);
      doc.setFont('arial', 'normal');
      const startDate = this.formatDate(edu.startDate);
      const endDate = this.formatDate(edu.endDate, true);
      doc.text(`${edu.place} | ${startDate} - ${endDate}`, margin, yPosition);
      yPosition += 5;

      yPosition += 4; // Espacio entre educaciones
    });

    const cvName = this.translateService.instant('Header.cvName');

    // Propiedades del documento
    doc.setProperties({
      title: cvName,
      subject: 'Curriculum Vitae',
      author: this.personal.fullName,
      keywords: 'cv, resume, curriculum',
      creator: 'Portfolio Frans',
    });

    window.open(doc.output('bloburl'), '_blank');
  }

  private formatDate(date: Date | string | null, isEndDate = false): string {
    if (!date && isEndDate) {
      return this.translateService.instant('present');
    }
    if (!date) return '';

    const localized = this.localizedDatePipe.transform(date, 'MMMM y');
    return this.capitalizePipe.transform(localized);
  }
}
