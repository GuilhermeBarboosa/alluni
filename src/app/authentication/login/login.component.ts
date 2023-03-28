import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup = Object.create(null);
  loading: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.createFormLogin();
  }

  createFormLogin(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      console.log('fez login');
    } else {
      this.loginForm.markAllAsTouched();
      this.loading = false;
      console.log('login falhou');
    }
  }

  goToSignUp() {
    this.router.navigateByUrl('/signup', {
      skipLocationChange: false,
    });
  }
}
