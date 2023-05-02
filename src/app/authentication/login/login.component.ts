import { LoginGoogleService, User } from 'src/services/login-google.service';
import { GoogleSigninService } from './../../../services/google-signin.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup = Object.create(null);
  loading: boolean = false;
  googleLogoURL =
    'https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg';


  user: gapi.auth2.GoogleUser;

  constructor(
      private signInService: GoogleSigninService,
      private ref: ChangeDetectorRef,
      private router: Router,
      private matIconRegistry: MatIconRegistry,
      private domSanitizer: DomSanitizer,
      private loginGoogleService: LoginGoogleService) {
        this.matIconRegistry.addSvgIcon(
          'logo',
          this.domSanitizer.bypassSecurityTrustResourceUrl(this.googleLogoURL)
        );
       }

  ngOnInit(): void {
    this.createFormLogin();
      this.signInService.observable().subscribe( user => {
        this.user = user;
        this.ref.detectChanges()


        let element = {
          'nome': this.user.getBasicProfile().getName(),
          'email': this.user.getBasicProfile().getEmail(),
          'googleID': this.user.getBasicProfile().getId()
         }

        this.loginGoogleService.login(element)
      })
  }

  async signIn(){
   await this.signInService.signin();
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
    this.loading = true;
    if (this.loginForm.valid) {
      alert('login com sucesso');
      this.loading = false;
    } else {
      this.loginForm.markAllAsTouched();
      alert('login falhou');
      this.loading = false;
    }
  }

  goToSignUp() {
    this.router.navigateByUrl('/signup', {
      skipLocationChange: false,
    });
  }
}
