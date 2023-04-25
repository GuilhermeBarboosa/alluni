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
      preco: new FormControl('', [Validators.required])
    });
  }

  createAnuncio(){
    if(this.anunciarForm.valid){
      this.anuncioS.create(this.anunciarForm.value).subscribe({next: (res) => {console.log(res)}, error: (error) => {console.log(error)}})
    } else {
      alert('deu ruim');
    }
  }

}
