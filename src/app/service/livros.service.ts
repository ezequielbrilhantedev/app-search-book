import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map, tap } from 'rxjs/operators';
import { Livro } from './../models/livro.models';
import { APIResponse } from './../models/api-response.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  rootUrl: string;

  // livrosURL = 'https://www.googleapis.com/books/v1/volumes?q='
  readonly SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?q='
  // results$: Observable<Livro>
  // total: number;


  constructor(private http: HttpClient) { }

  // getLivros() {
  //   this.results$ = this.http.get<Livro>(this.SEARCH_URL + 'Vingadores')
  //   .pipe(
  //     tap((res: any) => this.total = res.totalItems),
  //     map((res: any) => res.items)
  //   )
  // }

  public getLivros() {
    return this.http.get(
      this.SEARCH_URL + 'Vingadores'
    ).pipe(
      map((res: APIResponse<Livro>) => {
        return res.results
      })
    )
  }
}
