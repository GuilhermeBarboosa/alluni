import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { finalize, Subject, takeUntil } from 'rxjs';
import { GoogleSigninService } from 'src/services/google-signin/google-signin.service';
import { LoginGoogleService } from 'src/services/login-google/login-google.service';
import { ModalService } from 'src/shared/services/modal.service';
import { ForgotPassword } from '../forgetPassword/forgotPassword.component';
import { User } from '../../../services/login-google/login-google.service';

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
    private loginGoogleService: LoginGoogleService,
    private modalService: ModalService
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

  userResponse: any;
  async signIn() {

    Promise.resolve(this.signInService.signin()).then((user) => {
      console.log("1")
      this.userResponse ={
        name: this.user.getBasicProfile().getName(),
        email: this.user.getBasicProfile().getEmail(),
        googleID: this.user.getBasicProfile().getId(),
      }
      this.ref.detectChanges();
    }).then(() => {
      console.log("2")
      this.loginGoogleService.login(this.userResponse).subscribe({
        next: (res: any) => {
          console.log("2")
          this.authenticationService.login(res.email, res.password).subscribe({
            next: (data) => {
              console.log('Login efetuado com sucesso!');
              this.router.navigateByUrl('/home');
            }
          });
        },
        error: (error) => {
          console.log(error);
        },
      });
    })


    // let user = await this.signInService.signin();

    // let userResponse = {
    //   name: this.user.getBasicProfile().getName(),
    //   email: this.user.getBasicProfile().getEmail(),
    //   googleID: this.user.getBasicProfile().getId(),
    // };

    // console.log(userResponse)
    // this.loginGoogleService.login(user).subscribe({
    //   next: (res: any) => {

    //     console.log(res)
    //     // // ARRUMAR GOOGLE
    //     this.authenticationService.login(res.email, res.password).subscribe({
    //       next: (data) => {
    //         console.log('Login efetuado com sucesso!');
    //         this.router.navigateByUrl('/home');
    //       }
    //     });
    //   },
    //   error: (error) => {
    //     console.log(error);
    //   },
    // });
  }

  //deslogar com o google
  // signOut() {
  //   this.signInService.signout();
  // }

  createFormLogin(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('admin@gmail.com', [Validators.required]),
      password: new FormControl('admin', [Validators.required]),
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

  openModalEsqueciSenha() {
    this.modalService.open(ForgotPassword).beforeClosed().subscribe((response)=>{
    })
  }
}
