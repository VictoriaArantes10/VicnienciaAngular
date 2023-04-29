
import { Component } from '@angular/core';
import { produtoVenda } from '../models/produtoVenda';

import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { produtoVendaService } from '../service/produtoVendaService';


@Component({
  selector: 'app-produtoVenda-lst',
  templateUrl: './produtoVenda-lst.component.html',
  styleUrls: ['./produtoVenda-lst.component.css']
})
export class produtoVendaLstComponent {
  displayedColumns: string[] = ['acoes', 'id', 'nome', 'codigoBarras', 'descricao', 'valor', 'fornecedor', 'grupo', 'obs'];

  dataSource = new MatTableDataSource<produtoVenda>();

  /**
   *
   */
  constructor(private router: Router, private route: ActivatedRoute,
    private produtoVenda: produtoVendaService) {

    this.obterTodos();

  }
  novo(): void {
    this.router.navigate(['/produtoVenda/novo']);

  }
  obterTodos(): void {
    this.dataSource.data = this.produtoVenda.obterTodos();

  }
  remover(id: number): void {

    var result = confirm("Você irá excluir o seu produto, deseja fazer isso?");
    ind: Number;


    if (result) {
      this.produtoVenda.remover(id);

      this.obterTodos();
    }

  }

  alterar(id: number): void {

    this.router.navigate(['/produtoVenda/editar/' + id]);

  }

}

