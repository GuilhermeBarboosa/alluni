import { Routes } from '@angular/router';
import { AnunciarComponent } from './components/anunciar/anunciar.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { InformacaoComponent } from './components/informacao/informacao.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SobreComponent } from './components/sobre/sobre.component';

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
    path: 'anunciar',
    component: AnunciarComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: 'informacao',
    component: InformacaoComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
];
