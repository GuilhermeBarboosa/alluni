import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnunciarService } from './anunciar.service';
import { LocalStorageService } from 'src/shared/services/local-storage.service';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent implements OnInit {
  anunciarForm: FormGroup = Object.create(null);
  
  constructor(private anuncioS: AnunciarService, private user: LocalStorageService) { }
  
  ngOnInit() {
    this.createFormAnuncio();
  }

  createFormAnuncio(): void {
    this.anunciarForm = new FormGroup({
      dsin: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      ddet: new FormControl(''),
      qtd_banheiro: new FormControl('', [Validators.required]),
      qtd_quarto: new FormControl('', [Validators.required]),
      wifi: new FormControl(''),
      ar: new FormControl(''),
      manutencao: new FormControl(''),
      limpeza: new FormControl(''),
      fumantes: new FormControl('', [Validators.required]),
      criancas: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      complemento: new FormControl(''),
      referencia: new FormControl(''),
    });
  }

  createAnuncio(){
    if(this.anunciarForm.valid){
      let json = {...this.anunciarForm.value};
      json.user_id = this.user.getItem("@ID");
      
      alert("deu bom");
      this.anuncioS.create(json).subscribe({next: (res) => {console.log(res)}, error: (error) => {console.log(error)}})
    } else {
      alert('deu ruim');
    }
  }

}
