import { Routes } from '@angular/router';
import { DEFAULT_LANGUAGE } from './models/language-model';

export const routes: Routes = [
  { path: '', redirectTo: `/${DEFAULT_LANGUAGE}`, pathMatch: 'full' },
  {
    path: ':lang',
    children: [
      { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
      { path: 'projects', loadComponent: () => import('./pages/project/project').then(m => m.Project) },
    ],
  },
  { path: '**', redirectTo: `/${DEFAULT_LANGUAGE}` },
];
