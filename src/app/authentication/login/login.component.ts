import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthenticationService } from '../authentication.service';
import { finalize, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private unsubscribeNotifier = new Subject<void>();
  loginForm: FormGroup = Object.create(null);
  loading: boolean = false;
  googleLogoURL =
    'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL)
    );
  }
  ngOnInit(): void {
    this.createFormLogin();
  }

  createFormLogin(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.loading = true;
    if (this.loginForm.valid) {
      this.authenticationService
        .login(
          this.loginForm.get('email')?.value,
          this.loginForm.get('password')?.value
        )
        .pipe(
          takeUntil(this.unsubscribeNotifier),
          finalize(() => (this.loading = false))
        )
        .subscribe({
          next: (data) => {
            console.log(data);
            console.log('Login efetuado com sucesso!');
            this.router.navigateByUrl('/home');
          },
          error: (error) => {
            console.log('login com erro');
            console.log(error);
            this.authenticationService.logout();
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
      this.loading = false;
    }
  }

  goToSignUp() {
    this.router.navigateByUrl('/signup', {
      skipLocationChange: false,
    });
  }
}
