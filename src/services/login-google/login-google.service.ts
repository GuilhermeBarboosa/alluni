import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface User {
  nome: string;
  email: string;
  googleID: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginGoogleService {
  constructor(private httpClient: HttpClient) {}

  login(element: any): Observable<any> {
    console.log("Objeto a ser enviado")
    console.log(element);
    return this.httpClient.post(`${environment.api}/google/login`, element);
  }
}
