import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.isLogged = this.authenticationService.isLogged();
    console.log('logado: ', this.isLogged);
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
