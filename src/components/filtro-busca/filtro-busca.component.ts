import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-filtro-busca',
  templateUrl: './filtro-busca.component.html',
  styleUrls: ['./filtro-busca.component.css']
})
export class FiltroBuscaComponent implements OnInit {
  formEstado = new FormControl('');
  estado: string[] = ['Minas', 'São Paulo', 'Santa Catarina', 'Fifth Avenue'];
  filtroEstado: Observable<string[]> | undefined;

  formCidade = new FormControl('');
  cidade: string[] = ['Teste', 'AAAA', 'Testando...', 'Fifth Avenue'];
  filtroCidade: Observable<string[]> | undefined;

  ngOnInit() {

    this.filtroCidade = this.formCidade.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', 2)),
    );

    this.filtroEstado = this.formEstado.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '', 1)),
    );

  }

  private _filter(value: string, tipo: number): string[] {
    const filterValue = this._normalizeValue(value);

    if(tipo == 1){
      return this.estado.filter(estado => this._normalizeValue(estado).includes(filterValue));
    }else{
      return this.cidade.filter(cidade => this._normalizeValue(cidade).includes(filterValue));
    }
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
