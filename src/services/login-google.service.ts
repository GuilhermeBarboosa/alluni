import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User{
  nome: string,
  email: string,
  googleID: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService {

  elementApiUrl = 'http://localhost:3000/login-google/'
  constructor(private http:HttpClient){}

  login(element: User){
    console.log(element.nome)
    console.log(element.googleID)
    console.log(element.email)
    return this.http.post(this.elementApiUrl, element)
  }
}
