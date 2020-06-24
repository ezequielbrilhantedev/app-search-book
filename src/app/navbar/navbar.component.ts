import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';


import { LivrosService } from './../service/livros.service';
import { Livro } from './../models/livro.models';
import { stringify } from 'querystring';
import { APIResponse } from '../models/api-response.models';
import { debounceTime, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  livroFormGroup: FormGroup;
  livroObservable: Observable<any>;
  total: number;

  livros: Livro[] = [];
  livroSelected: Livro = null;

  searchLivros = '';

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

  constructor(private livroService: LivrosService) { }

  ngOnInit() {
    this.livroFormGroup = new FormGroup({
      nome: new FormControl(null, [Validators.required]),
      autor: new FormControl(null, [Validators.required]),
      valor: new FormControl(null, [Validators.required]),
      dataPublicacao: new FormControl(null, [Validators.required])
    })

    this.livroService.getLivros().subscribe((res:APIResponse<Livro>) => {
      this.livros = res.results 
    })

    this.livroObservable = Observable.create((observer: any) => {
      observer.next(this.searchLivros);
    }).pipe(
      debounceTime(2000),
      mergeMap((search: string) => this.livroService.getLivros(
        this.livroSelected.nome,
        search
      ))
    )
  }

  getLivros() {
    this.livroService.getLivros().subscribe((res:APIResponse<Livro>) => {
      this.livros = res.results 
    })
  }

}
