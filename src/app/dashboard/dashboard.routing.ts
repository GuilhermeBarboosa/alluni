import { Routes } from '@angular/router';
import { FaqComponent } from '../components/faq/faq.component';
import { HomeComponent } from '../components/home/home.component';

export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
    ],
  },
];
