import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnuncioService } from 'src/app/services/anuncio/anuncio.service';

@Component({
  selector: 'app-sidebar-filtros',
  templateUrl: './sidebar-filtros.component.html',
  styleUrls: ['./sidebar-filtros.component.css']
})
export class SidebarFiltrosComponent implements OnInit {
  buscaForm: FormGroup = Object.create(null);

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
    console.log(this.buscaForm.value)
    this.anuncioService.getAnuncios(this.buscaForm.value).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }

}
