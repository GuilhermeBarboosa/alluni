import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;

  constructor(
    private localStorageService: LocalStorageService,
    private authenticationService: AuthenticationService
  ) {}

  username = '';

  ngOnInit() {
    if (this.localStorageService.getItem('@NAME') != null) {
      this.username = this.localStorageService.getItem('@NAME');
      this.username = this.username.toLowerCase();
      this.username = this.username.split(' ')[0];
      this.username = this.username.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
        letra.toUpperCase()
      );
    }
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
