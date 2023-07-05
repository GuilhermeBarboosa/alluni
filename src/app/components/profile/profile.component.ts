import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  item: any = null;
  constructor(private authenticationService: AuthenticationService) {}

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

  logout(){
    this.authenticationService.logout();
  }
}
