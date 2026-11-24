import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getUnidades(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/unidades`);
  }

  getUnidad(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/unidad/${id}`);
  }

  getHabilidadesByUnit(id: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/habilidades/${id}`);
  }

  predecir(id1: any, c1: any, n1: any, civ1: any, id2: any, c2: any, n2: any, civ2: any): Observable<any[]> {
    const body = {
      id1: id1,
      c1: c1,
      n1: n1,
      civ1: civ1,
      id2: id2,
      c2: c2,
      n2: n2,
      civ2: civ2
    };

    return this.http.post<any[]>(`${this.apiUrl}/predecir`, body);
  }
}
