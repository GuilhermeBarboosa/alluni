import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { FaqComponent } from '../components/faq/faq.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { CardResidenciaComponent } from 'src/shared/card-residencia/card-residencia.component';
import { SidebarFiltrosComponent } from 'src/shared/sidebar-filtros/sidebar-filtros.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    FaqComponent,
    NavbarComponent,
    CardResidenciaComponent,
    SidebarFiltrosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    MatIconModule,
  ],
})
export class DashboardModule {}
