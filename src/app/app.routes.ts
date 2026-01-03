import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Project } from './pages/project/project';

export const routes: Routes = [
  { path: '', redirectTo: '/es', pathMatch: 'full' },
  {
    path: ':language',
    children: [
      { path: '', component: Home },
      { path: 'projects', component: Project },
    ],
  },
  { path: '**', redirectTo: '/es' },
];
