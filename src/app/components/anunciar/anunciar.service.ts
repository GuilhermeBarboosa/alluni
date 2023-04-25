import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciarService {

  constructor(private http: HttpClient) { }

  create(anunciar:any): Observable<any> {
    return this.http.post<any>("htpps://localhost:8080/api/anuncios", anunciar);
  }
}
