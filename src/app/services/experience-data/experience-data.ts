import { Injectable } from '@angular/core';
import { EXPERIENCE_CONSTANTS } from 'src/app/constants/experience-constants';
import { ExperienceModel } from 'src/app/models/experience-model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceData {
  private experiences: ExperienceModel[] = [
    {
      id: EXPERIENCE_CONSTANTS.EXP_1.id,
      company: 'Fenix Corporation',
      positionKey: EXPERIENCE_CONSTANTS.EXP_1.positionKey,
      place: 'Junín, Perú',
      startDate: new Date(2019, 11),
      endDate: new Date(2021, 7),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_1.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_2.id,
      company: 'MiTSoftware',
      positionKey: EXPERIENCE_CONSTANTS.EXP_2.positionKey,
      place: 'Barcelona, España',
      startDate: new Date(2021, 8),
      endDate: new Date(2021, 11),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_2.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_3.id,
      company: 'Freelancer',
      positionKey: EXPERIENCE_CONSTANTS.EXP_3.positionKey,
      place: 'Junín, Perú',
      startDate: new Date(2022, 0),
      endDate: new Date(2023, 1),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_3.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_4.id,
      company: 'La Preventiva Seguros',
      positionKey: EXPERIENCE_CONSTANTS.EXP_4.positionKey,
      place: 'Junín, Perú',
      startDate: new Date(2023, 1),
      endDate: new Date(2024, 1),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_4.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_5.id,
      company: 'La Preventiva Seguros',
      positionKey: EXPERIENCE_CONSTANTS.EXP_5.positionKey,
      place: 'Junín, Perú',
      startDate: new Date(2024, 1),
      endDate: new Date(2024, 4),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_5.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_6.id,
      company: 'UNISCJSA',
      positionKey: EXPERIENCE_CONSTANTS.EXP_6.positionKey,
      place: 'Junín, Perú',
      startDate: new Date(2024, 4),
      endDate: new Date(2024, 7),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_6.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_7.id,
      company: 'Freelancer',
      positionKey: EXPERIENCE_CONSTANTS.EXP_7.positionKey,
      place: 'Lima, Perú',
      startDate: new Date(2024, 8),
      endDate: new Date(2024, 10),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_7.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_8.id,
      company: 'Olitel',
      positionKey: EXPERIENCE_CONSTANTS.EXP_8.positionKey,
      place: 'Lima, Perú',
      startDate: new Date(2024, 11),
      endDate: new Date(2025, 2),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_8.functions,
    },
    {
      id: EXPERIENCE_CONSTANTS.EXP_9.id,
      company: 'Odiseo',
      positionKey: EXPERIENCE_CONSTANTS.EXP_9.positionKey,
      place: 'Lima, Perú',
      startDate: new Date(2025, 5),
      endDate: new Date(2025, 7),
      functionKeys: EXPERIENCE_CONSTANTS.EXP_9.functions,
    },
  ];

  getExperiences(options?: { sortBy?: 'startDate' | 'endDate'; order?: 'asc' | 'desc' }): ExperienceModel[] {
    const sortBy = options?.sortBy || 'endDate';
    const order = options?.order || 'desc';

    return [...this.experiences].sort((a, b) => {
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
