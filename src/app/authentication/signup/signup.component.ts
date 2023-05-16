import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup = Object.create(null);
  loading: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

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
      gender: new FormControl('', [Validators.required]),
      username: new FormControl(''),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  validarSenha: Validators = () => {
    return null;
  };

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.signup();
    } else {
      this.signupForm.markAllAsTouched();
      console.log('erro');
    }
  }

  signup() {
    this.signupForm.value.username = 'vini1234';

    this.authenticationService.addUser(this.signupForm.value).subscribe({
      next: () => {
        alert('cadastrado com sucesso');
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
