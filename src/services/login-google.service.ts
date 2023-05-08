import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  nome: string;
  email: string;
  googleID: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginGoogleService {
  elementApiUrl = 'http://localhost:3000/login-google/';
  constructor(private httpClient: HttpClient) {}
  /* 
  login(element: User){
    console.log(element.nome)
    console.log(element.googleID)
    console.log(element.email)
    return this.http.post(this.elementApiUrl, element)
  }
 */
  login(element: any): Observable<any> {
    console.log('entrou');
    return this.httpClient.post(this.elementApiUrl, element);
  }
}
