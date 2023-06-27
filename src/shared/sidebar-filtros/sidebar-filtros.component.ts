import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sidebar-filtros',
  templateUrl: './sidebar-filtros.component.html',
  styleUrls: ['./sidebar-filtros.component.css']
})
export class SidebarFiltrosComponent implements OnInit {
  buscaForm: FormGroup = Object.create(null);

  constructor() { }

  ngOnInit() {
    this.createFormBusca();
  }
  createFormBusca() {
    this.buscaForm = new FormGroup({
      valorMinimo : new FormControl(''),
      valorMaximo : new FormControl(''),
      banheiro: new FormControl('1'),
      quarto: new FormControl('1'),
      wifi: new FormControl(''),
      ar: new FormControl(''),
      manutencao: new FormControl(''),
      limpeza: new FormControl(''),
      fumantes: new FormControl('false'),
      criancas: new FormControl('false'),
    });
  }

  findAnuncios(){
    console.log(this.buscaForm.value)
  }

}
