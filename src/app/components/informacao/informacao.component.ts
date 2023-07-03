import { FotoService } from './../../services/fotos/foto.service';
import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio/anuncio.service';
import { Anuncio } from '../../interfaces/anuncio';
import { FormatterDateService } from 'src/services/formatter-date/formatter-date.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Foto } from 'src/app/interfaces/foto';
import { ActivatedRoute } from '@angular/router';

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
    private activedRouter: ActivatedRoute,
    private formatterDate: FormatterDateService
  ) {}

  id = this.activedRouter.snapshot.params['id'];
  arrayFotos: Foto[];
  anuncio: Anuncio;

  ngOnInit(): void {
    this.anuncioService.getById(this.id).subscribe((res: any) => {
      var json = JSON.parse(JSON.stringify(res));
      this.anuncio = json;
      console.log(this.anuncio);

      const formatted = this.formatterDate.formatarData(
        this.anuncio.createdDate
      );
      this.anuncio.createdDate = formatted;
    });

    this.fotoService.getBydIdAnuncio(this.id).subscribe((res: any) => {
      var json = JSON.parse(JSON.stringify(res));
      console.log(json)
      this.arrayFotos = json.data;
    });


  }


}
