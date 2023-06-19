import { Component, Input, OnInit } from '@angular/core';
import { Anuncio } from '../../app/interfaces/anuncio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-residencia',
  templateUrl: './card-residencia.component.html',
  styleUrls: ['./card-residencia.component.css']
})
export class CardResidenciaComponent implements OnInit {

  @Input() anuncio: Anuncio;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToInfoAnuncio(){
    this.router.navigateByUrl(`informacao/${this.anuncio.id}`);
  }

}
