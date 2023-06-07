import { FotoService } from './../../services/fotos/foto.service';
import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio/anuncio.service';
import { Anuncio } from '../../interfaces/anuncio';
import { FormatterDateService } from 'src/services/formatter-date/formatter-date.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css'],
})
export class InformacaoComponent implements OnInit {
  constructor(
    private anuncioService: AnuncioService,
    private fotoService: FotoService,
    private sanitizer: DomSanitizer,
    private formatterDate: FormatterDateService
  ) {}

  anuncio: Anuncio;
  caminho: any;

  ngOnInit(): void {
    this.anuncioService.getById(1).subscribe((res: any) => {
      var teste = JSON.parse(JSON.stringify(res));
      this.anuncio = teste;
      console.log(this.anuncio);

      const formatted = this.formatterDate.formatarData(
        this.anuncio.createdDate
      );
      this.anuncio.createdDate = formatted;
    });

    this.fotoService.getById(1).subscribe((res: any) => {
      var teste = JSON.parse(JSON.stringify(res));
      // this.anuncio.foto = teste;
      this.caminho = this.sanitizer.bypassSecurityTrustStyle(
        `${teste.caminho}`
      );
      // this.caminho = teste.caminho;
      console.log(this.caminho.changingThisBreaksApplicationSecurity);
      this.caminho = this.caminho.changingThisBreaksApplicationSecurity;
    });
  }
}
