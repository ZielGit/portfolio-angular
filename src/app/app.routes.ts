import { Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/es', pathMatch: 'full' },
  {
    path: ':language',
    children: [
      { path: '', component: HomeComponent },
      { path: 'proyectos', component: ArchiveComponent },
    ],
  },
  { path: '**', redirectTo: '/es' },
];
