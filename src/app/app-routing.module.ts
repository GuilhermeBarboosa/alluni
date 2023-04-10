import { Routes } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';

export const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
