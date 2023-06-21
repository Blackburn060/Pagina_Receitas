import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {
  private baseUrl = 'https://648d0e9d8620b8bae7ed8954.mockapi.io/apireceitas';

constructor(private http: HttpClient) { }

getReceita(): Observable<any> {
  return this.http.get<any>(`${this.baseUrl}/DadosReceitas`);
}

createReceita(receita: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/DadosReceitas`, receita);
}

}
