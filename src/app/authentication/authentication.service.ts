import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  EMAIL_KEY,
  ROLES_KEY,
  TOKEN_KEY,
  USERNAME_KEY,
} from 'src/shared/constants/auth.constants';
import { JwtService } from 'src/shared/services/jwt.service';
import { LocalStorageService } from 'src/shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router,
    private jwtService: JwtService
  ) {}

  login(userName: string, password: string): Observable<any> {
    console.log(userName, password);
    const header = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', `Basic ${environment.AUTHORIZATION_KEY}`);

    const body = `grant_type=password&username=${userName}&password=${password}`;

    return this.httpClient
      .post<any>(`${environment.api}/auth/login`, body, {
        headers: header,
      })
      .pipe(
        tap((data) => {
          this.localStorageService.setItem(TOKEN_KEY, data.token);
          this.localStorageService.setItem(USERNAME_KEY, data.username);
          this.localStorageService.setItem(EMAIL_KEY, data.email);
          this.localStorageService.setItem(ROLES_KEY, data.roles.join(' '));
        })
      );
  }

  logout(): void {
    this.localStorageService.clear();
    this.router.navigateByUrl('/authentication/login');
  }

  isLogged(): boolean {
    return !!this.getToken() && this.jwtService.tokenIsValid(this.getToken());
  }

  getToken(): string {
    return this.localStorageService.getItem(TOKEN_KEY);
  }

  getUsername(): string {
    return this.localStorageService.getItem(USERNAME_KEY);
  }

  getEmail(): string {
    return this.localStorageService.getItem(EMAIL_KEY);
  }

  getRoles(): string[] {
    const rolesText = this.localStorageService.getItem(ROLES_KEY);
    return rolesText.split(' ');
  }

  addUser(user: any): Observable<void> {
    console.log('user', user);
    return this.httpClient.post<void>(`${environment.api}/users`, user);
  }
}
