import { computed, Injectable, signal } from '@angular/core';
import { PROJECT_CONSTANTS } from '../../constants/project-constants';
import { Project } from '../../models/project-model';

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
    },
  ]);

  readonly projects = computed(() => this.projectsData());

  readonly featuredProjects = computed(() => this.projectsData().filter(project => project.featured));

  readonly otherProjects = computed(() => this.projectsData().filter(project => !project.featured));

  getProjectById(id: string): Project | undefined {
    return this.projectsData().find(project => project.id === id);
  }
}
