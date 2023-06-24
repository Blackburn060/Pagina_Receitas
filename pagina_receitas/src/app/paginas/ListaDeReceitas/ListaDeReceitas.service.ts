import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaDeReceitas {
  constructor(private http: HttpClient) { }

  getReceita(): Observable<any> {
    return this.http.get<any>(`https://648d0e9d8620b8bae7ed8954.mockapi.io/apireceitas/DadosReceitas`);
  }

  getReceitaParametro(TituloReceitaGet: any): Observable<any> {
    return this.http.get<any>(`https://648d0e9d8620b8bae7ed8954.mockapi.io/apireceitas/DadosReceitas?titulo=${TituloReceitaGet}`);
  }

  createReceita(receita: any): Observable<any> {
    return this.http.post<any>('https://648d0e9d8620b8bae7ed8954.mockapi.io/apireceitas/DadosReceitas', receita);
  }
}
