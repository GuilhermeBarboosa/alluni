import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnunciarService } from './anunciar.service';
import { LocalStorageService } from 'src/shared/services/local-storage.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent implements OnInit {
  anunciarForm: FormGroup = Object.create(null);
  
  constructor(private anuncioS: AnunciarService, private user: LocalStorageService, private http: HttpClient) { }
  
  ngOnInit() {
    this.createFormAnuncio();
  }

  createFormAnuncio(): void {
    this.anunciarForm = new FormGroup({
      dsin: new FormControl('', [Validators.required]),
      valor: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
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
      let json = {
        "dsin": this.anunciarForm.value.dsin,
        "valor": this.anunciarForm.value.valor,
        "ddet": this.anunciarForm.value.ddet,
        "qtd_banheiro": this.anunciarForm.value.qtd_banheiro,
        "qtd_quarto": this.anunciarForm.value.qtd_quarto,
        "wifi": this.anunciarForm.value.wifi,
        "ar": this.anunciarForm.value.ar,
        "manutencao": this.anunciarForm.value.manutencao,
        "limpeza": this.anunciarForm.value.limpeza,
        "fumantes": this.anunciarForm.value.fumantes,
        "criancas": this.anunciarForm.value.criancas,
        "userID": 1,
        "endereco": {
          "cep": this.anunciarForm.value.cep,
          "rua": this.anunciarForm.value.logradouro,
          "bairro": this.anunciarForm.value.bairro,
          "cidade": this.anunciarForm.value.cidade,
          "pais": "Brasil",
          "referencia": this.anunciarForm.value.referencia,
          "complemento": this.anunciarForm.value.complemento
        },
        "locacaoID": "1"
      }

      const formData = new FormData();
      formData.append('file', this.anunciarForm.value.foto);
      formData.append('id', '1');

      alert("deu bom");
      this.anuncioS.createFoto(formData).subscribe({next: (res) => {console.log(res)}, error: (error) => {console.log(error)}})
      // this.anuncioS.create(json).subscribe({next: (res) => {console.log(res)}, error: (error) => {console.log(error)}})
    } else {
      alert('deu ruim');
    }
  }

}
