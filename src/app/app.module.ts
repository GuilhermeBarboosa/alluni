import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FiltroBuscaComponent } from 'src/shared/filtro-busca/filtro-busca.component';

import { CardResidenciaComponent } from './../shared/card-residencia/card-residencia.component';
import { NavbarComponent } from './../shared/navbar/navbar.component';
import { SidebarFiltrosComponent } from './../shared/sidebar-filtros/sidebar-filtros.component';
import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnunciarComponent } from './components/anunciar/anunciar.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { GoogleSigninService } from '../services/google-signin.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FaqComponent,
    NavbarComponent,
    CardResidenciaComponent,
    SidebarFiltrosComponent,
    FiltroBuscaComponent,
    AnunciarComponent,
    SobreComponent
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
    SocialLoginModule,
  ],
  providers: [
    GoogleSigninService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
