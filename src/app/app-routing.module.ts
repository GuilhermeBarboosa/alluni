import { Routes } from '@angular/router';

export const Approutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];