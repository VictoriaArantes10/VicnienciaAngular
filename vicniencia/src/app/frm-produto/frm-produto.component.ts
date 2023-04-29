import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produtoVenda } from '../models/produtoVenda';
import { produtoVendaService } from '../service/produtoVendaService';

@Component({
  selector: 'app-frm-produto',
  templateUrl: './frm-produto.component.html',
  styleUrls: ['./frm-produto.component.css']
})
export class produtoVendaFrmComponent implements OnInit {

  produtoVenda: produtoVenda = new produtoVenda();
  id: number = 0;

  constructor(private router: Router, private route: ActivatedRoute, private produtoVendaService: produtoVendaService) {

  }

  salvar() {
    if (this.id > 0) {
      this.produtoVenda.id = this.id;
      this.produtoVendaService.alterar(this.produtoVenda);

    }
    else {
      this.produtoVendaService.inserir(this.produtoVenda);

    }
    console.log(this.produtoVenda);

    this.router.navigate(['/produtoVendas']);
  }

  ngOnInit(): void {

    //recuperar o valor do id da rota
    //recupeerar o objeto da lista
    //carregar a tela
    this.route.paramMap.subscribe(params => {
      if (params.get('id') != null) {
        this.id = Number(params.get('id'));
        console.log(this.id);
        this.carregarprodutoVenda(this.id);
      }
    });
  };

  carregarprodutoVenda(id: number): void {
    this.produtoVenda = this.produtoVendaService.obterPorId(id);

  }

  voltar() {

    this.router.navigate(['/produtoVendas']);
  }
}
