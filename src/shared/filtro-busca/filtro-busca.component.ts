import { HttpClient } from '@angular/common/http';
import {
  Component,
  Injectable,
  OnInit,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { AnuncioService } from 'src/app/services/anuncio/anuncio.service';

@Component({
  selector: 'app-filtro-busca',
  templateUrl: './filtro-busca.component.html',
  styleUrls: ['./filtro-busca.component.css'],
})
export class FiltroBuscaComponent implements OnInit {
  opcoesAutocompletar1: string[];
  campoAutocompletar1 = new FormControl();
  campoAutocompletar2 = new FormControl();

  cidadeSelecionada = '';

  @Input() arrayAnuncio: Anuncio[];
  @Output() findCity = new EventEmitter();

  constructor(
    private http: HttpClient,
    private anuncioService: AnuncioService
  ) {}

  ngOnInit() {
    this.http.get<any>('assets/cidades.json').subscribe((res: any[]) => {
      this.opcoesAutocompletar1 = res.map((cidade: any) => cidade.nome);
    });
  }

  selecionarOpcao1(event: MatAutocompleteSelectedEvent): void {
    this.cidadeSelecionada = event.option.value;
  }

  filtrarOpcoes1(valor: string): string[] {
    if (!valor) {
      return [];
    } else if (valor.length >= 3) {
      return this.opcoesAutocompletar1.filter((opcao) =>
        opcao.toLowerCase().includes(valor.toLowerCase())
      );
    }
    return [];
  }

  findCitys(event: MatAutocompleteSelectedEvent) {
    console.log('Opção selecionada:', this.cidadeSelecionada);
    let params: any = {
      cidade: this.cidadeSelecionada,
    };
    this.anuncioService.getAnunciosWithParams(params).subscribe((res) => {
      console.log(res);
      var json = JSON.parse(JSON.stringify(res));
      this.arrayAnuncio = json.data;

      this.findCity.emit(this.arrayAnuncio);
    });
  }
}
