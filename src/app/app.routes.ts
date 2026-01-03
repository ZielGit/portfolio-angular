import { Routes } from '@angular/router';
import { Archive } from './components/archive/archive';
import { Home } from './components/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/es', pathMatch: 'full' },
  {
    path: ':language',
    children: [
      { path: '', component: Home },
      { path: 'proyectos', component: Archive },
    ],
  },
  { path: '**', redirectTo: '/es' },
];
