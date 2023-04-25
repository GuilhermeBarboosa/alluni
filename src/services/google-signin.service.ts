import { Injectable, OnInit } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { gapi } from "gapi-script";

@Injectable()
export class GoogleSigninService implements OnInit {
  // private auth2: gapi.auth2.GoogleAuth;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1);

  constructor() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
          clientId: '69692732015-a4shvjc52pf30t43htah4naumqs71n81.apps.googleusercontent.com',
          plugin_name: "chat",
          scope: 'email',
      })
    })
  }

  ngOnInit(): void {}

    public async signin(){
    var auth2 = gapi.auth2.getAuthInstance();
    // console.log(auth2);
    await auth2
      .signIn({
        scope: 'https://www.googleapis.com/auth/gmail.readonly',
      })
      .then((user) => {
        console.log(user)
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
