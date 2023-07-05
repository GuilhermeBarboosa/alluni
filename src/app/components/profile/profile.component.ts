import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  item: any = null;
  constructor(private authenticationService: AuthenticationService,
              private router: Router,) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const id: string = this.authenticationService.getId();
    if (id) {
      this.authenticationService.getUserById(parseInt(id)).subscribe({
        next: (res: any) => {
          this.item = res;
          console.log('item', this.item);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }
  }

  voltar(){
    this.router.navigateByUrl('home');
  }

  logout(){
    this.authenticationService.logout();
  }
}
