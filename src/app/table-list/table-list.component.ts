import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../service/livros.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  // livros = [
  //   { id: 1, nome: 'Belo Desastre', autor: 'Jamie McGuire', valor: 37.9, dataPublicacao: '2012-11-29' },
  //   { id: 2, nome: 'Belo casamento', autor: 'Jamie McGuire', valor: 37.9, dataPublicacao: '2014-05-20'}
  // ]

  constructor(private livrosService: LivrosService) { }

  ngOnInit(): void {
  }

  listarLivros(valueData) {

  }

}
