import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/shared/services/modal.service';
import { AuthService } from 'src/shared/services/auth.service';
import { finalize, takeUntil } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forgotPassword',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css'],
})
export class ForgotPassword {
  forgetPassword: FormGroup = Object.create(null);
  loading: boolean = false;
 

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ForgotPassword>
  ) {
  }
  ngOnInit(): void {
    this.createFormLogin();
  }

  createFormLogin(): void {
    this.forgetPassword = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  esqueciSenha() {
    this.authService.forgetPassWord(this.forgetPassword?.get('email')?.value).subscribe({
      next: response => {
       
        console.log(response)
        this.dialogRef.close();
      },
      error: (error) => console.log(error)
    });
  }
}
