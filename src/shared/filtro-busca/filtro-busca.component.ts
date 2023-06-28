import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-filtro-busca',
  templateUrl: './filtro-busca.component.html',
  styleUrls: ['./filtro-busca.component.css']
})
export class FiltroBuscaComponent implements OnInit {
  opcoesAutocompletar1: string[] = ['Uberaba', 'Uberlândia', 'Contagem'];
  // opcoesAutocompletar2: string[] = ['Opção A', 'Opção B', 'Opção C'];
  campoAutocompletar1 = new FormControl();
  campoAutocompletar2 = new FormControl();

  ngOnInit() {

  }

  selecionarOpcao1(event: MatAutocompleteSelectedEvent): void {
    console.log('Opção 1 selecionada:', event.option.value);
  }

  selecionarOpcao2(event: MatAutocompleteSelectedEvent): void {
    console.log('Opção 2 selecionada:', event.option.value);
  }

  filtrarOpcoes1(valor: string): string[] {
    if (!valor) {
      return this.opcoesAutocompletar1;
    }
    return this.opcoesAutocompletar1.filter(opcao =>
      opcao.toLowerCase().includes(valor.toLowerCase())
    );
  }

  // filtrarOpcoes2(valor: string): string[] {
  //   if (!valor) {
  //     return this.opcoesAutocompletar2;
  //   }
  //   return this.opcoesAutocompletar2.filter(opcao =>
  //     opcao.toLowerCase().includes(valor.toLowerCase())
  //   );
  // }
}
