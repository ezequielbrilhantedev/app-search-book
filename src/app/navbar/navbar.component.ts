import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { LivrosService } from './../service/livros.service';
import { Livro } from './../models/livro.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  queryField = new FormControl();

  livros: Livro[] = [];

  // livros: Livro[];
  // results$: Observable<Livro>

  // ngOnInit(): void {
  //   this.searchBook();
  // }

  // searchBook() {
  //   this.livroService.getLivros();
  // }

  // readonly SEARCH_URL = 'https://www.googleapis.com/books/v1/volumes'
  // results$: Observable<Livro>
  // total: number;


  constructor(private http: HttpClient,
              private livroService: LivrosService) { }

  ngOnInit(): void {
    // this.searchBook();
    this.getLivros()
  }

  getLivros() {
    this.livroService.getLivros().subscribe(livros => {
      this.livros = livros;
    })
  }

}
