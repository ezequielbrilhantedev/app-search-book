import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../components/models/books';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  urlRoot = "https://www.googleapis.com/books/v1/volumes?q="

  // items$: Observable<Book[]>

  constructor(private http: HttpClient) { }

  getBuscarLivroPorNome(valorInput): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.urlRoot}${valorInput}`)
  }
}
