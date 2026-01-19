import { Injectable } from '@angular/core';
import { EDUCATION_CONSTANTS } from '../../constants/education-constants';
import { EducationModel } from '../../models/education-model';

@Injectable({
  providedIn: 'root',
})
export class EducationData {
  private readonly educations: EducationModel[] = [
    {
      id: EDUCATION_CONSTANTS.EDU_1.id,
      institution: 'Universidad Peruana Los Andes',
      degreeKey: EDUCATION_CONSTANTS.EDU_1.degreeKey,
      fieldOfStudyKey: EDUCATION_CONSTANTS.EDU_1.fieldOfStudyKey,
      place: 'Junín, Perú',
      startDate: new Date(2016, 7),
      endDate: new Date(2021, 11),
    },
    {
      id: EDUCATION_CONSTANTS.EDU_2.id,
      institution: 'Universidad Nacional del Centro del Perú',
      degreeKey: EDUCATION_CONSTANTS.EDU_2.degreeKey,
      fieldOfStudyKey: EDUCATION_CONSTANTS.EDU_2.fieldOfStudyKey,
      place: 'Junín, Perú',
      startDate: new Date(2024, 8),
      endDate: null,
    },
  ];

  getEducations(options?: { sortBy?: 'startDate' | 'endDate'; order?: 'asc' | 'desc' }): EducationModel[] {
    const sortBy = options?.sortBy || 'endDate';
    const order = options?.order || 'desc';

    return [...this.educations].sort((a, b) => {
      let dateA: Date, dateB: Date;

      if (sortBy === 'endDate') {
        dateA = a.endDate || new Date();
        dateB = b.endDate || new Date();
      } else {
        dateA = a.startDate;
        dateB = b.startDate;
      }

      const diff = dateA.getTime() - dateB.getTime();
      return order === 'asc' ? diff : -diff;
    });
  }
}
