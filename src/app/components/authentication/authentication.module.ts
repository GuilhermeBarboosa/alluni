import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';
import { HomeComponent } from '../home/home.component';

@NgModule({
  // declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(AuthenticationRoutes)],
})
export class AuthenticationModule {}
