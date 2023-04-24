import { Injectable, OnInit } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable()
export class GoogleSigninService implements OnInit {
  // private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);

  constructor() {
    gapi.load('auth2', function () {
      gapi.auth2
        .init({
          client_id:
            '69692732015-a4shvjc52pf30t43htah4naumqs71n81.apps.googleusercontent.com',
        })
        .then(function (auth2) {
          console.log('GoogleAuth inicializado com sucesso!', auth2);
          // O GoogleAuth foi inicializado com sucesso. Agora você pode chamar métodos como signIn().
        })
        .catch(function (error: any) {
          console.error('Erro ao inicializar o GoogleAuth:', error);
        });
    });
  }

  ngOnInit(): void {}

  public signin() {
    var auth2 = gapi.auth2.getAuthInstance();
    console.log(auth2);
    auth2
      .signIn({
        scope: 'https://www.googleapis.com/auth/gmail.readonly',
      })
      .then((user) => {
        console.log(user);
        this.subject.next(user);
      })
      .catch((error) => {
        console.log(error);
        this.subject.next(null!);
      });
  }

  public signout() {
    var auth2 = gapi.auth2.getAuthInstance();

    auth2.signOut().then(() => {
      this.subject.next(null!);
    });
  }

  public observable(): Observable<gapi.auth2.GoogleUser> {
    return this.subject.asObservable();
  }
}
