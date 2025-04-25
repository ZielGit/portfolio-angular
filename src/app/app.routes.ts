import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArchiveComponent } from './components/archive/archive.component';

export const routes: Routes = [
    { path: ':language?', component: HomeComponent },
    { path: ':language?/proyectos', component: ArchiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: '/' },
];
