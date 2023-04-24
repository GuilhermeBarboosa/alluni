import { GoogleSigninService } from './../../../services/google-signin.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

export class LoginComponent implements OnInit{
  loginForm: FormGroup = Object.create(null);
  loading: boolean = false;

  user: gapi.auth2.GoogleUser;

  constructor(
      private signInService: GoogleSigninService,
      private ref: ChangeDetectorRef) {  }

  ngOnInit(): void {
      this.signInService.observable().subscribe( user => {
        this.user = user;
        this.ref.detectChanges()
      })
  }

  signIn(){
    this.signInService.signin();
  }

  signOut(){
    this.signInService.signout();
  }

  createFormLogin(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {

  }

  goToSignUp() {

  }
}
