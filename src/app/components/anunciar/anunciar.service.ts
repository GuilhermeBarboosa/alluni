import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnunciarService {

  constructor(private http: HttpClient) { }

  create(anunciar:any): Observable<void> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<void>("http://localhost:8080/api/anuncios", anunciar, { headers: headers });
  }
}
