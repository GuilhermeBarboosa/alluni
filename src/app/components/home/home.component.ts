import { Component, OnInit } from '@angular/core';
import { AnuncioService } from 'src/app/services/anuncio/anuncio.service';
import { Anuncio } from 'src/app/interfaces/anuncio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private anuncioService: AnuncioService, private router: Router) { }

  arrayAnuncio: Anuncio[];
  p: number = 1;

  ngOnInit() {
    this.anuncioService.getByAll().subscribe(
      (res: any) => {
        var json = JSON.parse(JSON.stringify(res));
        this.arrayAnuncio = json.data;
      }
    )
  }
}
