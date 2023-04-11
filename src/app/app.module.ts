import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';
import { CardResidenciaComponent } from 'src/shared/card-residencia/card-residencia.component';
import { SidebarFiltrosComponent } from 'src/shared/sidebar-filtros/sidebar-filtros.component';
import { FiltroBuscaComponent } from 'src/shared/filtro-busca/filtro-busca.component';
import { AnunciarComponent } from './components/anunciar/anunciar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { FooterComponent } from 'src/shared/footer/footer.component';
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
    FooterComponent
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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
