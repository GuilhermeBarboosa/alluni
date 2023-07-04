import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from '../../app/interfaces/anuncio';
import { Router } from '@angular/router';
import { FotoService } from '../../app/services/fotos/foto.service';

@Component({
  selector: 'app-card-residencia',
  templateUrl: './card-residencia.component.html',
  styleUrls: ['./card-residencia.component.css']
})
export class CardResidenciaComponent implements OnInit {

  @Input() anuncio: Anuncio;

  constructor(private router: Router,
      private fotosService : FotoService) { }

  ngOnInit() {
    this.fotosService.getBydIdAnuncio(this.anuncio.id).subscribe(
      (res: any) => {
        var json = JSON.parse(JSON.stringify(res));
        this.anuncio.fotos = json.data[0].nome;
      }
    )

  }

  goToInfoAnuncio(){
    this.router.navigateByUrl(`informacao/${this.anuncio.id}`);
  }

}
