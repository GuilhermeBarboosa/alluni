import { Routes } from '@angular/router';
import { FaqComponent } from '../faq/faq.component';
import { HomeComponent } from '../home/home.component';

import { LoginComponent } from './login/login.component';
import { AnunciarComponent } from '../anunciar/anunciar.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'anunciar',
        component: AnunciarComponent,
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'faq',
        component: FaqComponent
      }
    ],
  },
];
