import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup = Object.create(null);
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.createFormSignup();
  }

  goToLogin() {
    this.router.navigateByUrl('/login', {
      skipLocationChange: false,
    });
  }

  createFormSignup(): void {
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.loading = true;
      console.log('fez login');
    } else {
      this.signupForm.markAllAsTouched();
      this.loading = false;
      console.log('login falhou');
    }
  }
}
