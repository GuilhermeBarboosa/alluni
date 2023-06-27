import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

constructor(
  private http: HttpClient
) { }

  getById(id: any) {
    return this.http.get(`${environment.api}/anuncios/${id}`);
  }

  getByAll(){
    return this.http.get(`${environment.api}/anuncios/`);
  }

  getAnunciosWithParams(params: Object){
    console.log(params)
    return this.http.post(`${environment.api}/anuncios/params`, params);
  }
}
