import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { finalize, Subject, takeUntil } from 'rxjs';
import { GoogleSigninService } from 'src/services/google-signin/google-signin.service';
import { LoginGoogleService } from 'src/services/login-google/login-google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = Object.create(null);
  loading: boolean = false;
  googleLogoURL =
    'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';

  user: gapi.auth2.GoogleUser;

  constructor(
    private signInService: GoogleSigninService,
    private ref: ChangeDetectorRef,
    private router: Router,
    private authenticationService: AuthenticationService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private loginGoogleService: LoginGoogleService
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL)
    );
  }

  ngOnInit(): void {
    this.createFormLogin();
    this.signInService.observable().subscribe((user) => {
      this.user = user;
      this.ref.detectChanges();

    });
  }

  async signIn() {
    await this.signInService.signin();

    let user = {
      name: this.user.getBasicProfile().getName(),
      email: this.user.getBasicProfile().getEmail(),
      googleID: this.user.getBasicProfile().getId(),
    };

    this.loginGoogleService.login(user).subscribe({
      next: (res: any) => {
        console.log(res);
        this.authenticationService.login(res.username, res.password).subscribe({
          next: (data) => {
            console.log(data);
            console.log('Login efetuado com sucesso!');
            this.router.navigateByUrl('/home');
          }
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  //deslogar com o google
  // signOut() {
  //   this.signInService.signout();
  // }

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
          // takeUntil(this.unsubscribeNotifier),
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
