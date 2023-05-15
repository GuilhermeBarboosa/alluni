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
      quartos: new FormControl('', [Validators.required]),
      banheiros: new FormControl('', [Validators.required]),
      wifi: new FormControl(''),
      ar: new FormControl(''),
      manutencao: new FormControl(''),
      limpeza: new FormControl(''),
      fumar: new FormControl('', [Validators.required]),
      criancas: new FormControl('', [Validators.required])
    });
  }

  createAnuncio(){
    if(this.anunciarForm.valid){
      console.log(this.anunciarForm.value);
      alert('deu bom');
      // this.anuncioS.create(this.anunciarForm.value).subscribe({next: (res) => {console.log(res)}, error: (error) => {console.log(error)}})
    } else {
      alert('deu ruim');
    }
  }

}
