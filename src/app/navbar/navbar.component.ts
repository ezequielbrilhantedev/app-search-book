import { Component, OnInit } from '@angular/core';

import { LivrosService } from './../service/livros.service';
import { Livro } from './../models/livro.models';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  livros: Livro[];

  constructor(private livroService: LivrosService) { }

  ngOnInit(): void {
    this.searchBook();
  }

  searchBook() {
    this.livroService.getLivros(valueLivro: string).subscribe(dados => {

    })
  }

}
