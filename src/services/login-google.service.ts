import { environment } from './../environment';
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
  constructor(private httpClient: HttpClient) {}

  login(element: any): Observable<any> {
    return this.httpClient.post(`${environment.api}/users/login`, element);
  }
}
