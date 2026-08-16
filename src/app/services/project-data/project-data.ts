import { computed, Injectable, signal } from '@angular/core';
import { PROJECT_CONSTANTS } from '../../constants/project-constants';
import { Project, ProjectSortField, ProjectSortOptions } from '../../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class ProjectData {
  private readonly projectsData = signal<readonly Project[]>([
    {
      id: PROJECT_CONSTANTS.CRYPLAB.id,
      titleKey: PROJECT_CONSTANTS.CRYPLAB.titleKey,
      descriptionKey: PROJECT_CONSTANTS.CRYPLAB.descriptionKey,
      technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'Vue.js', 'MySQL'],
      images: [
        'images/cryplab/home.png',
        'images/cryplab/featured-product.png',
        'images/cryplab/product-detail.png',
        'images/cryplab/perfil-dashboard.png',
        'images/cryplab/deposit-money.png',
        'images/cryplab/admin-dashboard.png',
        'images/cryplab/manage-product.png',
        'images/cryplab/manage-section.png',
      ],
      visibility: 'private',
      featured: true,
      startDate: new Date(2021, 8),
      endDate: new Date(2021, 11),
    },
    {
      id: PROJECT_CONSTANTS.LIBRARY_MANAGEMENT.id,
      titleKey: PROJECT_CONSTANTS.LIBRARY_MANAGEMENT.titleKey,
      descriptionKey: PROJECT_CONSTANTS.LIBRARY_MANAGEMENT.descriptionKey,
      technologies: ['PHP', 'Laravel', 'JavaScript', 'Vue.js', 'MySQL'],
      images: [
        'images/library-management/bienvenido-a-la-biblioteca.png',
        'images/library-management/login.png',
        'images/library-management/dashboard-del-sistema.png',
        'images/library-management/lista-de-roles.png',
        'images/library-management/lista-de-usuarios.png',
        'images/library-management/lista-de-libros.png',
        'images/library-management/lista-de-prestamos.png',
      ],
      visibility: 'private',
      featured: true,
      startDate: new Date(2023, 5),
      endDate: new Date(2023, 10),
    },
    {
      id: PROJECT_CONSTANTS.DOCTOR_MANAGEMENT.id,
      titleKey: PROJECT_CONSTANTS.DOCTOR_MANAGEMENT.titleKey,
      descriptionKey: PROJECT_CONSTANTS.DOCTOR_MANAGEMENT.descriptionKey,
      technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'PHPUnit', 'MySQL', 'MongoDB', 'AWS'],
      images: [
        'images/doctor-management/login.png',
        'images/doctor-management/dashboard.png',
        'images/doctor-management/pacientes.png',
        'images/doctor-management/tickets-de-servicio.png',
        'images/doctor-management/comprobantes.png',
        'images/doctor-management/horario-medico.png',
        'images/doctor-management/registro-del-colaborador.png',
        'images/doctor-management/solicitud-a-caja.png',
        'images/doctor-management/reporte-de-arqueos-de-caja.png',
      ],
      visibility: 'private',
      featured: true,
      startDate: new Date(2023, 1),
      endDate: new Date(2024, 4),
    },
    {
      id: PROJECT_CONSTANTS.DOCTOR_CARE.id,
      titleKey: PROJECT_CONSTANTS.DOCTOR_CARE.titleKey,
      descriptionKey: PROJECT_CONSTANTS.DOCTOR_CARE.descriptionKey,
      technologies: ['PHP', 'Laravel', 'JavaScript', 'jQuery', 'PHPUnit', 'MySQL', 'MongoDB', 'AWS'],
      images: [
        'images/doctor-care/home.png',
        'images/doctor-care/login.png',
        'images/doctor-care/mis-citas.png',
        'images/doctor-care/mis-pacientes.png',
        'images/doctor-care/monitoreo-seguimiento.png',
        'images/doctor-care/reportes.png',
        'images/doctor-care/consulta-medico.png',
      ],
      visibility: 'private',
      featured: true,
      startDate: new Date(2023, 1),
      endDate: new Date(2024, 4),
    },
  ]);

  private readonly sortOptions = signal<Required<ProjectSortOptions>>({
    sortBy: 'endDate',
    order: 'desc',
  });

  readonly projects = computed(() => {
    const data = this.projectsData();
    const options = this.sortOptions();
    return this.sortProjects(data, options);
  });

  readonly featuredProjects = computed(() => this.projects().filter(project => project.featured));

  readonly otherProjects = computed(() => this.projects().filter(project => !project.featured));

  getProjectById(id: string): Project | undefined {
    return this.projectsData().find(project => project.id === id);
  }

  private sortProjects(projects: readonly Project[], options: Required<ProjectSortOptions>): readonly Project[] {
    const { sortBy, order } = options;

    return [...projects].sort((a, b) => {
      const dateA = this.getDateForSorting(a, sortBy);
      const dateB = this.getDateForSorting(b, sortBy);

      const diff = dateA.getTime() - dateB.getTime();
      return order === 'asc' ? diff : -diff;
    });
  }

  private getDateForSorting(project: Project, sortBy: ProjectSortField): Date {
    if (sortBy === 'endDate') {
      // Si no hay fecha de fin, usar fecha actual (proyecto en curso)
      return project.endDate || new Date();
    }
    // Si no hay fecha de inicio, tratar como la mas antigua
    return project.startDate ?? new Date(0);
  }
}
