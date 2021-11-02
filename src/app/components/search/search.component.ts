import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search-service.service';
import { Book } from '../models/books';
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  items: Book[] = [];

  formListBook: FormGroup;

  searchItemBook: string = '';

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  buscarLivros() {
    let valorInput = this.searchItemBook.valueOf()
    this.service.getBuscarLivroPorNome(valorInput).subscribe((items: Book[]) => {
      this.items = items;
    })
  }

  // formTableBook(book: Book) {
  //   this.formListBook = new FormGroup({
  //     titulo: new FormControl(book.volumeInfo.title),
  //     autor: new FormControl(book.volumeInfo.authors),
  //     data_publicacao: new FormControl(book.volumeInfo.publishedDate),
  //     descricao: new FormControl(book.volumeInfo.description),
  //   })
  //   this.searchItemBook = book.volumeInfo.title
  // }

}
