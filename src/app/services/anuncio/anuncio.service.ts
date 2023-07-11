import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnuncioService {
  constructor(private http: HttpClient) {}

  create(anuncio: any): Observable<void> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<void>(
      `${environment.api}/anuncios`,
      anuncio,
      { headers: headers }
    );
  }

  getById(id: any) {
    return this.http.get(`${environment.api}/anuncios/${id}`);
  }

  getByAll() {
    return this.http.get(`${environment.api}/anuncios/`);
  }

  getAnunciosWithParams(params: Object) {
    console.log(params);
    return this.http.post(`${environment.api}/anuncios/params`, params);
  }
}
