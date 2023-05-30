import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../../services/anuncio/anuncio.service';
import { Anuncio } from '../../interfaces/anuncio';
import { FormatterDateService } from 'src/services/formatter-date/formatter-date.service';
@Component({
  selector: 'app-informacao',
  templateUrl: './informacao.component.html',
  styleUrls: ['./informacao.component.css'],
})
export class InformacaoComponent implements OnInit {
  constructor(private anuncioService: AnuncioService,
      private formatterDate: FormatterDateService) {}

  anuncio: Anuncio;

  ngOnInit(): void {
    this.anuncioService.getById(1).subscribe((res: any) => {
      var teste = JSON.parse(JSON.stringify(res));
      this.anuncio = teste;
      console.log(this.anuncio);

      const formatted = this.formatterDate.formatarData(this.anuncio.createdDate);
      this.anuncio.createdDate = formatted;
    });
  }
}
