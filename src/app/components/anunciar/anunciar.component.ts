import { FotoService } from './foto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnunciarService } from './anunciar.service';
import { LocalStorageService } from 'src/shared/services/local-storage.service';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

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
    private anuncioS: AnunciarService,
    private fotoService: FotoService,
     private user: LocalStorageService,
  ) {
    this.photoUploadForm = this.formBuilder.group({
      description: '',
      file: null
    });
  }

  postFoto() {
    this.fotoService.create(this.formData).subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }

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

      console.log(this.formData.getAll('file'))
      this.anuncioS.create(json).subscribe(
        {
          next: data => {
            let res = new AnucioResponse(data)
            console.log(data)
            this.formData.append('anuncioId', String(res.id))
            this.postFoto();
          },
          error: error => {
            console.error(error)
          }
        }
      );

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if(this.selectedFile != undefined){
      this.formData.append('file', this.selectedFile);
    }
  }

}

class AnucioResponse implements AnucioResponse{

  id: Number
  dsin: String
  valor: Number
  ddet: String
  qtd_banheiro: Number
  qtd_quarto: Number
  wifi: Boolean
  ar: Boolean
  manutencao: Boolean
  limpeza: Boolean
  fumantes: Boolean
  criancas: Boolean
  userId: Number
  name: String
  email: String
  enderecoId: Number
  cep: String
  rua: String
  bairro: String
  cidade: String
  pais: String
  referencia: String
  complemento: String
  locacaoId: Number
  locacao: String
  nameLocacao: String
  emailLocacao: String
  fotos: Array<String>

  constructor(response:any){
    this.id = response.id
    this.dsin = response.dsin,
    this.valor = response.valor,
    this.ddet = response.ddet,
    this.qtd_banheiro = response.qtd_banheiro,
    this.qtd_quarto = response.qtd_quarto,
    this.wifi = response.wifi,
    this.ar = response.ar,
    this.manutencao = response.manutencao,
    this.limpeza = response.limpeza,
    this.fumantes = response.fumantes,
    this.criancas = response.criancas,
    this.userId = response.userId,
    this.name = response.name,
    this.email = response.email,
    this.enderecoId = response.enderecoId,
    this.cep = response.cep,
    this.rua = response.rua,
    this.bairro = response.bairro,
    this.cidade = response.cidade,
    this.pais = response.pais,
    this.referencia = response.referencia,
    this.complemento = response.complemento,
    this.locacaoId = response.locacaoId,
    this.locacao = response.locacao,
    this.nameLocacao = response.nameLocacao,
    this.emailLocacao = response.emailLocacao,
    this.fotos = response.fotos
  }
}
