import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'curso', component: CursolistaComponent },
      { path: 'alumno', component: AlumnolistaComponent },
      { path: 'alumno/:id', component: AlumnodetalleComponent },
      { path: 'curso/:nombre', component: CursodetalleComponent },
    ],
  },
];
