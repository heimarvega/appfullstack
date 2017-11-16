import { RouterModule, Routes } from '@angular/router';
import { ListaAsistentesComponent } from './components/lista-asistentes/lista-asistentes.component';

const routes: Routes = [
    { path: 'asistentes', component: ListaAsistentesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'asistentes' }
];

export const appRouting = RouterModule.forRoot(routes);
