import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { SocialAuthService, GoogleLoginProvider } from "@abacritt/angularx-social-login";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  loginForm: FormGroup = Object.create(null);
  loading: boolean = false;
  googleLogoURL =
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

  constructor(private router: Router,private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private authService: SocialAuthService) {this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL));}
  ngOnInit(): void {
    this.createFormLogin();

    this.authService.authState.subscribe( (user) => {
      console.log(user)
    })
  }

  createFormLogin(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.loading = true;
    if (this.loginForm.valid) {
      alert('login com sucesso')
      this.loading = false;
    } else {
      this.loginForm.markAllAsTouched();
      alert('login falhou')
      this.loading = false;
    }
  }

  goToSignUp() {
    this.router.navigateByUrl('/signup', {
      skipLocationChange: false,
    });
  }
}
