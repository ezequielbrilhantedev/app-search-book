import { Component, OnInit } from '@angular/core';

import { LivrosService } from './../service/livros.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap, map, filter, distinctUntilChanged, debounceTime, switchMap } from 'rxjs/operators';

import { Livro } from './../models/livro.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  queryField = new FormControl();
  readonly SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
  results$: Observable<any>;
  total: number;

  livros: Livro[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()),
      filter(value => value.length > 1),
      debounceTime(200),
      distinctUntilChanged(),
      // tap(value => console.log(value)),
      switchMap(value => this.http.get(this.SEARCH_URL, {
        params: {
          search: value,
          // fields: this.FIELDS
        }
      })),
      tap((res: any) => this.total = res.total),
      map((res: any) => res.results)
    );
  }

  searchBook() {
    // this.livroService.getLivros(valueLivro: string).subscribe(dados => {

    // })
  }

}
