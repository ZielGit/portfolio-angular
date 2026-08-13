export const PROJECT_CONSTANTS = {
  CRYPLAB: {
    id: 'cryplab',
    titleKey: 'projects.cryplab.title',
    descriptionKey: 'projects.cryplab.description',
  },
  LIBRARY_MANAGEMENT: {
    id: 'library-management',
    titleKey: 'projects.libraryManagement.title',
    descriptionKey: 'projects.libraryManagement.description',
  },
  DOCTOR_MANAGEMENT: {
    id: 'doctor-management',
    titleKey: 'projects.doctorManagement.title',
    descriptionKey: 'projects.doctorManagement.description',
  },
  DOCTOR_CARE: {
    id: 'doctor-care',
    titleKey: 'projects.doctorCare.title',
    descriptionKey: 'projects.doctorCare.description',
  },
} as const;

/**
 * Tipo derivado de las constantes para type safety
 */
export type ProjectConstant = typeof PROJECT_CONSTANTS;

/**
 * Tipo de las claves de proyectos para type safety
 */
export type ProjectKey = keyof typeof PROJECT_CONSTANTS;
