import { HttpClient } from '@angular/common/http';
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
   opcoesAutocompletar1: string[];
  campoAutocompletar1 = new FormControl();
  campoAutocompletar2 = new FormControl();

  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.http.get<any>('assets/cidades.json').subscribe((res: any[]) => {
      this.opcoesAutocompletar1 = res.map((cidade: any) => cidade.nome);
    });
  }

  selecionarOpcao1(event: MatAutocompleteSelectedEvent): void {
    console.log('Opção 1 selecionada:', event.option.value);
  }

  selecionarOpcao2(event: MatAutocompleteSelectedEvent): void {
    console.log('Opção 2 selecionada:', event.option.value);
  }

  filtrarOpcoes1(valor: string): string[] {
    if (!valor) {
      return [];
    }else if( valor.length >= 3 ){
      return this.opcoesAutocompletar1.filter(opcao =>
        opcao.toLowerCase().includes(valor.toLowerCase())
      );
    }
    return [];
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
