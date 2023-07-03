import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) { }

  create(fotos:any): Observable<void> {
    this.headers.append('Content-Type', 'multipart/form-data')
    return this.http.post<void>("http://localhost:8080/api/fotos", fotos, { headers: this.headers });
  }
}
