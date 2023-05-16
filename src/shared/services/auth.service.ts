import { LocalStorageService } from './local-storage.service';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from './jwt.service';
import { environment } from './../../../src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {



  
  
  logout(): void {
    // this.localStorageService.clear();
    // this.router.navigateByUrl('/entrar');
  }

  private path = 'auth';

  constructor(
    private httpClient: HttpClient
  ) { }



  // isLogged(): boolean {
  //   return !!this.getToken() && this.jwtService.tokenIsValid(this.getToken());
  // }

  // getToken(): string {
  //   return this.localStorageService.getItem(TOKEN_KEY);
  // }

  // getUsername(): string {
  //   return this.localStorageService.getItem(USERNAME_KEY);
  // }

  // getEmail(): string {
  //   return this.localStorageService.getItem(EMAIL_KEY);
  // }

  // getRoles(): string[] {
  //   const rolesText = this.localStorageService.getItem(ROLES_KEY);
  //   return rolesText.split(' ');
  // }

  forgetPassWord(email?: string): Observable<any> {
    return this.httpClient.post<any>(`${environment.api}/${this.path}/forgot-password`, email);
  }

  newPassWord(request: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.api}/${this.path}/reset-password`, request);
  }

}
