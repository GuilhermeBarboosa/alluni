import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalService } from 'src/shared/services/modal.service';
import { AuthService } from 'src/shared/services/auth.service';
import { finalize, takeUntil } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-newPassword',
  templateUrl: './newPassword.component.html',
  styleUrls: ['./newPassword.component.css'],
})
export class NewPassword {
  newPassword: FormGroup = Object.create(null);
  loading: boolean = false;
  token: any;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createFormLogin();
    this.token = this.route.snapshot.queryParams['token'];
  }

  createFormLogin(): void {
    this.newPassword = new FormGroup({
      senha: new FormControl('', [Validators.required]),
      senhaRept: new FormControl('', [Validators.required])
    });
  }

  esqueciSenha() {

    if(this.newPassword?.get('senha')?.value != this.newPassword?.get('senhaRept')?.value){
      // alert("As senhas não conferem");
      console.log("Senha nao confere");
    }else{
      // alert("Senha alterada com sucesso");
      const request = {
        token: this.token,
        password: this.newPassword?.get('senha')?.value
      }
      this.authService.newPassWord(request).subscribe({
        next: response => {
          this.router.navigateByUrl('/authentication/login', {
            skipLocationChange: false,
          });
        },
        error: (error) => console.log(error)
      });
    }

  }
}
