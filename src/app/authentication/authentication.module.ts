import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'src/shared/shared.module';
import { ForgotPassword } from './forgetPassword/forgotPassword.component';
import { NewPassword } from './newPassWord/newPassword.component';

@NgModule({
  declarations: [LoginComponent, SignupComponent, ForgotPassword, NewPassword],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
  ],
})
export class AuthenticationModule {}
