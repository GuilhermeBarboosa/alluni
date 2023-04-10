import { SidebarFiltrosComponent } from './../shared/sidebar-filtros/sidebar-filtros.component';
import { CardResidenciaComponent } from './../shared/card-residencia/card-residencia.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './../shared/navbar/navbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Approutes } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { FiltroBuscaComponent } from 'src/shared/filtro-busca/filtro-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    NavbarComponent,
    CardResidenciaComponent,
    SidebarFiltrosComponent,
    FiltroBuscaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatAutocompleteModule,
    RouterModule.forRoot(Approutes),
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
