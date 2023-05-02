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
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl('', this.validarSenha),
    });
  }

  validarSenha: Validators = () => {
    return null;
  };

  signup() {
    this.loading = true;
    if (this.signupForm.valid) {
      this.loading = false;
      alert('signup com sucesso');
    } else {
      this.signupForm.markAllAsTouched();
      this.loading = false;
      alert('signup falhou');
    }
  }
}
