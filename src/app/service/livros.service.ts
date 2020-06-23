import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators';
import { Livro } from './../models/livro.models';
import { APIResponse } from './../models/api-response.models';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  // livrosURL = 'https://www.googleapis.com/books/v1/volumes?q='

  constructor(private http: HttpClient) { }

  getLivros(valueLivro: string) {
    return this.http.get(
      `https://www.googleapis.com/books/v1/volumes?q=${valueLivro}`
    ).pipe(
      map((res: APIResponse<Livro>) => {
        return res.results
      })
    )
  }
}
