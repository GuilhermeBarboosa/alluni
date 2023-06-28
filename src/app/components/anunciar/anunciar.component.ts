import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnunciarService } from './anunciar.service';
import { LocalStorageService } from 'src/shared/services/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-anunciar',
  templateUrl: './anunciar.component.html',
  styleUrls: ['./anunciar.component.css']
})
export class AnunciarComponent implements OnInit{

  photoUploadForm: FormGroup;
  anunciarForm: FormGroup = Object.create(null);
  formData = new FormData();
  selectedFile: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private anuncioS: AnunciarService,
     private user: LocalStorageService,
  ) {
    this.photoUploadForm = this.formBuilder.group({
      description: '',
      file: null
    });
  }

  onSubmit() {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'multipart/form-data');

    // this.http.post('http://localhost:8080/api/fotos', this.formData, { headers: headers }).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.error(err)
    // );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if(this.selectedFile != undefined){
      this.formData.append('file', this.selectedFile);
    }
  }

  //********************************************************* */




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
    // if(this.anunciarForm.valid){
    //   let json = {
    //     "dsin": this.anunciarForm.value.dsin,
    //     "valor": this.anunciarForm.value.valor,
    //     "ddet": this.anunciarForm.value.ddet,
    //     "qtd_banheiro": this.anunciarForm.value.qtd_banheiro,
    //     "qtd_quarto": this.anunciarForm.value.qtd_quarto,
    //     "wifi": this.anunciarForm.value.wifi,
    //     "ar": this.anunciarForm.value.ar,
    //     "manutencao": this.anunciarForm.value.manutencao,
    //     "limpeza": this.anunciarForm.value.limpeza,
    //     "fumantes": this.anunciarForm.value.fumantes,
    //     "criancas": this.anunciarForm.value.criancas,
    //     "userID": 1,
    //     "endereco": {
    //       "cep": this.anunciarForm.value.cep,
    //       "rua": this.anunciarForm.value.logradouro,
    //       "bairro": this.anunciarForm.value.bairro,
    //       "cidade": this.anunciarForm.value.cidade,
    //       "pais": "Brasil",
    //       "referencia": this.anunciarForm.value.referencia,
    //       "complemento": this.anunciarForm.value.complemento
    //     },
    //     "locacaoID": "1",
    //     "foto": this.formData.getAll('file')
    //   }


      let json = {
        "dsin": 'this.anunciarForm.value.dsin',
        "valor": 12.5,
        "ddet": 'this.anunciarForm.value.ddet',
        "qtd_banheiro": 2,
        "qtd_quarto": 2,
        "wifi": true,
        "ar": true,
        "manutencao": true,
        "limpeza": true,
        "fumantes": true,
        "criancas": true,
        "userID": 1,
        "endereco": {
          "cep": 'this.anunciarForm.value.cep',
          "rua": 'this.anunciarForm.value.logradouro',
          "bairro": 'this.anunciarForm.value.bairro',
          "cidade": 'this.anunciarForm.value.cidade',
          "pais": "Brasil",
          "referencia": 'this.anunciarForm.value.referencia',
          "complemento": 'this.anunciarForm.value.complemento'
        },
        "locacaoID": "1"
      }

      this.anuncioS.create(json).subscribe({next: (res) => {console.log(res)}, error: (error) => {console.log(error)}})

    // } else {
    //   alert('deu ruim');
    // }
  }


}
