import { Routes } from '@angular/router';
import { FaqComponent } from '../faq/faq.component';
import { HomeComponent } from '../home/home.component';


import { AnunciarComponent } from '../anunciar/anunciar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'registrar',
    component: RegisterComponent,
  },
  {
    path: 'esqueciasenha',
    component: ForgotComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'anunciar',
    component: AnunciarComponent,
  },
];
