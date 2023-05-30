import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnunciarService } from './anunciar.service';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent implements OnInit {
  anunciarForm: FormGroup = Object.create(null);
  
  constructor(private anuncioS: AnunciarService) { }
  
  ngOnInit() {
    this.createFormAnuncio();
  }

  createFormAnuncio(): void {
    this.anunciarForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      preco: new FormControl('', [Validators.required]),
      cep: new FormControl('', [Validators.required]),
      logradouro: new FormControl('', [Validators.required]),
      bairro: new FormControl('', [Validators.required]),
      cidade: new FormControl('', [Validators.required]),
      complemento: new FormControl(''),
      referencia: new FormControl(''),
      detalhes: new FormControl(''),
      quartos: new FormControl(''),
      banheiros: new FormControl(''),
      wifi: new FormControl(''),
      ar: new FormControl(''),
      manutencao: new FormControl(''),
      limpeza: new FormControl(''),
      fumar: new FormControl(''),
      criancas: new FormControl('')
    });
  }

  createAnuncio(){
    if(this.anunciarForm.valid){
      let json = {
        "dsin": this.anunciarForm.value.titulo,
        "valor": this.anunciarForm.value.preco,
        "ddet": this.anunciarForm.value.detalhes,
        "fotoID": "1",
        "userID": "1",
        "endereco": {
          "cep": this.anunciarForm.value.cep,
          "rua": this.anunciarForm.value.logradouro,
          "bairro": this.anunciarForm.value.bairro,
          "cidade": this.anunciarForm.value.cidade,
          "pais": "Brasil",
          "referencia": this.anunciarForm.value.referencia
        },
        "locacaoID": "1"
      }


      alert("deu bom");
      console.log(json);
      this.anuncioS.create(json).subscribe({next: (res) => {console.log(res)}, error: (error) => {console.log(error)}})
    } else {
      alert('deu ruim');
    }
  }

}
