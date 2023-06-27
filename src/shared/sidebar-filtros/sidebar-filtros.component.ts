import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { AnuncioService } from 'src/app/services/anuncio/anuncio.service';

@Component({
  selector: 'app-sidebar-filtros',
  templateUrl: './sidebar-filtros.component.html',
  styleUrls: ['./sidebar-filtros.component.css']
})
export class SidebarFiltrosComponent implements OnInit {
  buscaForm: FormGroup = Object.create(null);

  @Input() arrayAnuncio: Anuncio[];
  @Output() findAnuncio = new EventEmitter();

  constructor( private anuncioService: AnuncioService) {}

  ngOnInit() {
    this.createFormBusca();
  }
  createFormBusca() {
    this.buscaForm = new FormGroup({
      valor: new FormControl(''),
      valorMinimo : new FormControl(''),
      valorMaximo : new FormControl(''),
      qtd_banheiro: new FormControl(''),
      qtd_quarto: new FormControl(''),
      wifi: new FormControl(''),
      ar: new FormControl(''),
      manutencao: new FormControl(''),
      limpeza: new FormControl(''),
      fumantes: new FormControl(''),
      criancas: new FormControl(''),
    });
  }

  findAnuncios(){
    let params : any = {
      "valor": this.buscaForm.value.valor,
      "valorMinimo": this.buscaForm.value.valorMinimo,
      "valorMaximo": this.buscaForm.value.valorMaximo,
      "qtd_banheiro": this.buscaForm.value.qtd_banheiro,
      "qtd_quarto": this.buscaForm.value.qtd_quarto,
      "wifi": this.buscaForm.value.wifi,
      "ar": this.buscaForm.value.ar,
      "manutencao": this.buscaForm.value.manutencao,
      "limpeza": this.buscaForm.value.limpeza,
      "fumantes": this.buscaForm.value.fumantes,
      "criancas": this.buscaForm.value.criancas,
    }
    this.anuncioService.getAnunciosWithParams(params).subscribe(
      (res) => {
        console.log(res)
        var json = JSON.parse(JSON.stringify(res));
        this.arrayAnuncio = json.data;

        this.findAnuncio.emit(this.arrayAnuncio);
      }
    )
  }



}
