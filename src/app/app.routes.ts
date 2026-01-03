import { Routes } from '@angular/router';
import { Archive } from './components/archive/archive';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/es', pathMatch: 'full' },
  {
    path: ':language',
    children: [
      { path: '', component: HomeComponent },
      { path: 'proyectos', component: Archive },
    ],
  },
  { path: '**', redirectTo: '/es' },
];
