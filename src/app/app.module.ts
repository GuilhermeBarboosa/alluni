import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { CardResidenciaComponent } from '../shared/card-residencia/card-residencia.component';
import { SidebarFiltrosComponent } from '../shared/sidebar-filtros/sidebar-filtros.component';
import { FiltroBuscaComponent } from '../shared/filtro-busca/filtro-busca.component';
import { AnunciarComponent } from './components/anunciar/anunciar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Approutes } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { InformacaoComponent } from './components/informacao/informacao.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GoogleSigninService } from 'src/services/google-signin/google-signin.service';


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
    SobreComponent,
    FooterComponent,
    InformacaoComponent,
    ProfileComponent,
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
    HttpClientModule
  ],
  providers: [
    GoogleSigninService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
